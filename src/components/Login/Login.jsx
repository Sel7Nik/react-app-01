import { Field, reduxForm } from 'redux-form';

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={'input'} name={'login'} placeholder={'Login'} />
      </div>
      <div>
        <Field component={'input'} name={'password'} placeholder={'Password'} />
      </div>
      <div>
        <Field component={'input'} name={'rememberMe'} type={'checkbox'} />{' '}
        remember me
      </div>
      <div>
        <button>Log in</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: 'login',
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    console.log(formData);
  };
  return (
    <div>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};
export default Login;
