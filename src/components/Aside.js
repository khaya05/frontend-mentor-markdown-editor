import { useState } from 'react';
import './Aside.css';
import AsideDocumentsInfo from './AsideDocumentsInfo';
import MarkdownLogo from './MarkdownLogo';
import ThemeButton from './ThemeButton';
const Aside = ({ showAside }) => {
  return (
    <aside className={`${showAside ? 'aside show' : ''}`}>
      <div className="logo-container">
        <MarkdownLogo />
      </div>
      <AsideDocumentsInfo />
      <div className='theme-toggle-btn-container'>
        <ThemeButton />
      </div>
    </aside>
  );
};

export default Aside;
