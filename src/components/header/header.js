import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { CartBlock } from '../cart-block';
import './header.css';

export const Header = () => {
  return (
    <>
      <header className="header">
        <div className="wrapper">
          <NavLink to="/game-store" className="header__store-title">
            Game Store
          </NavLink>
        </div>
        <div className="wrapper header__cart-btn-wrapper">
          <CartBlock />
        </div>
      </header>
      <Outlet />
      <footer>2023</footer>
    </>
  );
};
