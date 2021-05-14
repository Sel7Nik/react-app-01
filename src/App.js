import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Profile from './components/Profile/Profile.jsx';

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
