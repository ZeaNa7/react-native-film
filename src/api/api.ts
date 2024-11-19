const BASE_URL = 'https://api.themoviedb.org/3';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOGUxYjA5NDM5MzMxNDI4MzdhNGVhMDEwODkxYzRkZCIsIm5iZiI6MTcyODk3NzYyNC4yMzY4NDcsInN1YiI6IjY2ZjUwNDNhMzg5NDJhYjg5MGVkM2JiZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VcSTqlub2xcaexgeA8x0ClWDwn7a-FMH-eAXWLceCnU',
  },
};

const endpoints = {
  POPULAR_MOVIES: `${BASE_URL}/movie/popular?language=en-US&page=1`,
  TOP_RATED_MOVIES: `${BASE_URL}/movie/top_rated?language=en-US&page=1`,
};

export const fetchPopularMovies = async () => {
  const response = await fetch(endpoints.POPULAR_MOVIES, options);
  const data = await response.json();
  return data;
};

export const fetchTopRatedMovies = async () => {
  const response = await fetch(endpoints.TOP_RATED_MOVIES, options);
  const data = await response.json();
  return data;
};
