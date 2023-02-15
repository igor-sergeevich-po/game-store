import React from 'react';
import { Link } from 'react-router-dom';
import './not-fined-page.css';

export const NotFinedPage = () => {
  return (
    <>
      <div className="fon_content">
        <h1>NotFinedPage</h1>
        <Link to="/">go home</Link>
      </div>
    </>
  );
};
