import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { MovieCard } from "./MovieCard";

export const Watchlist = () => {
  const { watchlist } = useContext(GlobalContext);
  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading"> My Watch List</h1>
        </div>
        <div className="movie-grid">
          {watchlist.map((movie) => (
            <MovieCard movie={movie} type="watchlist" key={movie.id} />
          ))}
        </div>
      </div>
    </div>
  );
};
