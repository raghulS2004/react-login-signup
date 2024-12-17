import React from "react";

const Login = ({ toggleForm }) => {
  return (
    <div className="form-container">
      <h2>Welcome Back!</h2>
      <form>
        <div className="input-group">
          <label>Username</label>
          <input type="text" placeholder="Enter your username" />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input type="password" placeholder="Enter your password" />
        </div>
        <button type="submit" className="btn">Log In</button>
      </form>
      {/* Add the onClick to toggle form */}
      <p className="toggle-link" onClick={toggleForm}>
        Don't have an account? Sign Up
      </p>
    </div>
  );
};

export default Login;
