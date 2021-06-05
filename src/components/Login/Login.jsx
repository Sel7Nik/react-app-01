const Login = (props) => {
  return (
    <div>
      <h1>LOGIN</h1>
      <form>
        <div>
          <input placeholder="Login" />
        </div>
        <div>
          <input placeholder="Password" />
        </div>
        <div>
          <input ptype="checkbox" /> remember me
        </div>
        <div>
          <button>Log in</button>
        </div>
      </form>
    </div>
  );
};
export default Login;
