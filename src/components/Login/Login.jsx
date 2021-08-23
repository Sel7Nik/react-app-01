import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { reduxForm } from 'redux-form';
import { login } from '../../redux/auth-reducer';
import { maxLengthCreator, required } from '../../utils/validators/validators';
import { createField, Input } from '../common/FormsControls/FormsControls';
import css from './../common/FormsControls/FormsControls.module.css';

const maxLength50 = maxLengthCreator(50);
const LoginForm = ({ handleSubmit, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField('Email', 'email', [required, maxLength50], Input)}
      {createField('Password', 'password', [required], Input, {
        type: 'password',
      })}
      {createField(
        null,
        'rememberMe',
        [],
        Input,
        {
          type: 'checkbox',
        },
        'remember me'
      )}

      {error && <div className={css.formSummaryError}>{error}</div>}
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
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);