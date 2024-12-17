import React, { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="container">
      {/* Left Panel with Video */}
      <div className="left-panel">
        <video autoPlay loop muted className="background-video">
          <source src="/background.mp4" type="video/mp4" />
        </video>
        <div className="overlay-content">
          <h1>Welcome to Gamer's Hub</h1>
          <p>Join the Quiz Game</p>
        </div>
      </div>

      {/* Right Panel with Forms */}
      <div className="right-panel">
        {isLogin ? (
          <Login toggleForm={toggleForm} />
        ) : (
          <Signup toggleForm={toggleForm} />
        )}
      </div>
    </div>
  );
}

export default App;
