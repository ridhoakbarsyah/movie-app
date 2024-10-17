import axios from "axios";

const apiKey = "030d46036aede4482e18ed860c1b3a03";
const tmdbApi = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: apiKey,
  },
});

export const fetchNowPlayingMovies = async () => {
  const response = await tmdbApi.get("/movie/now_playing", {
    params: { language: "en-US", page: 1 },
  });
  return response.data.results.slice(0, 6);
};

export const fetchPopularMovies = async (page: number = 1) => {
  const response = await tmdbApi.get("/movie/popular", {
    params: { language: "en-US", page },
  });
  return response.data.results;
};
