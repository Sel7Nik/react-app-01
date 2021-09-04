import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { AppStateType } from '../redux/redux-store';

let mapStateToPropsForRedirect = (state: AppStateType) => ({
  isAuth: state.auth.isAuth,
});

type MapStatePropsType = {
  isAuth: boolean
}
type MapDispatchPropsType = {}

export function withAuthRedirect<WC>(Component: React.ComponentType<WC>) {
  const RedirectComponent: React.FC<MapStatePropsType & MapDispatchPropsType> = (props) => {
    // let isAuth = props.isAuth;
    let { isAuth, ...restProps } = props

    if (!isAuth) return <Redirect to={'/login'} />;
    return <Component {...restProps as WC} />;

  }

  let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(
    RedirectComponent
  );

  return ConnectedAuthRedirectComponent;
};
