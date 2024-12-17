import React from "react";

const Signup = ({ toggleForm }) => {
  return (
    <div className="form-container">
      <h2>Create Account</h2>
      <form>
        <div className="input-group">
          <label>Full Name</label>
          <input type="text" placeholder="Enter your full name" />
        </div>
        <div className="input-group">
          <label>Username</label>
          <input type="text" placeholder="Enter your username" />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input type="password" placeholder="Enter your password" />
        </div>
        <button type="submit" className="btn">Sign Up</button>
      </form>
      {/* Add the onClick to toggle form */}
      <p className="toggle-link" onClick={toggleForm}>
        Already have an account? Log In
      </p>
    </div>
  );
};

export default Signup;
