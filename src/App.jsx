import React from 'react';
import s from './App.module.css';
import HeaderContainer from './components/Header/HeaderContainer.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import ProfileContainer from './components/Profile/ProfileContainer.jsx';
import DialogsContainer from './components/Dialogs/DialogsContainer.jsx';
import News from './components/News/News.jsx';
import Music from './components/Music/Music.jsx';
import Settings from './components/Settings/Settings.jsx';
import { Route } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import Login from './components/Login/Login';

const App = (p) => {
  return (
    <div className={s.app__wrapper}>
      <HeaderContainer />
      <Navbar />
      <div className={s.app__wrapper__content}>
        <Route path="/profile/:userId?" render={() => <ProfileContainer />} />

        <Route path="/dialogs" render={() => <DialogsContainer />} />

        <Route path="/users" render={() => <UsersContainer />} />

        <Route path="/login" render={() => <Login />} />

        <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
        <Route path="/settings" component={Settings} />
      </div>
    </div>
  );
};

export default App;
