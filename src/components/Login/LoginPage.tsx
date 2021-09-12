import { InjectedFormProps, reduxForm } from 'redux-form';
import { createField, Input } from '../common/FormsControls/FormsControls';
import { useDispatch, useSelector } from 'react-redux';
import { maxLengthCreator, required } from '../../utils/validators/validators';
import { login } from '../../redux/auth-reducer';
import { Redirect } from 'react-router-dom';
import { AppStateType } from '../../redux/redux-store';
import css from './../common/FormsControls/FormsControls.module.css';

type LoginFormOwnPropsType = {
  captchaUrl: string | null
}

const maxLength50 = maxLengthCreator(50);


//!   LoginForm

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnPropsType> & LoginFormOwnPropsType> = ({ handleSubmit, error, captchaUrl }) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField<LoginFormValuesTypeKeys>('Email', 'email', [required, maxLength50], Input)}
      {createField<LoginFormValuesTypeKeys>('Password', 'password', [required], Input, {
        type: 'password',
      })}
      {createField<LoginFormValuesTypeKeys>(
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
        createField<LoginFormValuesTypeKeys>('Symbols from image', 'captcha', [required], Input)}

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

export type LoginFormValuesType = {
  email: string
  password: string
  rememberMe: boolean
  captcha: string
}

type LoginFormValuesTypeKeys = Extract<keyof LoginFormValuesType, string>

//!   Login
export const LoginPage: React.FC = () => {

  const captchaUrl = useSelector((state: AppStateType) => state.auth.captchaUrl)
  const isAuth = useSelector((state: AppStateType) => state.auth.isAuth)
  const dispatch = useDispatch()

  const onSubmit = (formData: LoginFormValuesType) => {
    dispatch(
      login(
        formData.email,
        formData.password,
        formData.rememberMe,
        formData.captcha
      )
    )
  }

  if (isAuth) {
    return <Redirect to={'/profile'} />;
  }

  return (
    <div>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl} />
    </div>
  );
};
