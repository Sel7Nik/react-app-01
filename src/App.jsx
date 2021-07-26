import React from 'react';
// import News from './components/News/News.jsx';
// import Music from './components/Music/Music.jsx';
// import Settings from './components/Settings/Settings.jsx';
import { Route } from 'react-router-dom';
import s from './App.module.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import ProfileContainer from './components/Profile/ProfileContainer.jsx';
import UsersContainer from './components/Users/UsersContainer.jsx';

// function App() {
const App = (props) => {
  return (
    <div className={s.app__wrapper}>
      <Header />
      <Navbar />
      <div className={s.app__wrapper__content}>
        <Route path="/dialogs" render={() => <DialogsContainer />} />

        <Route path="/profile/:userId?" render={() => <ProfileContainer />} />

        <Route path="/users" render={() => <UsersContainer />} />

        {/* <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
        <Route path="/settings" component={Settings} /> */}
      </div>
    </div>
  );
};

export default App;
