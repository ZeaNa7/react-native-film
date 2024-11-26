const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500'; // Base URL for images

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOGUxYjA5NDM5MzMxNDI4MzdhNGVhMDEwODkxYzRkZCIsIm5iZiI6MTcyODk3NzYyNC4yMzY4NDcsInN1YiI6IjY2ZjUwNDNhMzg5NDJhYjg5MGVkM2JiZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VcSTqlub2xcaexgeA8x0ClWDwn7a-FMH-eAXWLceCnU',
  },
};

export interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  backdrop_path: string | null;
  overview: string;
  release_date: string;
  [key: string]: any;
}

export interface MovieResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

const endpoints = {
  POPULAR_MOVIES: `${BASE_URL}/movie/popular?language=en-US&page=1`,
  TOP_RATED_MOVIES: `${BASE_URL}/movie/top_rated?language=en-US&page=1`,
  ROMANCE_MOVIES: `${BASE_URL}/discover/movie?with_genres=10749&language=en-US&page=1`,
  SPORT_MOVIES: `${BASE_URL}/search/movie?query=sport&language=en-US&page=1`,
  KIDS_MOVIES: `${BASE_URL}/discover/movie?with_genres=10751&language=en-US&page=1`,
  HORROR_MOVIES: `${BASE_URL}/discover/movie?with_genres=27&language=en-US&page=1`,
};

export const fetchPopularMovies = async (): Promise<MovieResponse> => {
  const response = await fetch(endpoints.POPULAR_MOVIES, options);
  const data: MovieResponse = await response.json();

  data.results = data.results.map(movie => ({
    ...movie,
    poster_path: movie.poster_path
      ? `${IMAGE_BASE_URL}${movie.poster_path}`
      : null,
    backdrop_path: movie.backdrop_path
      ? `${IMAGE_BASE_URL}${movie.backdrop_path}`
      : null,
  }));

  return data;
};

export const fetchTopRatedMovies = async (): Promise<MovieResponse> => {
  const response = await fetch(endpoints.TOP_RATED_MOVIES, options);
  const data: MovieResponse = await response.json();

  data.results = data.results.map(movie => ({
    ...movie,
    poster_path: movie.poster_path
      ? `${IMAGE_BASE_URL}${movie.poster_path}`
      : null,
    backdrop_path: movie.backdrop_path
      ? `${IMAGE_BASE_URL}${movie.backdrop_path}`
      : null,
  }));

  return data;
};

export const fetchRomanceMovies = async (): Promise<MovieResponse> => {
  const response = await fetch(endpoints.ROMANCE_MOVIES, options);
  const data: MovieResponse = await response.json();

  data.results = data.results.map(movie => ({
    ...movie,
    poster_path: movie.poster_path
      ? `${IMAGE_BASE_URL}${movie.poster_path}`
      : null,
    backdrop_path: movie.backdrop_path
      ? `${IMAGE_BASE_URL}${movie.backdrop_path}`
      : null,
  }));

  return data;
};

export const fetchSportMovies = async (): Promise<MovieResponse> => {
  const response = await fetch(endpoints.SPORT_MOVIES, options);
  const data: MovieResponse = await response.json();

  data.results = data.results.map(movie => ({
    ...movie,
    poster_path: movie.poster_path
      ? `${IMAGE_BASE_URL}${movie.poster_path}`
      : null,
    backdrop_path: movie.backdrop_path
      ? `${IMAGE_BASE_URL}${movie.backdrop_path}`
      : null,
  }));

  return data;
};

export const fetchKidsMovies = async (): Promise<MovieResponse> => {
  const response = await fetch(endpoints.KIDS_MOVIES, options);
  const data: MovieResponse = await response.json();

  data.results = data.results.map(movie => ({
    ...movie,
    poster_path: movie.poster_path
      ? `${IMAGE_BASE_URL}${movie.poster_path}`
      : null,
    backdrop_path: movie.backdrop_path
      ? `${IMAGE_BASE_URL}${movie.backdrop_path}`
      : null,
  }));

  return data;
};

export const fetchHorrorMovies = async (): Promise<MovieResponse> => {
  const response = await fetch(endpoints.HORROR_MOVIES, options);
  const data: MovieResponse = await response.json();

  data.results = data.results.map(movie => ({
    ...movie,
    poster_path: movie.poster_path
      ? `${IMAGE_BASE_URL}${movie.poster_path}`
      : null,
    backdrop_path: movie.backdrop_path
      ? `${IMAGE_BASE_URL}${movie.backdrop_path}`
      : null,
  }));

  return data;
};
