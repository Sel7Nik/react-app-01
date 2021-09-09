import React, { FC } from 'react';
import { FilterType } from '../../redux/users-reducer';
import { UserType } from '../../types/type';
import Paginator from '../common/Paginator/Paginator';
import User from './User';
import { UsersSearchForm } from './UsersSearchForm';

type PropsUsersType = {
  totalItemsCount: number
  pageSize: number
  currentPage: number
  onPageChanged: (pageNumber: number) => void
  onFilterChanged: (filter: FilterType) => void
  users: Array<UserType>
  portionSize?: number
  followingInProgress: Array<number>
  unfollow: (userId: number) => void
  follow: (userId: number) => void
}


let Users: FC<PropsUsersType> = ({
  totalItemsCount,
  currentPage,
  pageSize,
  onPageChanged,
  users,
  portionSize,
  ...props
}) => {
  return (
    <div>
      <UsersSearchForm onFilterChanged={props.onFilterChanged} />

      <Paginator
        currentPage={currentPage}
        totalItemsCount={totalItemsCount}
        pageSize={pageSize}
        onPageChanged={onPageChanged}
        portionSize={portionSize}
      />{' '}
      <div>
        {users.map((user) => (
          <User
            key={user.id}
            user={user}
            followingInProgress={props.followingInProgress}
            unfollow={props.unfollow}
            follow={props.follow}
          />
        ))}
      </div>
    </div>
  );
};



export default Users;
