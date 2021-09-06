import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {
  getUserProfile,
  getStatus,
  updateStatus,
  savePhoto,
  saveProfile,
} from '../../redux/profile-reducer';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { ProfileType } from '../../types/type';
import { AppStateType } from '../../redux/redux-store';


type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
  getUserProfile: (userId: number) => void
  getStatus: (userId: number) => void
  updateStatus: (status: string) => void
  savePhoto: (file: File) => void
  saveProfile: (profile: ProfileType) => Promise<any>
}

type PathParamsType = {
  userId: string
}

type PropsProfileContainerType = MapPropsType & DispatchPropsType & RouteComponentProps<PathParamsType>;

class ProfileContainer extends React.Component<PropsProfileContainerType> {
  refreshProfile() {
    let userId: number | null = +this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authUserId;
      if (!userId) {
        // todo: may be replace push with Redirect??
        this.props.history.push("/login");
      }
    }

    if (!userId) {
      console.error("ID should exists in URI params or in state ('authorizedUserId')");
    } else {
      this.props.getUserProfile(userId)
      this.props.getStatus(userId)
    }
  }

  componentDidMount() {
    this.refreshProfile();
  }
  componentDidUpdate(prevProps: PropsProfileContainerType) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile();
    }
  }
  render() {
    return (
      <Profile
        {...this.props}
        isOwner={!!this.props.match.params.userId}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
        savePhoto={this.props.savePhoto}
      />
    );
  }
}

let mapStateToProps = (state: AppStateType) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authUserId: state.auth.userId,
  isAuth: state.auth.isAuth,
});

let mapDispatchToProps = {
  getUserProfile,
  getStatus,
  updateStatus,
  savePhoto,
  saveProfile,
};

export default compose<React.ComponentType>(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
