import React from 'react';
import { BiCartAlt } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import './cart-block.css';

export const CartBlock = () => {
  const item = useSelector((state) => state.cart.itemsInCart);
  const totalPrice = item.reduce((acc, curr) => (acc += curr.price), 0);
  return (
    <div className="cart-block">
      <BiCartAlt size={25} className="cart-block__icon" />
      <span className="cart-block__total-price">{totalPrice} rub.</span>
    </div>
  );
};
