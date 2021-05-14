import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from './components/Dialogs/Dialogs.jsx';

// function App() {
const App = () => {
  return (
    <>
      <div className="container app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Dialogs />
        </div>
        {/* <Profile /> */}
      </div>
    </>
  );
};

export default App;
