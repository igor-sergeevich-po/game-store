import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import "./header.css";

export const Header = () => {
  return (
    <>
      <header className="header">header 2000</header>
      <Outlet />
      <footer>2023</footer>
    </>
  );
};
