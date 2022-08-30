import React, { useEffect, useState } from 'react';
import Aside from './components/Aside';
import Header from './components/Header';
import Markdown from './components/Markdown';
import DeleteModal from './components/DeleteModal';

import './App.css';

const getStorageTheme = () => {
  let theme = 'light-mode'
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem.apply('theme')
  }
  return theme;
}

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [theme, setTheme] = useState('light-mode');
  const [showModal, setShowModal] = useState(false);
  const [showAside, setShowAside] = useState(false);

  const toggleAside = () => {
    setShowAside((prevState) => !prevState);
  };

  const toggleModal = () => {
    setShowModal((prevState) => !prevState);
  };

  const toggleTheme = () => {
    if (darkMode) {
      setTheme('dark-mode')
    } else {
      setTheme('light-mode')
    }
  };

  const toggleDarkMode = () => {
    setDarkMode((prevState) => !prevState);
    toggleTheme()
  };

  useEffect(() => {
    document.documentElement.className = theme
    localStorage.setItem('theme', theme)
}, [theme])

  
  return (
    <main>
      <DeleteModal showModal={showModal} toggleModal={toggleModal} />
      <div className="main__aside-container">
        <Aside
          showAside={showAside}
          toggleAside={toggleAside}
          darkMode={darkMode}
          toggleTheme={toggleDarkMode}
        />
      </div>
      <div className={`markdown ${showAside ? 'translate' : ''}`}>
        <Header
          showAside={showAside}
          toggleAside={toggleAside}
          toggleModal={toggleModal}
        />
        <Markdown />
      </div>
    </main>
  );
};

export default App;
