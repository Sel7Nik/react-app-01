import React from 'react';
import './App.css';
import Header from './components/header.jsx';
import Navbar from './components/navbar.jsx';
import Profile from './components/profile';

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
