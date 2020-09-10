import React, { useState } from "react";
import "../CSS/Login.css";
import PulseLoader from "react-spinners/PulseLoader";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../REQs/Firebase";

function Login() {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({ email: "", password: "" });

  const handleOnChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const signIn = (e) => {
    e.preventDefault();
    setLoading(true);
    auth
      .signInWithEmailAndPassword(user.email, user.password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message))
      .then(() => setLoading(false));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png"
          alt="amazon-logo"
        />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>

        <form onSubmit={signIn}>
          <h5>E-mail</h5>
          <input
            type="text"
            name="email"
            value={user.email}
            onChange={handleOnChange}
          />

          <h5>Password</h5>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleOnChange}
          />

          <button className="login__signInButton">
            {loading ? (
              <PulseLoader size={8} color={"black"} loading={loading} />
            ) : (
              "Sign In"
            )}
          </button>
        </form>

        <p>
          By continuing, you agree to AMAZON MOHZAIBSOFT Terms of Use and Privacy
          Notice.
        </p>

        <div className="login__newUser">
          <p>Don't you have an account?</p>
          <Link to="register">
            <button className="login__registerButton">
              Create your Amazon Account
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;