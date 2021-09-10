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
  getUsersFilter,
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
  filter: FilterType
}

type MapDispatchPropsUsersContainerType = {
  requestUsers: (currentPage: number, pageSize: number, filter: FilterType) => void
  unfollow: (userId: number) => void
  follow: (userId: number) => void
}
type OwnPropsUsersContainerType = {
  pageTitle: string
}


type PropsUsersContainerType = MapStatePropsUsersContainerType & MapDispatchPropsUsersContainerType & OwnPropsUsersContainerType

class UsersContainer extends React.Component<PropsUsersContainerType> {
  componentDidMount() {
    const { currentPage, pageSize, filter } = this.props;
    let pageNumber = currentPage
    this.props.requestUsers(pageNumber, pageSize, filter)
  }

  onPageChanged = (pageNumber: number) => {
    const { pageSize, filter } = this.props;
    this.props.requestUsers(pageNumber, pageSize, filter);
  };

  onFilterChanged = (filter: FilterType) => {
    const { pageSize } = this.props;
    this.props.requestUsers(1, pageSize, filter);
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
    filter: getUsersFilter(state)
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
