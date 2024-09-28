import React from "react";
import ReactDom from "react-dom";
import myImage from "./images/myReact.png";
import "./index.css";

const Header = () => {
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
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = (props) => {
    const { resName, cusinie } = props;
    return (
        <div className="res-card">
            <img className="res-image" 
             src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2469fa88ee9b0b5d1366ba88f2a7fa7f" />
            <h3>{resName}</h3>
            <h4>{cusinie}</h4>
            <h4>4.4 Stars</h4>
            <h4>20 Mins</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard resName="Indian Coffee House" cusinie="North Indian, Asian" />
                <RestaurantCard resName="Burger King" cusinie="Burger, American"/>
                {/* <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard /> */}
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDom.createRoot(document.getElementById("root"))
root.render(<AppLayout />);