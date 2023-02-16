import React from 'react';
import { Link } from 'react-router-dom';
import './not-fined-page.css';

export const NotFinedPage = () => {
  return (
    <>
      <div className="fon_content">
        <h1 className="text-align-center">
          the page for your request was not found
        </h1>
        <Link className="base-link text-align-right" to="/">
          go home
        </Link>
      </div>
    </>
  );
};
