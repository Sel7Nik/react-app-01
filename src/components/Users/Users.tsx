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

type UsersSearchFormObjectType = {
  term: string,
}

const UsersSearchForm = () => {

  const submit = (values: UsersSearchFormObjectType, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => { }


  return <div>
    <Formik
      initialValues={{ term: '' }}
      validate={usersSearchFormValidate}
      onSubmit={submit}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="text" name="text" />
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
