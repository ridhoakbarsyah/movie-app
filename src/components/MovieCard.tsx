import React, { useState } from "react";

interface MovieCardProps {
  movie: any;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  // State untuk menyimpan daftar film favorit
  const [favorites, setFavorites] = useState<any[]>([]);

  // Fungsi untuk menambahkan film ke daftar favorit
  const addToFavorites = (movie: any) => {
    // Periksa apakah film sudah ada di daftar favorit
    if (!favorites.some((fav) => fav.id === movie.id)) {
      setFavorites([...favorites, movie]);
      alert(`${movie.title} has been added to your favorites!`);
    } else {
      alert(`${movie.title} is already in your favorites!`);
    }
  };

  return (
    <div className="col-md-4">
      <div className="card mb-4 shadow-sm">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="card-img-top" alt={movie.title} />
        <div className="card-body">
          <h5 className="card-title">{movie.title}</h5>
          <p className="card-text">{movie.overview}</p>
          <button className="btn btn-outline-primary" onClick={() => addToFavorites(movie)}>
            Add to Favorites
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
