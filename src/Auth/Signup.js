import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
//   const [errorMessage, setErrorMessage] = useState(""); // Add an error message state

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
   if (!isStrongPassword(password)) {
    alert("Password must be strong (at least 8 characters: uppercase, letters & numbers).");
    }
    else {
      
      // Simulate a successful signup with a delay
      setTimeout(() => {
        setSuccessMessage(`Signup successful! ${name}, you can now login`);
        setName("");
        setEmail("");
        setPassword("");
      }, 1000);
    }
  };

 
// Helper function to validate strong password format
const isStrongPassword = (password) => {
    const strongPasswordPattern = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    return strongPasswordPattern.test(password);
  };
  

  return (
    <div className="root">
      <div className="containerleft">
        <h2 className="heading">Create Account!</h2>
        <form className="signup-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Signup</button>
        </form>
        
        <p className="success-message">{successMessage}</p>
      </div>
      <div className="containerright">
        <div className="content">
          <h2 className="heading">Welcome Back!</h2>
          <p className="subheading">
            To continue with us, please login with your personal information
          </p>
          <button type="submit">
            <Link className="linkButton" to="/login">
              Login
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
