import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const inputHandler = (e) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const submitHandler = () => {
    if (user.email && user.password) {
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/home");
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <input
        onChange={inputHandler}
        type="text"
        name="email"
        placeholder="email"
      />
      <input
        onChange={inputHandler}
        type="text"
        name="password"
        placeholder="password"
      />
      <button onClick={submitHandler}>log in</button>
    </div>
  );
};

export default Login;
