import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import Preloader from '../common/preloader/Preloader';
import {
  follow,
  unfollow,
  setCurrentPage,
  toggleFollowingProgress,
  requestUsers,
} from '../../redux/users-reducer';
import { compose } from 'redux';
import {
  getUsers,
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
} from '../../redux/users-selectors';
import { UserType } from '../../types/type';
import { AppStateType } from '../../redux/redux-store';

type PropsUsersContainerType = {
  currentPage: number
  pageSize: number
  isFetching: boolean
  totalUsersCount: number
  users: Array<UserType>

  requestUsers: (currentPage: number, pageSize: number) => void
  followingInProgress: Array<number>
  unfollow: () => void
  follow: () => void
}

class UsersContainer extends React.Component<PropsUsersContainerType> {
  componentDidMount() {
    const { currentPage, pageSize } = this.props;
    let pageNumber = currentPage
    this.props.requestUsers(pageNumber, pageSize);
  }

  onPageChanged = (pageNumber: number) => {
    const { pageSize } = this.props;
    this.props.requestUsers(pageNumber, pageSize);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalItemsCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          followingInProgress={this.props.followingInProgress}
        // toggleFollowingProgress={this.props.toggleFollowingProgress}
        />
      </>
    );
  }
}

let mapStateToProps = (state: AppStateType) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};

let mapDispatchToProps = {
  follow,
  unfollow,
  setCurrentPage,
  toggleFollowingProgress,
  requestUsers,
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(
  // @ts-ignore
  UsersContainer
)
