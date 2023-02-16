import React from 'react';
import './popup.css';
export const Popup = ({ popupIsActive, setPopupIsActive }) => {
  const handleClosePopup = () => {
    setPopupIsActive(false);
  };
  return (
    <div
      onClick={handleClosePopup}
      className={`popup ${popupIsActive ? '' : 'popup-active'}`}
    >
      <div onClick={(e) => e.stopPropagation()} className="popup_content">
        <h1>title popup</h1>
      </div>
    </div>
  );
};
