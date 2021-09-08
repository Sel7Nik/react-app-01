import React, { FC } from 'react';
import { Formik, Form, Field } from "formik";
import { UserType } from '../../types/type';
import Paginator from '../common/Paginator/Paginator';
import User from './User';

type PropsUsersType = {
  totalItemsCount: number
  pageSize: number
  currentPage: number
  onPageChanged: (pageNumber: number) => void
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
      <UsersSearchForm />

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

const usersSearchFormValidate = (values: any) => {
  const errors = {}
  return errors
}

const UsersSearchForm = () => {
  return <div>
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={usersSearchFormValidate}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="email" name="email" />
          <Field type="password" name="password" />
          <button type="submit" disabled={isSubmitting}>
            Find
          </button>
        </Form>
      )}
    </Formik>
  </div>
}

export default Users;
