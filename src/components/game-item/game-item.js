import React from "react";
import "./game-item.css";

export const GameItem = ({ game }) => {
  return (
    <div className="game-item">
      <div className="game-item__details">
        <span className="game-item__title">{game.title}</span>
        <div className="game-item__genre">
          {game.genres.map((genre) => genre)}
        </div>
        <div className="game-item__buy">Buy</div>
      </div>
    </div>
  );
};
