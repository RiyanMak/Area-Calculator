import React from 'react';
import About from './components/About';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = () => {
  console.log("App component rendering");
  return (
    <div className="app">
      <Header />
      <main>
        <About /> {/* Use PascalCase here */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
