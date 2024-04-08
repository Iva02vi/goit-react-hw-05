import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYzMyMjM0MDg3ZTBmMmRiNWQ4YjEwYWRlNmMxZDBkNiIsInN1YiI6IjY2MTJkNjZjMTEwOGE4MDE3ZDhlYmMzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LDc8T0NBJ5v9xR_-9Y0onzvn-8sEHtmE5UiepdLkPNc",
  },
};

export const fetchMovies = async () => {
  const { data } = await axios.get("/trending/movie/day", options);
  return data.results;
}

export const fetchMovie = async (id) => {
  const { data } = await axios.get(`/movie/${id}`, options);
  return data;
}

export const fetchMovieCredits = async (id) => {
  const { data } = await axios.get(`/movie/${id}/credits`, options);
  return data.cast;
}

export const fetchMovieReview = async (id) => {
  const { data } = await axios.get(`/movie/${id}/reviews`, options);
  return data.results;
}

export const fetchMoviesByTitle = async (search) => {
  const { data } = await axios.get(`/search/movie?query=${search}`, options);
  return data.results;
}
