import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../utils/validators/validators';
import { Input } from '../common/preloader/FormsControls/FormsControls';

const maxLength10 = maxLengthCreator(10);
const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder="Login"
          component={Input}
          name={'login'}
          validate={[required, maxLength10]}
        />
      </div>
      <div>
        <Field
          placeholder="Password"
          component={Input}
          name={'password'}
          validate={[required, maxLength10]}
        />
      </div>
      <div>
        <Field
          type="checkbox"
          component={Input}
          name={'rememberMe'}
          validate={[required, maxLength10]}
        />
        remember me
      </div>
      <div>
        <button>Login</button>
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
      <h1>LOGIN</h1>;
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};
export default Login;
