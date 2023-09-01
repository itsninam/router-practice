import Nav from "../components/Nav";

const Login = () => {
  return (
    <div className="wrapper">
      <Nav />
      <form action="">
        <label htmlFor="email">Please enter your email</label>
        <input type="text" id="email" />

        <label htmlFor="password">Please enter your password</label>
        <input type="password" id="password" />
      </form>
    </div>
  );
};

export default Login;
