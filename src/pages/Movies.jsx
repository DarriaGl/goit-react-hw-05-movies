import MoviesItem from 'components/MoviesItem/MoviesItem';
import List from 'components/List/List';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearch } from 'services/Api';
import Searchbar from '../components/Searchbar/Searchbar';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (query) {
      if (error) {
        setError(false);
      }
      setLoading(true);
      const fetchSearchMovies = async () => {
        try {
          const searchMovies = await fetchSearch(query);
          if (searchMovies.length === 0) {
            throw new Error(
              `There are no movies for the request of '${query}'`
            );
          } else {
            setMovies(searchMovies);
          }
        } catch (error) {
          setError(error.message);
          console.log(error);
        } finally {
          setLoading(false);
        }
      };
      fetchSearchMovies();
    } else {
      setMovies([]);
    }
  }, [error, query]);

  return (
    <>
      <Searchbar onSetSearch={setSearchParams} />
      {loading ? (
        <p>loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <List
          data={movies}
          ItemComponent={MoviesItem}
          className={'movie-list'}
        />
      )}
    </>
  );
};
export default Movies;
