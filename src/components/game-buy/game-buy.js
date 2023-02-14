import React from 'react';
import { Button } from '../button/button';
import { useDispatch } from 'react-redux';
import './game-buy.css';
import { setItemInCart } from '../../redux/cart/reducer';

export const GameBuy = ({ game }) => {
  const dispatch = useDispatch();

  const handleClick = (event) => {
    event.stopPropagation();
    dispatch(setItemInCart(game));
  };
  return (
    <div className="game-buy">
      <span className="game-buy__price">{game.price} rub.</span>
      <Button type="primary" onClick={handleClick}>
        В Корзину
      </Button>
    </div>
  );
};
