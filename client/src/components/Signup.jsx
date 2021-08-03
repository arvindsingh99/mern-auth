import React from 'react'
import { Link } from "react-router-dom";


function Signup() {
    return (
        <div className="login">
            <h2>Weekly Coding Challenge #1: Sign in/up Form</h2>
            <div class="container" id="container">
                <div class="form-container sign-in-container">
                    <form action="#">
                        <h1>Sign in</h1>
                        <div class="social-container">
                            <i className="social fab fa-facebook-f"></i>
                            <i className="social fab fa-google-plus-g"></i>
                            <i className="social fab fa-linkedin-in"></i>
                        </div>
                        <span>or use your email for registration</span>
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button>Sign Up</button>
                    </form>
                </div>
                <div class="overlay-container">
                    <div class="overlay">
                        <div class="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button class="ghost" id="signIn">Sign In</button>
                        </div>
                        <div class="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <Link to="/login">
                                <button class="ghost" id="signUp">Login</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Signup;