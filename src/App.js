import React from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Navbar from './components/Navbar.jsx';
import Profile from './components/Profile';

// function App() {
const App = () => {
  return (
    <>
      <div className="container app-wrapper">
        <Header />
        <Navbar />
        <Profile />
      </div>
    </>
  );
};

export default App;
