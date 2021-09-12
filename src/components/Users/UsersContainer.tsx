import React from 'react';
import { useSelector } from 'react-redux';
import Preloader from '../common/preloader/Preloader';
import { getIsFetching } from '../../redux/users-selectors';
import { Users } from './Users';

type PropsUserPageType = {
  pageTitle: string
}

export const UserPage: React.FC<PropsUserPageType> = (props) => {
  const isFetching = useSelector(getIsFetching)
  return <>
    <h2>{props.pageTitle}</h2>
    {isFetching ? <Preloader /> : null}
    <Users />
  </>
}

