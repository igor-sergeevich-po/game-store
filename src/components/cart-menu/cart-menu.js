import React from 'react';
import { Button } from '../button/button';
import { calcTotalPrice } from '../utils';
import './cart-menu.css';

export const CartMenu = ({ items, onClick }) => {
  return (
    <div className="cart-menu">
      <div className="cart-menu__games-list">
        {items.length > 0 ? items.map((game) => game.title) : 'Корзина пуста'}
      </div>
      {items.length > 0 ? (
        <div className="cart-menu__arrange">
          <div className="cart-menu__total-prece">
            <span>Итог:</span>
            <span>{calcTotalPrice(items)} rub.</span>
          </div>
          <Button type="primary" size="m" onClick={onClick}>
            Оформить заказ
          </Button>
        </div>
      ) : null}
    </div>
  );
};
