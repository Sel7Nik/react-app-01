import React from 'react';
import { Formik, Form, Field } from "formik";

export const UsersSearchForm = () => {

  const submit = (values: UsersSearchFormObjectType, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void; }) => { };
  setTimeout(() => {
    alert("edsrgfdgdsfgfdsgds");
    // setSubmitting(false);
  }, 400);

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
type UsersSearchFormObjectType = {
  term: string;
};
