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
import { useHistory } from 'react-router';

type PropsUsersType = {}

type QueryParamsType = { term?: string; page?: string; friend?: string }

export const Users: FC<PropsUsersType> = (props) => {

  const users = useSelector(getUsers)
  const totalItemsCount = useSelector(getTotalUsersCount)
  const currentPage = useSelector(getCurrentPage)
  const pageSize = useSelector(getPageSize)
  const filter = useSelector(getUsersFilter)
  const followingInProgress = useSelector(getFollowingInProgress)

  const dispatch = useDispatch()
  const history = useHistory()
  const querystring = require('querystring');

  useEffect(() => {
    const parsed = querystring.parse(history.location.search.substr(1)) as QueryParamsType
    let actualPage = currentPage
    let actualFilter = filter

    if (!!parsed.page) actualPage = Number(parsed.page)

    if (!!parsed.term) actualFilter = { ...actualFilter, term: parsed.term as string }

    switch (parsed.friend) {
      case "null":
        actualFilter = { ...actualFilter, friend: null }
        break;
      case "true":
        actualFilter = { ...actualFilter, friend: true }
        break;
      case "false":
        actualFilter = { ...actualFilter, friend: false }
        break;
    }

    dispatch(requestUsers(actualPage, pageSize, actualFilter))
  }, []);

  useEffect(() => {

    const query: QueryParamsType = {}

    if (!!filter.term) query.term = filter.term
    if (filter.friend !== null) query.friend = String(filter.friend)
    if (currentPage !== 1) query.page = String(currentPage)


    history.push({
      pathname: '/users',
      search: querystring.stringify(query)
      // search: `?term=${filter.term}&friend=${filter.friend}&page=${currentPage}`
    })
  }, [filter, history, currentPage])



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

