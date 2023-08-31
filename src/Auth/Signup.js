import React, {useState} from "react";
import { Link } from "react-router-dom";

const Signup = () =>
{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
   const [successMessage, setSuccessMessage] = useState("");

    const handleSubmit = (e) => {

        e.preventDefault();
        console.log("Signup", name, email, password);

        setTimeout(() => {
            setSuccessMessage(`Signup successful! ${name} you can now login`);
            setName("");
            setEmail("");
            setPassword("");
            }, 1000);
    };

    return(
       <div className="root">
          <div className="containerleft"> 
            <h2 className="heading">Create Account!</h2>
            <form className="signup-form" onSubmit={handleSubmit}>
                <input type="text" placeholder="Name"  value={name} onChange={(e) => setName(e.target.value)} required/>
                    <input type="email" placeholder="Email"  value={email} onChange={(e) => setEmail(e.target.value)} required
                     />

                     <input type="password" placeholder="Password"  value={password} onChange={(e) => setPassword(e.target.value)} required/>
                     <button type="submit">Signup</button>
            </form>
            <p className="success-message">{successMessage}</p>
        </div>
        <div className="containerright">
          <div className="content">
          <h2 className="heading">Welcome<br></br> Back!</h2>
          <p className="subheading">To keep continue with us please login with your personal information</p>
          <button type="submit"><Link className='linkButton' to="/login">Login</Link></button>
          </div>
       </div>

      
       </div>
    )
}

export default Signup;