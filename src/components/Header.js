import React, { useState } from 'react';
import menuIcon from '../assets/icon-menu.svg';
import closeIcon from '../assets/icon-close.svg';

import FileIcon from './FileIcon';
import './Header.css';
import SaveChangesBtn from './SaveChangesBtn';
import DeleteIcon from './DeleteIcon';
import MarkdownLogo from './MarkdownLogo';

const Header = ({ showAside, toggleAside, showModal, toggleModal }) => {
  const [fileName, setFileName] = useState('welcome.md');
  const [isEditing, setIsEditing] = useState(false);

  const fileNameHandler = (e) => {
    setFileName(e.target.value);
  };

  return (
    <header>
      <div className="header__btn-container">
        <button className="toggle-menu" onClick={toggleAside}>
          {showAside ? (
            <img src={closeIcon} alt="close menu-icon" />
          ) : (
            <img src={menuIcon} alt="show menu-icon" />
          )}
        </button>
      </div>

      <div className="header__file-info-container">
        <div className='left'>
          <div className="header__logo-container">
            <MarkdownLogo />
          </div>
          <div className="file-name-field">
            <div className="header__file-icon-container">
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
          </div>
        </div>

        <div className="save-delete-file">
          <div className="delete-btn-container">
            <DeleteIcon toggleModal={toggleModal} />
          </div>

          <div className="save-btn-container">
            <SaveChangesBtn />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
