import React from "react";
import './main.css'
import {Link} from 'react-router-dom'

const Nav = () => {
    return (
        <nav className="greyc nav-pos">
            <div className="nav-wrapper">
                <Link to="/home" className="brand-logo ml-1">Woodjobs</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down ml-2">
                    <li>
                        <Link to="/home">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/home">
                            Find Jobs
                        </Link>
                    </li>
                    <li>
                        <Link to="/home">
                            Profile
                        </Link>
                    </li>
                    <li>
                        <Link to="/signin">
                            SignIn
                        </Link>
                    </li>
                    <li>
                        <Link to="/signup">
                            SignUp
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;