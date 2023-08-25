import {
  Poster,
  Votes,
  Container,
  Wraper,
  Information,
  Navigation,
  Title,
  TextTitle,
  Text,
  Link,
  CastReview,
} from './MovieDetails.styled';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import moviePoster from '../../images/photoshop-film-strip.jpg';
import { BsFillStarFill } from 'react-icons/bs';

const MovieDetails = ({ movie }) => {
  const src = movie.poster_path
    ? `https://image.tmdb.org/t/p/w342${movie.poster_path}`
    : moviePoster;

  const title =
    movie.release_date === '' ? (
      <Title>{movie.title}</Title>
    ) : (
      <Title>
        {movie.title} ({`${movie.release_date}`.split('-')[0]})
      </Title>
    );
  const rating =
    movie.vote_average & (movie.vote_average !== 0) ? (
      <Votes>
        <BsFillStarFill color="#6d90a8" />
        <p>{movie.vote_average.toFixed(1)}</p>
      </Votes>
    ) : null;

  const overview =
    movie && movie.overview && movie.overview.length > 0 ? (
      <>
        <TextTitle>Overview</TextTitle>
        <Text>{movie.overview}</Text>
      </>
    ) : null;
  const genres = movie.genres && movie.genres.length > 0 && (
    <>
      <TextTitle>Genres</TextTitle>{' '}
      <Text>{movie.genres.map(genre => genre.name).join(', ')}</Text>
    </>
  );

  return (
    <>
      <Container>
        <Poster src={src} alt={`Poster for ${movie.title}`} />
        <Wraper>
          <Information>
            {title}
            {rating}
            {overview}
            {genres}
          </Information>
          <CastReview>
            <TextTitle>Information</TextTitle>
            <Navigation>
              <li>
                <Link to="cast">Cast</Link>
              </li>
              <li>
                <Link to="reviews">Reviews</Link>
              </li>
            </Navigation>
            <Suspense fallback={<div>Loading...</div>}>
              <Outlet />
            </Suspense>
          </CastReview>
        </Wraper>
      </Container>
    </>
  );
};

export default MovieDetails;
