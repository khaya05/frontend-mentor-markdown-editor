import React from 'react';
import './Preview.css';

const Preview = ({ label, icon, togglePreview}) => {
  return (
    <div className="container">
      <div className="container__label">
        <p>{label}</p>
      </div>
      <button className="show-icon" onClick={togglePreview}>
        <img src={icon} alt={label} />
      </button>
    </div>
  );
};

export default Preview;
