import React from 'react';
import { useState } from 'react';
import { BiCartAlt } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { CartMenu } from '../cart-menu/cart-menu';
import { ItemsInCart } from '../items-in-cart/items-in-cart';
import { calcTotalPrice } from '../utils';

import './cart-block.css';

export const CartBlock = () => {
  const [isCartMenuVisible, setIsCArtMenuVisible] = useState(false);
  const items = useSelector((state) => state.cart.itemsInCart);
  const totalPrice = calcTotalPrice(items);

  return (
    <div className="cart-block">
      <ItemsInCart quantity={items.length} />
      <BiCartAlt
        size={25}
        className="cart-block__icon"
        onClick={() => setIsCArtMenuVisible(!isCartMenuVisible)}
      />
      {totalPrice > 0 ? (
        <span className="cart-block__total-price">{totalPrice} rub.</span>
      ) : null}
      {isCartMenuVisible && <CartMenu items={items} onClick={() => {}} />}
    </div>
  );
};
