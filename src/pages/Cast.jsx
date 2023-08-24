import CastItem from 'components/Cast/Cast';
import List from 'components/List/List';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'services/Api';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    if (error) {
      setError(false);
    }
    setLoading(true);
    const fetchSendCast = async () => {
      try {
        const sendCast = await fetchCast(movieId);
        if (sendCast) {
          setCast(sendCast);
          console.log('cast', sendCast);
        }
        if (sendCast.success === false) {
          throw new Error(`The resource you requested could not be found.`);
        }
      } catch (error) {
        setError(error.message);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchSendCast();
  }, [error, movieId]);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <List data={cast} ItemComponent={CastItem} className={'cast-list'} />
      )}
    </>
  );
};
export default Cast;
