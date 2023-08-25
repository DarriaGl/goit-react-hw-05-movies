import { Link, useLocation } from 'react-router-dom';
import moviePoster from '../../images/photoshop-film-strip.jpg';
import { Item, Title, PosterImage, Votes } from './MovieItem.styled';
import { BsFillStarFill } from 'react-icons/bs';

const MoviesItem = ({ element }) => {
  const location = useLocation();
  const src = element.poster_path
    ? `https://image.tmdb.org/t/p/w342${element.poster_path}`
    : moviePoster;

  return (
    <Item>
      <Link to={`/movies/${element.id}`} state={{ from: location }}>
        <PosterImage src={src} alt={`Poster for ${element.title}`} />
        <Title>{element.title}</Title>

        <Votes>
          <BsFillStarFill />
          <p>{element.vote_average.toFixed(1)}</p>
        </Votes>
      </Link>
    </Item>
  );
};

export default MoviesItem;
