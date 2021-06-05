const LoginForm = (props) => {
  return (
    <form>
      <div>
        <input placeholder="Login" />
      </div>
      <div>
        <input placeholder="Password" />
      </div>
      <div>
        <input type="checkbox" /> remember me
      </div>
      <div>
        <button>Log in</button>
      </div>
    </form>
  );
};

const Login = (props) => {
  return (
    <div>
      <h1>LOGIN</h1>
      <LoginForm />
    </div>
  );
};
export default Login;
