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
      
    try {
      // const response = await axios.post("http://localhost/api_dog.php", {name, email, adresse})
      navigate("/payment")
      alert("Account created successfully!");
      // console.log(response.data);
    } catch (error) {
      console.log(error);
    }
      
    } else {
      // Si des erreurs sont présentes, informer l'utilisateur
      alert("Please fill in all required fields correctly.");
  }
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginTop: "5px",
    border: "1px solid #ccc",
    borderRadius: "4px",
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
              Connectez-moi
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
              crée un compt
            </button>
          </div>

          {isLogin ? (
            <form onSubmit={handleLoginSubmit}>
              <h2>Je suis déjà client</h2>
              <div style={{ marginBottom: "15px" }}>
                <label>Adresse email</label>
                <input name="email" type="email" placeholder="Adresse email" style={inputStyle} />
                {formErrors.email && <p style={errorStyle}>{formErrors.email}</p>}
              </div>
              <div style={{ marginBottom: "15px", position: "relative" }}>
                <label>Mot de passe</label>
                <input
                  name="password"
                  type={passwordVisible ? "text" : "password"}
                  placeholder="Mot de passe"
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
              Connectez-moi
              </button>
              <p
                style={{ textAlign: "center", marginTop: "10px", cursor: "pointer", color: "purple" }}
                onClick={() => setIsForgotPassword(true)}
              >
                Mot de passe oublié?
              </p>
            </form>
          ) : (
            <form onSubmit={handleSignUpSubmit}>
              <h2>Nouveau client</h2>
              <div style={{ marginBottom: "15px" }}>
                <label>Prénom</label>
                <input name="firstName" type="text" placeholder="Prénom" style={inputStyle} />
                {formErrors.firstName && <p style={errorStyle}>{formErrors.firstName}</p>}
              </div>
              <div style={{ marginBottom: "15px" }}>
                <label>Nom de famille</label>
                <input name="lastName" type="text" placeholder="Nom de famille" style={inputStyle} />
                {formErrors.lastName && <p style={errorStyle}>{formErrors.lastName}</p>}
              </div>
              <div style={{ marginBottom: "15px" }}>
                <label>Adresse email</label>
                <input name="email" type="email" placeholder="Adresse email" style={inputStyle} />
                {formErrors.email && <p style={errorStyle}>{formErrors.email}</p>}
              </div>
              <div style={{ marginBottom: "15px", position: "relative" }}>
                <label>Mot de passe</label>
                <input
                  name="password"
                  type={passwordVisible ? "text" : "password"}
                  placeholder="Mot de passe"
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
                8 caractères minimum. Doit inclure au moins une lettre majuscule, une lettre minuscule,
                 un chiffre et un caractère spécial.
                </p>
                {formErrors.password && <p style={errorStyle}>{formErrors.password}</p>}
              </div>
              <button type="submit" style={buttonStyle}   >
              Inscrivez-moi
              </button>
            </form>
          )}
        </>
      ) : (
        <form onSubmit={handleForgotPasswordSubmit}>
          <h2>Mot de passe oublié?</h2>
          <p>
          Aucun problème – veuillez saisir l’adresse e-mail associée à votre compte et nous vous enverrons 
          un lien pour réinitialiser votre mot de passe.
          </p>
          <div style={{ marginBottom: "15px" }}>
            <label>Adresse email</label>
            <input name="email" type="email" placeholder="Adresse email" style={inputStyle} />
            {formErrors.email && <p style={errorStyle}>{formErrors.email}</p>}
          </div>
          <button type="submit" style={buttonStyle}>
          Réinitialiser le mot de passe
          </button>
          <p
            style={{ textAlign: "center", marginTop: "10px", cursor: "pointer", color: "purple" }}
            onClick={() => setIsForgotPassword(false)}
          >
            &laquo; Retour à la connexion
          </p>
        </form>
      )}
    </div>
  );
};

export default AuthPage;
