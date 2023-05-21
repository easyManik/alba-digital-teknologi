import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginApp } from "../Redux/Action/login";
import img from "../../img/img";

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
    <div style={{ backgroundColor: "rgba(255, 206, 7, 0.2)", height: "100vh" }}>
      <div>
        <img src={img.alba} alt="" className="p-5" style={{ width: "35vh" }} />
        <div className="p-5" style={{ color: "grey" }}>
          <h1>
            <b>Login Page</b>
          </h1>
          <p>Masukkan email dan kata sandi anda</p>
        </div>
      </div>
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
          className="btn py-3 px-5 mt-5"
          style={{
            borderRadius: "10px",
            backgroundColor: "#FFCE07",
          }}
        >
          <b>Login</b>
        </button>
      </form>
    </div>
  );
};

export default Login;
