import React from 'react'
import { Link } from "react-router-dom";

function Login() {
    return (
        <div className="login">
            <h2>Weekly Coding Challenge #1: Sign in/up Form</h2>
            <div className="container" id="container">

                <div className="form-container sign-in-container">
                    <form action="#">
                        <h1>Sign in</h1>
                        <div className="social-container">
                            <i className="social fab fa-facebook-f"></i>
                            <i className="social fab fa-google-plus-g"></i>
                            <i className="social fab fa-linkedin-in"></i>
                        </div>
                        <span>or use your account</span>
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <i>Forgot your password?</i>
                        <button>Sign In</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button className="ghost" id="signIn">Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <Link to="/signup">
                                <button className="ghost" id="signUp">Sign Up</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Login;