import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Content from './components/Content';
import News from './components/News';
import Cards from './components/Cards';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <NavBar />
      <Header />
      <Content />
      <News />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
