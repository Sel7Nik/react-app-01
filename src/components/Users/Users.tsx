import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { FilterType } from '../../redux/users-reducer';
import { getCurrentPage, getPageSize, getTotalUsersCount } from '../../redux/users-selectors';
import { UserType } from '../../types/type';
import Paginator from '../common/Paginator/Paginator';
import User from './User';
import { UsersSearchForm } from './UsersSearchForm';

type PropsUsersType = {
  // totalItemsCount: number
  // pageSize: number
  // currentPage: number
  onPageChanged: (pageNumber: number) => void
  onFilterChanged: (filter: FilterType) => void
  users: Array<UserType>
  portionSize?: number
  followingInProgress: Array<number>
  unfollow: (userId: number) => void
  follow: (userId: number) => void
}


let Users: FC<PropsUsersType> = ({
  onPageChanged,
  users,
  portionSize,
  ...props
}) => {

  const totalItemsCount = useSelector(getTotalUsersCount)
  const currentPage = useSelector(getCurrentPage)
  const pageSize = useSelector(getPageSize)
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
