import React, { useState } from 'react';
import menuIcon from '../assets/icon-menu.svg';
import closeIcon from '../assets/icon-close.svg';
import deleteIcon from '../assets/icon-delete.svg';
import saveIcon from '../assets/icon-save.svg';

import FileIcon from './FileIcon';
import './Header.css'


const Header = ({ showAside, toggleAside }) => {
  const [fileName, setFileName] = useState('welcome.md');
  const [isEditing, setIsEditing] = useState(false);

  const fileNameHandler = (e) => {
    setFileName(e.target.value);
  };

  return (
    <header>
      <div className="header__btn-container">
        <button className="toggle-menu" onClick={toggleAside} >
          {showAside ? (
            <img src={closeIcon} alt="close menu" />
          ) : (
            <img src={menuIcon} alt="show menu" />
          )}
        </button>
      </div>

      <div className="header__file-info-container">
        <div>
          <FileIcon />
        </div>

        <div className="input-container">
          {isEditing && <label htmlFor="file-name">document name</label>}
          <input
            name="file-name"
            type="text"
            className="file-name"
            value={fileName}
            onFocus={() => setIsEditing(true)}
            onChange={() => fileNameHandler}
          />
        </div>

        <div className="delete-btn-container">
          <button className="delete-btn">
            <img src={deleteIcon} alt="delete" />
          </button>
        </div>

        <div className="save-btn-container">
          <button className="save-btn">
            <img src={saveIcon} alt="save" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
