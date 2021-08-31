import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { InjectedFormProps, reduxForm } from 'redux-form';
import { login } from '../../redux/auth-reducer';
import { AppStateType } from '../../redux/redux-store';
import { maxLengthCreator, required } from '../../utils/validators/validators';
import { createField, Input, LoginFormValuesType } from '../common/FormsControls/FormsControls';
import css from './../common/FormsControls/FormsControls.module.css';

type LoginFormOwnPropsType = {
  captchaUrl: string | null
}

const maxLength50 = maxLengthCreator(50);


//!   LoginForm

type MapStatePropsType = {
  captchaUrl: string | null
  isAuth: boolean
}

type MapDispatchPropsType = {
  login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}



const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnPropsType> & LoginFormOwnPropsType> = ({ handleSubmit, error, captchaUrl }) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField('Email', 'email', [required, maxLength50], Input)}
      {createField('Password', 'password', [required], Input, {
        type: 'password',
      })}
      {createField(
        undefined,
        'rememberMe',
        [],
        Input,
        {
          type: 'checkbox',
        },
        'remember me'
      )}

      {captchaUrl && <img src={captchaUrl} alt={'captcha'} />}

      {captchaUrl &&
        createField('Symbols from image', 'captcha', [required], Input)}

      {error && <div className={css.formSummaryError}>{error}</div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

//!   LoginReduxForm

const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnPropsType>({
  form: 'login',
})(LoginForm);

//!   Login
const Login: React.FC<MapStatePropsType & MapDispatchPropsType> = (props) => {
  const onSubmit = (formData: LoginFormValuesType) => {
    props.login(
      formData.email,
      formData.password,
      formData.rememberMe,
      formData.captcha
    );
  };

  if (props.isAuth) {
    return <Redirect to={'/profile'} />;
  }

  return (
    <div>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
  );
};
const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
