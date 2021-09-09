import React from 'react';
import { Formik, Form, Field } from "formik";
import { FilterType } from '../../redux/users-reducer';

type UserSearchFormPropsType = {
  onFilterChanged: (filter: FilterType) => void
}

export const UsersSearchForm: React.FC<UserSearchFormPropsType> = (props) => {

  const submit = (values: FilterType, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void; }) => {
    props.onFilterChanged(values)

  }

  return <div>
    <Formik
      initialValues={{ term: '' }}
      validate={usersSearchFormValidate}
      onSubmit={submit}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="text" name="term" />
          <button type="submit" disabled={isSubmitting}>
            Find
          </button>
        </Form>
      )}
    </Formik>
  </div>;
};
const usersSearchFormValidate = (values: any) => {
  const errors = {};
  return errors;
};

