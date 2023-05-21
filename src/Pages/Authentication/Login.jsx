import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginApp } from "../Redux/Action/login";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const login = (e) => {
    e.preventDefault();

    let data = {
      email,
      password,
    };
    dispatch(loginApp(data, navigate));
  };

  return (
    <div>
      <div>Login</div>{" "}
      <Link rel="stylesheet" to="/home">
        home
      </Link>
      <form onSubmit={login}>
        <div className="m-3">
          <input
            type="email"
            src="email"
            placeholder="email"
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            className="p-2"
            style={{ borderRadius: "10px", width: "500px" }}
          />
        </div>
        <div className="m-3">
          <input
            type="password"
            placeholder="password"
            value={password}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            className="p-2"
            style={{ borderRadius: "10px", width: "500px" }}
          />
        </div>

        <button
          style={{
            borderRadius: "10px",
            padding: "5px",
            width: "150px",
            backgroundColor: "green",
            color: "white",
          }}
        >
          <b>Login</b>
        </button>
      </form>
    </div>
  );
};

export default Login;
