import React from 'react';
import { Button } from '../button/button';
import { useDispatch, useSelector } from 'react-redux';
import './game-buy.css';
import { deleteItemFromCart, setItemInCart } from '../../redux/cart/reducer';

export const GameBuy = ({ game }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.itemsInCart);
  const isItemInCart = items.some((item) => item.id === game.id);

  const handleClick = (event) => {
    event.stopPropagation();
    if (isItemInCart) {
      dispatch(deleteItemFromCart(game.id));
    } else {
      dispatch(setItemInCart(game));
    }
  };
  return (
    <div className="game-buy">
      <span className="game-buy__price">{game.price} rub.</span>
      <Button
        type={isItemInCart ? 'secondary' : 'primary'}
        onClick={handleClick}
      >
        {isItemInCart ? 'Убрать в корзину' : 'В Корзину'}
      </Button>
    </div>
  );
};
