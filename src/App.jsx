import React from 'react';

import s from './App.module.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Profile from './components/Profile/Profile.jsx';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News.jsx';
import Music from './components/Music/Music.jsx';
import Settings from './components/Settings/Settings.jsx';

import { Route } from 'react-router-dom';

// function App() {
const App = (props) => {
  return (
    <div className={s.app__wrapper}>
      <Header />
      <Navbar />
      <div className={s.app__wrapper__content}>
        <Route
          path="/dialogs"
          render={() => <DialogsContainer store={props.store} />}
        />

        <Route path="/profile" render={() => <Profile store={props.store} />} />

        <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
        <Route path="/settings" component={Settings} />
      </div>
    </div>
  );
};

export default App;
