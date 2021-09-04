import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
  withRouter,
} from 'react-router-dom';
import css from './App.module.css';
import Navbar from './components/Navbar/Navbar';

import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import { compose } from 'redux';
import Preloader from './components/common/preloader/Preloader';
import store, { AppStateType } from './redux/redux-store';
import { Provider } from 'react-redux';

// import DialogsContainer from './components/Dialogs/DialogsContainer';
// import ProfileContainer from './components/Profile/ProfileContainer.jsx';
import { withSuspense } from './hoc/withSuspense';


const DialogsContainer = React.lazy(() =>
  import('./components/Dialogs/DialogsContainer')
);
const ProfileContainer = React.lazy(() =>
  import('./components/Profile/ProfileContainer.jsx')
);

const DialogsSuspense = withSuspense(DialogsContainer)
const ProfileSuspense = withSuspense(ProfileContainer)

type MapPropsType = ReturnType<typeof mapStateToProps>
type DispathPropsType = {
  initializeApp: () => void
}

class App extends Component<MapPropsType & DispathPropsType> {
  catchAllUnhandledErrors = (event: PromiseRejectionEvent) => {
    alert("Something had gone wrong");
  };

  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors);
  }
  componentWillUnmount() {
    window.removeEventListener(
      'unhandledrejection',
      this.catchAllUnhandledErrors
    );
  }
  render() {
    if (!this.props.initialized) return <Preloader />;
    return (
      <div className={css.app__wrapper}>
        <HeaderContainer />
        <Navbar />
        <div className={css.app__wrapper__content}>
          <Switch>
            <Route exact path="/" render={() => <Redirect to={'/profile'} />} />

            <Route path="/dialogs" render={() => <DialogsSuspense />} />

            <Route
              path="/profile/:userId?"
              render={() => <ProfileSuspense />}
            />

            <Route
              path="/users"
              render={() => <UsersContainer pageTitle={'react typescript'} />}
            />
            <Route path="/login" render={() => <LoginPage />} />

            <Route path="*" render={() => <div>404 NOT FOUND</div>} />
          </Switch>
        </div>
      </div>
    );
  }
}
let mapStateToProps = (state: AppStateType) => ({
  initialized: state.app.initialized,
});

let AppContainer = compose<React.ComponentType>(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);

const MainApp: React.FC = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  );
};
export default MainApp;
