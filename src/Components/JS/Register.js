import React, { useState } from "react";
import "../CSS/Register.css";
import PulseLoader from "react-spinners/PulseLoader";
import { Link, useHistory } from "react-router-dom";

import { auth } from "../REQs/Firebase";

function Register() {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({ name: "", email: "", password: "" });

  const handleOnChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const register = (e) => {
    e.preventDefault();
    setLoading(true);

    auth
      .createUserWithEmailAndPassword(user.email, user.password)
      .then((auth) => {
        auth.user.updateProfile({
          displayName: user.name,
        });
      })
      .then(() => {
        setTimeout(() => {
          history.push("/");
        }, 1500);
      })
      .catch((error) => alert(error.message))
      .then(() => setLoading(true));
  };

  return (
    <div className="register">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png"
          alt="amazon-logo"
          className="register__logo"
        />
      </Link>

      <div className="register__container">
        <h1>Create Account</h1>

        <form>
          <h5>Your name</h5>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleOnChange}
          />
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

          <button onClick={register}>
            {loading ? (
              <PulseLoader size={8} color={"black"} loading={loading} />
            ) : (
              "Create account on Amazon"
            )}
          </button>
        </form>

        <p>
          By creating an account, you agree to the Terms of Use and Privacy
          Notice of AMAZON MOHZAIBSOFT.
        </p>

        <div className="register__alreadyAccount">
          Already have an account?&nbsp;
          <Link to="/login">
            <strong>Sign in</strong>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;