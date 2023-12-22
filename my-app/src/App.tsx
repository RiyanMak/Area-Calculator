import React from 'react';
// import logo from './logo.svg';
import About from './components/About';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <main>
        <About />
      </main>
    </div>
  );
}

export default App;
