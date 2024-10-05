import myImage from "../images/myReact.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {

    const [btnNameReact, setBtnNameReact] = useState("Login");

    return (
        <div className="header">
            <div className="logo-container">
                <img 
                className="logo"
                src={myImage} />
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li>Cart</li>
                    <button className="login"
                        onClick={() => {
                            setBtnNameReact(btnNameReact === "Login" ? "Logout" : "Login")
                        }}
                        >
                            {btnNameReact}
                    </button>
                </ul>
            </div>
        </div>
    )
}

export default Header;