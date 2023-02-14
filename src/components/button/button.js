import classNames from 'classnames';
import React from 'react';
import './button.css';

export const Button = ({ onClick, type, children, size = 's' }) => {
  const btnClass = classNames({
    btn: true,
    'btn--secondary': type === 'secondary',
    'btn--primary': type === 'primary',
    'btn--medium': type === 'm',
    'btn--small': type === 's',
  });

  return (
    <button className={btnClass} onClick={onClick}>
      {children}
    </button>
  );
};
