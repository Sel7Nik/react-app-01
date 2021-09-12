import React, { FC, useEffect } from 'react';
import Paginator from '../common/Paginator/Paginator';
import User from './User';
import { UsersSearchForm } from './UsersSearchForm';
import { FilterType, follow, requestUsers, unfollow } from '../../redux/users-reducer';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCurrentPage,
  getFollowingInProgress,
  getPageSize,
  getTotalUsersCount,
  getUsers,
  getUsersFilter
} from '../../redux/users-selectors';

type PropsUsersType = {}

export const Users: FC<PropsUsersType> = (props) => {

  const users = useSelector(getUsers)
  const totalItemsCount = useSelector(getTotalUsersCount)
  const currentPage = useSelector(getCurrentPage)
  const pageSize = useSelector(getPageSize)
  const filter = useSelector(getUsersFilter)
  const followingInProgress = useSelector(getFollowingInProgress)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(requestUsers(currentPage, pageSize, filter))
  }, []);

  const onPageChanged = (pageNumber: number) => {
    dispatch(requestUsers(pageNumber, pageSize, filter))
  }

  const onFilterChanged = (filter: FilterType) => {
    dispatch(requestUsers(1, pageSize, filter))
  }

  const _follow = (userId: number) => { dispatch(follow(userId)) }

  const _unfollow = (userId: number) => { dispatch(unfollow(userId)) }
  return (
    <div>
      <UsersSearchForm onFilterChanged={onFilterChanged} />

      <Paginator
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        totalItemsCount={totalItemsCount}
        pageSize={pageSize}
      />{' '}
      <div>
        {users.map((user) => (
          <User
            key={user.id}
            user={user}
            followingInProgress={followingInProgress}
            unfollow={_unfollow}
            follow={_follow}
          />
        ))}
      </div>
    </div>
  );
};

