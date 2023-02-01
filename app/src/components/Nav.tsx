import React from "react";
import './main.css'

const Nav = () => {
    return (
        <nav className="green darken-2">
            <div className="nav-wrapper">
                <a href="#" className="brand-logo ml-1">Woodjobs</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="sass.html">Home</a></li>
                    <li><a href="badges.html">Find jobs</a></li>
                    <li><a href="collapsible.html">Profile</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;