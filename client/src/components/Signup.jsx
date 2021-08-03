import React from 'react'
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';


function Signup() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        try {
            const res = await axios.post("/auth/register", {
                username,
                email,
                password,
            });
            res.data && window.location.replace("/login");
        } catch (err) {
            setError(true);
        }
    };
    return (
        <div className="login">
            <h2>Weekly Coding Challenge #1: Sign in/up Form</h2>
            <div class="container" id="container">
                <div class="form-container sign-in-container">
                    <form onSubmit={handleSubmit}>
                        <h1>Sign Up</h1>
                        <div class="social-container">
                            <i className="social fab fa-facebook-f"></i>
                            <i className="social fab fa-google-plus-g"></i>
                            <i className="social fab fa-linkedin-in"></i>
                        </div>
                        <span>or use your email for registration</span>
                        <input type="text" placeholder="Username" onChange={e => setUsername(e.target.value)} />
                        <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
                        <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                        <button type="submit">Sign Up</button>
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