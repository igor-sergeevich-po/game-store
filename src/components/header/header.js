import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { CartBlock } from '../cart-block';

import './header.css';

export const Header = () => {
  const data = Date().split(' ').slice(0, 4).join(' ');

  return (
    <>
      <header className="header">
        <div className="wrapper">
          <NavLink to="/game-store/" className="header__store-title">
            Game Store
          </NavLink>
          <NavLink to="/game-store/order" className="header__store-title">
            Order Page
          </NavLink>
        </div>
        <div className="wrapper header__cart-btn-wrapper">
          <CartBlock />
        </div>
      </header>
      <Outlet />
      <footer className="footer text-align-center">
        <span className="secondary-text">{data}</span>
      </footer>
    </>
  );
};
