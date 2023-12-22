import React from 'react';
// import logo from './logo.svg';
import About from './components/About';
import './App.css';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <About />
      </main>
    </div>
  );
}

export default App;
