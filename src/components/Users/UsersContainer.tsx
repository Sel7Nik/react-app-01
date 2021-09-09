import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import Preloader from '../common/preloader/Preloader';
import {
  follow,
  unfollow,
  requestUsers,
  FilterType,
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




type MapStatePropsUsersContainerType = {
  currentPage: number
  pageSize: number
  totalUsersCount: number
  isFetching: boolean
  users: Array<UserType>
  followingInProgress: Array<number>
}

type MapDispatchPropsUsersContainerType = {
  requestUsers: (currentPage: number, pageSize: number, term: string) => void
  unfollow: (userId: number) => void
  follow: (userId: number) => void
}
type OwnPropsUsersContainerType = {
  pageTitle: string
}

// type PropsUsersContainerType = {
//   pageTitle: string
//   currentPage: number
//   pageSize: number
//   isFetching: boolean
//   totalUsersCount: number
//   users: Array<UserType>

//   requestUsers: (currentPage: number, pageSize: number) => void
//   followingInProgress: Array<number>
//   unfollow: () => void
//   follow: () => void
// }

type PropsUsersContainerType = MapStatePropsUsersContainerType & MapDispatchPropsUsersContainerType & OwnPropsUsersContainerType

class UsersContainer extends React.Component<PropsUsersContainerType> {
  componentDidMount() {
    const { currentPage, pageSize } = this.props;
    let pageNumber = currentPage
    this.props.requestUsers(pageNumber, pageSize, '');
  }

  onPageChanged = (pageNumber: number) => {
    const { pageSize } = this.props;
    this.props.requestUsers(pageNumber, pageSize, '');
  };

  onFilterChanged = (filter: FilterType) => {
    const { pageSize, currentPage } = this.props;
    this.props.requestUsers(currentPage, pageSize, filter.term);
  }

  render() {
    return (
      <>
        <h2>{this.props.pageTitle}</h2>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalItemsCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          onFilterChanged={this.onFilterChanged}
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

let mapStateToProps = (state: AppStateType): MapStatePropsUsersContainerType => {
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

  requestUsers,
};

export default compose(connect<MapStatePropsUsersContainerType, MapDispatchPropsUsersContainerType, OwnPropsUsersContainerType, AppStateType>(mapStateToProps, mapDispatchToProps))(
  // @ts-ignore
  UsersContainer
)
