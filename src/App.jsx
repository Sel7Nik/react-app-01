import React from 'react';

import s from './App.module.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import News from './components/News/News.jsx';
import Music from './components/Music/Music.jsx';
import Settings from './components/Settings/Settings.jsx';

import { Route, BrowserRouter } from 'react-router-dom';

// function App() {
const App = (p) => {
  return (
    <BrowserRouter>
      <div className={s.app__wrapper}>
        <Header />
        <Navbar />
        <div className={s.app__wrapper__content}>
          {/* <Route path="/dialogs" component={Dialogs} /> */}
          <Route
            path="/dialogs"
            render={() => <Dialogs name={p.dialogs} message={p.messages} />}
          />
          {/* <Route path="/dialogs" component={() => <Dialogs />} /> */}

          {/* <Route path="/profile" component={Profile} /> */}
          <Route path="/profile" render={() => <Profile myposts={p.posts} />} />
          {/* <Route path="/profile" component={() => <Profile />} /> */}

          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
