import myImage from "../images/myReact.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utlis/useOnlineStatus";

const Header = () => {

    const [btnNameReact, setBtnNameReact] = useState("Login");

    const onlineStatus = useOnlineStatus();

    return (
        <div className="flex justify-between bg-indigo-200 shadow-lg mb-5">
            <div className="logo-container">
                <img 
                className="w-44"
                src={myImage} />
            </div>
            <div className="flex items-center">
                <ul class="flex p-8 m-8">
                    <li className="px-6 text-gray-800 font-bold">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
                    <li className="px-6 text-gray-800 font-bold hover:text-orange-600"><Link to="/">Home</Link></li>
                    <li className="px-6 text-gray-800 font-bold hover:text-orange-600"><Link to="/about">About Us</Link></li>
                    <li className="px-6 text-gray-800 font-bold hover:text-orange-600"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-6 text-gray-800 font-bold hover:text-orange-600"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-6 text-gray-800 font-bold hover:text-orange-600">Cart</li>
                    <button className="login pl-5 text-gray-800 font-bold hover:text-orange-600"
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