import { useState } from 'react';
import './Aside.css';
import AsideDocumentsInfo from './AsideDocumentsInfo';
import MarkdownLogo from './MarkdownLogo';
import ThemeButton from './ThemeButton';
const Aside = ({ showAside, darkMode, toggleDarkMode }) => {
  return (
    <aside className={`${showAside ? 'aside show' : ''}`}>
      <div className="logo-container">
        <MarkdownLogo />
      </div>
      <AsideDocumentsInfo />
      <div className='theme-toggle-btn-container'>
        <ThemeButton darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </div>
    </aside>
  );
};

export default Aside;
