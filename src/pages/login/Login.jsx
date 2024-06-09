import React, { useState } from "react";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { toast } from "react-toastify";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginClick = (event) => {
    event.preventDefault();

    if (username === "john32" && password === "87654321") {
      window.location.href = "/admin";
    } else {
      toast("Invalid username or password");
    }
  };

  return (
    <div className="container login">
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
        <form onSubmit={handleLoginClick}>
          <h2>Login</h2>

          <label htmlFor="username">Username</label>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            id="username"
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
          />

          <button type="submit">Login</button>
          <div className="social">
            <div className="go">
              <FaGoogle /> Google
            </div>
            <div className="fb">
              <FaFacebook /> Facebook
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
