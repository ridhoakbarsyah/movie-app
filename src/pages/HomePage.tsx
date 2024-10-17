import React, { useEffect, useState } from "react";
import { fetchNowPlayingMovies, fetchPopularMovies } from "../api/tmdbApi";
import MovieCard from "../components/MovieCard";

const HomePage: React.FC = () => {
  const [nowPlayingMovies, setNowPlayingMovies] = useState<any[]>([]);
  const [popularMovies, setPopularMovies] = useState<any[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchMovies = async () => {
      const nowPlaying = await fetchNowPlayingMovies();
      const popular = await fetchPopularMovies();
      setNowPlayingMovies(nowPlaying);
      setPopularMovies(popular.slice(0, 6)); // Limit 6
    };
    fetchMovies();
  }, []);

  const loadMoreMovies = async () => {
    const newPage = page + 1;
    const newMovies = await fetchPopularMovies(newPage);
    setPopularMovies((prevMovies) => [...prevMovies, ...newMovies.slice(0, 6)]);
    setPage(newPage);
  };

  return (
    <div className="container">
      <h1>Now Playing</h1>
      <div className="row">
        {nowPlayingMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <h1>Popular Movies</h1>
      <div className="row">
        {popularMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <button className="btn btn-primary" onClick={loadMoreMovies}>
        Load More
      </button>
    </div>
  );
};

export default HomePage;
