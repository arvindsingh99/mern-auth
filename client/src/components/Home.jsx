import React from 'react'
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
  <Link to="/signup">
				<button class="ghost" id="signUp">Sign Up</button>
                </Link>
                <Link to="/login">
				<button class="ghost" id="signUp">Login</button>
                </Link>
         </div>
  );
}

export default Home;