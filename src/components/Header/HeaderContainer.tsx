import React from 'react';
import Header, { DispatchPropsHeaderType, MapPropsHeaderType } from './Header';
import { connect } from 'react-redux';
import { logout } from '../../redux/auth-reducer';
import { AppStateType } from '../../redux/redux-store';

type PropsHeaderContainerType = MapPropsHeaderType & DispatchPropsHeaderType


class HeaderContainer extends React.Component<PropsHeaderContainerType> {
  render() {
    return <Header {...this.props} />;
  }
}
let mapStateToProps = (state: AppStateType) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

// class HeaderContainer extends React.Component {
//   render() {
//     return <Header isAuth={false} login={''} logout={function (): void {
//       throw new Error('Function not implemented.');
//     }} {...this.props} />;
//   }
// }
// let mapStateToProps = (state: AppStateType) => ({
//   isAuth: state.auth.isAuth,
//   login: state.auth.login,
// });

export default connect<MapPropsHeaderType, DispatchPropsHeaderType, {}, AppStateType>(mapStateToProps, { logout })(HeaderContainer);
