import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () =>
{
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const Navigate = useNavigate();

    const handleSubmit = (e) => {

        e.preventDefault();
       if( email === 'admin@gmail.com' && password === '1234')
       {
        alert("You are logged in as a Administrator")
        Navigate("/adminDashboard")
       }

       else{
        alert("You are logged in as User")
        Navigate("/home")
       }
    };

    return(
       <div className="root">

<div className="containerleft"> 
            <h2 className="heading">Login</h2>
            <form className="signup-form" onSubmit={handleSubmit}>
        
                    <input type="email" placeholder="Email"  value={email} onChange={(e) => setEmail(e.target.value)} required
                     />

                     <input type="password" placeholder="Password"  value={password} onChange={(e) => setPassword(e.target.value)} required/>
                     <p>Forgot Password</p>
                     <button type="submit">Login</button>
            </form >
        </div>
         
        <div className="containerright">
          <div className="content">
          <h2 className="heading">Hello <br></br> There!</h2>
          <p className="subheading">Enter your personal details and start journy with us</p>
          <button type="submit"><Link className='linkButtons' to="/signup">Signup</Link></button>
          </div>
       </div>
      
       </div>
    )
}

export default Login;