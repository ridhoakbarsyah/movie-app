import React, { useState } from "react";

const ProfilePage: React.FC = () => {
  const [favorites] = useState<any[]>([]);

  return (
    <div className="container">
      <h1>Your Favorite Movies</h1>
      <div className="row">
        {favorites.length > 0 ? (
          favorites.map((movie) => (
            <div className="col-md-4" key={movie.id}>
              <div className="card mb-4 shadow-sm">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="card-img-top" alt={movie.title} />
                <div className="card-body">
                  <h5 className="card-title">{movie.title}</h5>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No favorite movies yet.</p>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
