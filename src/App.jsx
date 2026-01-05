import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LandingPage, ComponentsPage, Navbar } from './components';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <BrowserRouter>
      <div className={`app ${darkMode ? 'dark' : ''}`}>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route
            path="/"
            element={<LandingPage componentsCount={43} />}
          />
          <Route
            path="/components"
            element={<ComponentsPage darkMode={darkMode} setDarkMode={setDarkMode} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
