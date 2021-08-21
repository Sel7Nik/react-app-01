import { BrowserRouter, Route, withRouter } from 'react-router-dom';
import css from './App.module.css';
import Navbar from './components/Navbar/Navbar.jsx';

import UsersContainer from './components/Users/UsersContainer.jsx';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { initializeApp } from './redux/app-reducer.js';
import { compose } from 'redux';
import Preloader from './components/common/preloader/Preloader';
import store from './redux/redux-store';
import { Provider } from 'react-redux';

// import DialogsContainer from './components/Dialogs/DialogsContainer';
import ProfileContainer from './components/Profile/ProfileContainer.jsx';
import { Suspense } from 'react';

const DialogsContainer = React.lazy(() =>
  import('./components/Dialogs/DialogsContainer')
);
// const ProfileContainer = React.lazy(() =>
//   import('./components/Profile/ProfileContainer.jsx')
// );

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
          <Route
            path="/dialogs"
            render={() => {
              return (
                <div>
                  <Suspense fallback={<div>Loading...</div>}>
                    <DialogsContainer />
                  </Suspense>
                </div>
              );
            }}
          />

          <Route
            path="/profile/:userId?"
            render={() => {
              return (
                <div>
                  <Suspense fallback={<div>Loading...</div>}>
                    <ProfileContainer />
                  </Suspense>
                </div>
              );
            }}
          />

          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/login" render={() => <LoginPage />} />
        </div>
      </div>
    );
  }
}
let mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);

const MainApp = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  );
};
export default MainApp;
