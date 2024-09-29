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
    const { resData } = props;

    return (
        <div className="res-card">
            <img className="res-image" 
             src= {"RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/" + resData.info.cloudinaryImageId} />
            <h3>{resData.info.name}</h3>
            <h4>{resData.info.cuisines.join(" , ")}</h4>
            <h4>{resData.info.costForTwo}</h4>
            <h4>{resData.info.avgRating} stars</h4>
            <h4>{resData.sla.deliveryTime} Minutes</h4>
        </div>
    )
}

const resObj = {
"info": {
"id": "249305",
"name": "KFC",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/e2270129-d210-4a35-b044-73ae307c5280_249305.JPG",
"locality": "Banaka Tower",
"areaName": "Uttarahalli",
"costForTwo": "₹400 for two",
"cuisines": [
"Burgers",
"Fast Food",
"Rolls & Wraps"
],
"avgRating": 4.3,
"parentId": "547",
"avgRatingString": "4.3",
"totalRatingsString": "8.1K+"
},

"sla": {
    "deliveryTime": 22,
    "lastMileTravel": 2.9,
    "serviceability": "SERVICEABLE",
    "slaString": "20-25 mins",
    "lastMileTravelString": "2.9 km",
    "iconType": "ICON_TYPE_EMPTY"
   }
}


const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard resData = {resObj}/>
                {/* <RestaurantCard resName="Burger King" cusinie="Burger, American"/> */}
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