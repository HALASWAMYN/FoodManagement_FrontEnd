import { useState } from "react";
import { Link } from "react-router-dom"
const Login = () => {
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")


    return (
        <div className="login container  ">
            <div className="card mt-5 p-5 ">
            <h1>Login Page</h1>
                <div className="form w-25">
                    <form action="">
                        <div className="email my-4">
                            <input type="email" className="form-control" placeholder="email address" name="email"
                            value={email} onChange={(e)=>setEmail(e.target.value)} />
                        </div>
                        <div className="password my-4">
                            <input type="password" className="form-control" placeholder="password" name="password" 
                           value={password} onChange={(e)=>setPassword(e.target.value)} />
                        </div>
                        <div className="login_button">
                            <button className="btn btn-dark">Login</button>
                        </div>
                        <div className="signUp_button">
                            <p>Are you new user?</p>
                            <Link to="/singUp" className="btn btn-outline-dark">SignUp</Link>

                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
}

export default Login;
