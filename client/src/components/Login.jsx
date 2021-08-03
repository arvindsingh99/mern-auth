import React from 'react'
import { Link } from "react-router-dom"

import { Context } from "../context/Context";
import axios from "axios";
import { useContext, useRef } from 'react';
function Login() {
    const userRef = useRef();
    const passwordRef = useRef();
    const { dispatch, isFetching } = useContext(Context);
    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
            const res = await axios.post("/auth/login/", {
                username: userRef.current.value,
                password: passwordRef.current.value,
            })
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE" })
        }
    };

    return (
        <div className="login">
            <h2>Weekly Coding Challenge #1: Sign in Form</h2>
            <div className="container" id="container">

                <div className="form-container sign-in-container">
                    <form onSubmit={handleSubmit}>
                        <h1>Sign in</h1>
                        <div className="social-container">
                            <i className="social fab fa-facebook-f"></i>
                            <i className="social fab fa-google-plus-g"></i>
                            <i className="social fab fa-linkedin-in"></i>
                        </div>
                        <span>or use your account</span>
                        <input type="text" placeholder="Username" ref={userRef} />
                        <input type="password" placeholder="Password" ref={passwordRef} />
                        <i>Forgot your password ?</i>
                        <button type="submit" >Sign1 In</button>
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