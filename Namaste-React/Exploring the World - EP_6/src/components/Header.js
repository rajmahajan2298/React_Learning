import myImage from "../images/myReact.png";
import { useState } from "react";

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
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
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