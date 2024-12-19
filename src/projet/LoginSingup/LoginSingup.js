import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate()

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleForgotPasswordSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value.trim();
    const errors = {};

    if (!email) {
      errors.email = "Email address is required.";
    } else if (!validateEmail(email)) {
      errors.email = "Please enter a valid email address.";
    }

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      alert("Password reset link has been sent to your email!");
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();
    const errors = {};


    try {
      const response = await axios.get("http://localhost/api_dog.php")
      console.log(response.data);

    } catch (error) {
      console.log(error);
    }

    if (!email) {
      errors.email = "Email address is required.";
    } else if (!validateEmail(email)) {
      errors.email = "Please enter a valid email address.";
    }

    if (!password) {
      errors.password = "Password is required.";
    }

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      alert("Login successful!");
    }
  };

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    const firstName = e.target.firstName.value.trim();
    const lastName = e.target.lastName.value.trim();
    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();
    const errors = {};

    try {
      // const response = await axios.post("http://localhost/api_dog.php", {name, email, adresse})
      navigate("/payment")
      // console.log(response.data);
    } catch (error) {
      console.log(error);
    }

    if (!firstName) {
      errors.firstName = "First name is required.";
    }
    if (!lastName) {
      errors.lastName = "Last name is required.";
    }
    if (!email) {
      errors.email = "Email address is required.";
    } else if (!validateEmail(email)) {
      errors.email = "Please enter a valid email address.";
    }
    if (!password) {
      errors.password = "Password is required.";
    } else if (!validatePassword(password)) {
      errors.password = "Votre mot de passe ne remplit pas les conditions demandées.";
    }

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      alert("Account created successfully!");
    }
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginTop: "5px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  };

  const handleLogin = () => {
    navigate("/payment");
  };

  const errorStyle = { color: "red", fontSize: "0.9em", marginTop: "5px" };

  const infoStyle = { color: "grey ", fontSize: "0.9em", marginTop: "5px" };

  const buttonStyle = {
    background: "linear-gradient(to right, pink, purple)",
    color: "#fff",
    border: "none",
    borderRadius: "15px",
    cursor: "pointer",
    padding: "10px 20px",
    width: "100%",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    marginTop: "10px",
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "50px auto",
        padding: "20px",
        backdropFilter: "blur(8px)",
        borderRadius: "2px 35px 2px 35px",
        backgroundColor: "rgba(255, 255, 255, 0.2)",
      }}
    >
      {!isForgotPassword ? (
        <>
          <div style={{ display: "flex", justifyContent: "space-between",  gap: "10px", marginBottom: "20px" }}>
            <button
              onClick={() => {
                setFormErrors({});
                setIsLogin(true);
              }}
              style={{
                ...buttonStyle,
                background: isLogin ? "linear-gradient(to right, pink, purple)" : "#f8f9fa",
                color: isLogin ? "#fff" : "#333",
              }}
            >
              Login Me
            </button>
            <button
              onClick={() => {
                setFormErrors({});
                setIsLogin(false);
              }}
              style={{
                ...buttonStyle,
                background: !isLogin ? "linear-gradient(to right, pink, purple)" : "#f8f9fa",
                color: !isLogin ? "#fff" : "#333",
                
              }}
            >
              Create an account
            </button>
          </div>

          {isLogin ? (
            <form onSubmit={handleLoginSubmit}>
              <h2>I am already a customer </h2>
              <div style={{ marginBottom: "15px" }}>
                <label>Email Address</label>
                <input name="email" type="email" placeholder="Email Address" style={inputStyle} />
                {formErrors.email && <p style={errorStyle}>{formErrors.email}</p>}
              </div>
              <div style={{ marginBottom: "15px", position: "relative" }}>
                <label>Password</label>
                <input
                  name="password"
                  type={passwordVisible ? "text" : "password"}
                  placeholder="Password"
                  style={inputStyle}
                />
                <span
                  onClick={togglePasswordVisibility}
                  style={{
                    position: "absolute",
                    right: "10px",
                    top: "35px",
                    cursor: "pointer",
                    color: "#555",
                  }}
                >
                  <FontAwesomeIcon icon={passwordVisible ? faEye : faEyeSlash} />
                </span>
                {formErrors.password && <p style={errorStyle}>{formErrors.password}</p>}
              </div>
              <button type="submit" style={buttonStyle}>
                Login Me
              </button>
              <p
                style={{ textAlign: "center", marginTop: "10px", cursor: "pointer", color: "purple" }}
                onClick={() => setIsForgotPassword(true)}
              >
                Forgot your password?
              </p>
            </form>
          ) : (
            <form onSubmit={handleSignUpSubmit}>
              <h2>New customer</h2>
              <div style={{ marginBottom: "15px" }}>
                <label>First Name</label>
                <input name="firstName" type="text" placeholder="First Name" style={inputStyle} />
                {formErrors.firstName && <p style={errorStyle}>{formErrors.firstName}</p>}
              </div>
              <div style={{ marginBottom: "15px" }}>
                <label>Last Name</label>
                <input name="lastName" type="text" placeholder="Last Name" style={inputStyle} />
                {formErrors.lastName && <p style={errorStyle}>{formErrors.lastName}</p>}
              </div>
              <div style={{ marginBottom: "15px" }}>
                <label>Email Address</label>
                <input name="email" type="email" placeholder="Email Address" style={inputStyle} />
                {formErrors.email && <p style={errorStyle}>{formErrors.email}</p>}
              </div>
              <div style={{ marginBottom: "15px", position: "relative" }}>
                <label>Password</label>
                <input
                  name="password"
                  type={passwordVisible ? "text" : "password"}
                  placeholder="Password"
                  style={inputStyle}
                />
                <span
                  onClick={togglePasswordVisibility}
                  style={{
                    position: "absolute",
                    right: "10px",
                    top: "35px",
                    cursor: "pointer",
                    color: "#555",
                  }}
                >
                  <FontAwesomeIcon icon={passwordVisible ? faEye : faEyeSlash} />
                </span>
                <p style={infoStyle}>
                  8 characters minimum. Must include at least one uppercase letter, one lowercase
                  letter, one digit, and one special character.
                </p>
                {formErrors.password && <p style={errorStyle}>{formErrors.password}</p>}
              </div>
              <button type="submit" style={buttonStyle}  onClick={handleLogin}  >
                Sign Me Up
              </button>
            </form>
          )}
        </>
      ) : (
        <form onSubmit={handleForgotPasswordSubmit}>
          <h2>Forgot Password?</h2>
          <p>
            No problem – please enter the email address associated with your account, and we will
            send you a link to reset your password.
          </p>
          <div style={{ marginBottom: "15px" }}>
            <label>Email Address</label>
            <input name="email" type="email" placeholder="Email Address" style={inputStyle} />
            {formErrors.email && <p style={errorStyle}>{formErrors.email}</p>}
          </div>
          <button type="submit" style={buttonStyle}>
            Reset Password
          </button>
          <p
            style={{ textAlign: "center", marginTop: "10px", cursor: "pointer", color: "purple" }}
            onClick={() => setIsForgotPassword(false)}
          >
            &laquo; Back to Login
          </p>
        </form>
      )}
    </div>
  );
};

export default AuthPage;
