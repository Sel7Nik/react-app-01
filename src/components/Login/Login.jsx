import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { login } from '../../redux/auth-reducer';
import { maxLengthCreator, required } from '../../utils/validators/validators';
import { Input } from '../common/preloader/FormsControls/FormsControls';

const maxLength50 = maxLengthCreator(50);
const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder="Email"
          component={Input}
          name={'email'}
          validate={[required, maxLength50]}
        />
      </div>
      <div>
        <Field
          placeholder="Password"
          component={Input}
          name={'password'}
          type={'password'}
          validate={[required, maxLength50]}
        />
      </div>
      <div>
        <Field
          type="checkbox"
          component={Input}
          name={'rememberMe'}
          validate={[required, maxLength50]}
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
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth) {
    return <Redirect to={'/profile'} />;
  }

  return (
    <div>
      <h1>LOGIN</h1>;
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
