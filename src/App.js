import React, { useState } from 'react';
import Aside from './components/Aside';
import Header from './components/Header';
import Markdown from './components/Markdown';

import './App.css';
import DeleteModal from './components/DeleteModal';
const App = () => {
  const [showAside, setShowAside] = useState(!false);

  const toggleAside = () => {
    setShowAside((prevState) => !prevState);
  };

  return (
    <main>
      <Aside showAside={showAside} toggleAside={toggleAside} />
      <div className={`markdown ${showAside ? 'translate' : ''}`}>
        <Header showAside={showAside} toggleAside={toggleAside} />
        <Markdown />
      </div>
    </main>
  );
};

export default App;
