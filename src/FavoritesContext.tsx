import React, { createContext, useState, ReactNode, useContext } from "react";

const FavoritesContext = createContext<any>(null);

export const useFavorites = () => {
  return useContext(FavoritesContext);
};

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<any[]>([]);

  const addToFavorites = (movie: any) => {
    if (!favorites.some((fav) => fav.id === movie.id)) {
      setFavorites([...favorites, movie]);
    }
  };

  return <FavoritesContext.Provider value={{ favorites, addToFavorites }}>{children}</FavoritesContext.Provider>;
};
