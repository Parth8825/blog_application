import { useState } from "react";
import { Link } from "react-router-dom";
import { axiosInstance } from "../../Config";
import "./register.css";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const initialValues = {
    username,
    email,
    password,
  };
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(validate(initialValues));
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      try {
        const res = await axiosInstance.post("/auth/register", {
          username: initialValues.username,
          email: initialValues.email,
          password: initialValues.password,
        });
        res.data && window.location.replace("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!values.username) {
      errors.username = "Username is required!";
      setIsSubmit(true);
    }
    if (!values.email) {
      errors.email = "Email is required!";
      setIsSubmit(true);
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email!";
      setIsSubmit(true);
    }
    if (!values.password) {
      errors.password = "Password is required!";
      setIsSubmit(true);
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
      setIsSubmit(true);
    } else if (values.password.length > 10) {
      errors.password = "Password must be less than 10 characters";
      setIsSubmit(true);
    }
    return errors;
  };

  return (
    <div className="register">
      <span className="registerTitle">register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          name="username"
          className="registerInput"
          placeholder="Enter your Username..."
          onChange={(e) => setUsername(e.target.value)}
        />
        <span style={{ color: "red" }}>{formErrors.username}</span>
        <label>Email</label>
        <input
          type="text"
          name="email"
          className="registerInput"
          placeholder="Enter your email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <span style={{ color: "red" }}>{formErrors.email}</span>
        <label>Password</label>
        <input
          type="password"
          name="password"
          className="registerInput"
          placeholder="Enter your password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <span style={{ color: "red" }}>{formErrors.password}</span>
        <button className="registerButton" type="submit">
          register
        </button>
      </form>
      <button className="registerLoginButton">
        <Link className="link" to="/login">
          Login
        </Link>
      </button>
    </div>
  );
}
