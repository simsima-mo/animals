import React from 'react';
import './LoginSingup.css';

const LoginSingup = () => {
  return (
    <div className="loginsingup">
      <div className="loginsingup-container">
        <h1>Sign Up</h1>
        <div className="loginsingup-fields">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email Address" />
          <input type="password" placeholder="Password" />
          <button>Continue</button>
          <p className="loginsingup-login">
            Already have an account?{' '}
            <span onClick={() => alert('Redirect to login')}>login here</span>
          </p>
          <div className="loginsingup-agree">
            <input type="checkbox" name="" id="" />
            <p>
              By continuing, I agree to the terms of use & privacy policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSingup;
