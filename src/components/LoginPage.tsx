import React from "react";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const handleGuestLogin = () => {
    navigate("/");
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <button className="btn btn-primary" onClick={handleGuestLogin}>
        Continue as Guest
      </button>
    </div>
  );
};

export default LoginPage;
