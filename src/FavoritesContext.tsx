import React, { createContext, useState, ReactNode, useContext } from "react";

// Buat context
const FavoritesContext = createContext<any>(null);

// Hook untuk menggunakan context
export const useFavorites = () => {
  return useContext(FavoritesContext);
};

// Provider untuk membungkus komponen yang membutuhkan akses ke favorites
export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<any[]>([]);

  const addToFavorites = (movie: any) => {
    if (!favorites.some(fav => fav.id === movie.id)) {
      setFavorites([...favorites, movie]);
    }
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};
