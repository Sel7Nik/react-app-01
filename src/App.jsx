// import React from 'react';
// import News from './components/News/News.jsx';
// import Music from './components/Music/Music.jsx';
// import Settings from './components/Settings/Settings.jsx';
import { Route, withRouter } from 'react-router-dom';
import css from './App.module.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Navbar from './components/Navbar/Navbar.jsx';
import ProfileContainer from './components/Profile/ProfileContainer.jsx';
import UsersContainer from './components/Users/UsersContainer.jsx';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import { Component } from 'react';
import { connect } from 'react-redux';
import { initializeApp } from './redux/app-reducer.js';
import { compose } from 'redux';
import Preloader from './components/common/preloader/Preloader';

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) return <Preloader />;
    return (
      <div className={css.app__wrapper}>
        <HeaderContainer />
        <Navbar />
        <div className={css.app__wrapper__content}>
          <Route path="/dialogs" render={() => <DialogsContainer />} />

          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />

          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/login" render={() => <LoginPage />} />

          {/* <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
        <Route path="/settings" component={Settings} /> */}
        </div>
      </div>
    );
  }
}
let mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});
export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);
