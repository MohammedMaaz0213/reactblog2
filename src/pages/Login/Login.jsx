import React from "react";
import "./login.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form action="" className="loginForm">
        <label>Email</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter your email..."
        />

        <label>Password</label>
        <input
          type="password"
          className="loginInput"
          placeholder="Enter your Password..."
        />
        <button class="loginButton">Login</button>
      </form>
      <button class="loginRegisterButton">
        {" "}
        <Link className="link" to="/register">
          Register
        </Link>
      </button>
    </div>
  );
}
