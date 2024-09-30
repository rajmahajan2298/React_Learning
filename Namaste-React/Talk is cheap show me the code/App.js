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

    const {cloudinaryImageId, name,cuisines,costForTwo,avgRating} = resData?.info;
    const {deliveryTime} = resData?.sla;


    return (
        <div className="res-card">
            <img className="res-image" 
             src= {resData.imageBaseUrl + cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.join(" , ")}</h4>
            <h4>{costForTwo}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{deliveryTime} Minutes</h4>
        </div>
    )
}

const resList = [
{
"info": {
"id": "249305",
"name": "KFC",
"cloudinaryImageId": "e2270129-d210-4a35-b044-73ae307c5280_249305.JPG",
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
"imageBaseUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/",

"sla": {
    "deliveryTime": 22,
    "lastMileTravel": 2.9,
    "serviceability": "SERVICEABLE",
    "slaString": "20-25 mins",
    "lastMileTravelString": "2.9 km",
    "iconType": "ICON_TYPE_EMPTY"
   },
  },
{
"info": {
"id": "456981",
"name": "Domino's Pizza",
"cloudinaryImageId": "e470fb9e-9ff9-4576-b5bd-be0f91948000_456981.jpg",
"locality": "BSK 5th Stage",
"areaName": "Kumaraswamy Layout",
"costForTwo": "₹400 for two",
"cuisines": [
"Pizzas",
"Italian",
"Pastas",
"Desserts",
"Baverages"
],
"avgRating": 4.4,
"parentId": "2456",
"avgRatingString": "4.4",
"totalRatingsString": "2.2K+"
},
"imageBaseUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/9/19/",
"sla": {
"deliveryTime": 25,
"lastMileTravel": 1.8,
"serviceability": "SERVICEABLE",
"slaString": "20-25 mins",
"lastMileTravelString": "1.8 km",
"iconType": "ICON_TYPE_EMPTY"
 },    
},
{
"info": {
"id": "62971",
"name": "LunchBox  Meals and Thalis",
"cloudinaryImageId": "dc506575-2759-4791-a250-370996679acc_62971.jpg",
"locality": "BEML Layout",
"areaName": "Rr Nagar",
"costForTwo": "₹200 for two",
"cuisines": [
"Biryani",
"North Indian",
"Punjabi",
"Healthy Food",
"Beverages"
],
"avgRating": 4.3,
"parentId": "4925",
"avgRatingString": "4.3",
"totalRatingsString": "5.9K+"
},
"imageBaseUrl": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/9/17/",
"sla": {
"deliveryTime": 40,
"lastMileTravel": 2.8,
"serviceability": "SERVICEABLE",
"slaString": "35-40 mins",
"lastMileTravelString": "2.8 km",
"iconType": "ICON_TYPE_EMPTY"
 },
},
{
"info": {
"id": "638208",
"name": "La Pino'z Pizza",
"cloudinaryImageId": "bad3vgf0d39raw1afcry",
"locality": "Rajarajeshwari Nagar",
"areaName": "Rajarajeshwari Nagar",
"costForTwo": "₹400 for two",
"cuisines": [
"Pizzas",
"Pastas",
"Italian",
"Beverages",
"Desserts",
],
"avgRating": 4.2,
"parentId": "4961",
"avgRatingString": "4.2",
"totalRatingsString": "1.5K+"
},
"imageBaseUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/",
"sla": {
"deliveryTime": 34,
"lastMileTravel": 3,
"serviceability": "SERVICEABLE",
"slaString": "30-35 mins",
"lastMileTravelString": "3.0 km",
"iconType": "ICON_TYPE_EMPTY"
  },
},  
{
"info": {
"id": "32130",
"name": "Faasos  Wraps, Rolls & Shawarma",
"cloudinaryImageId": "af33b81798b11deba338e94b7585d348",
"locality": "BEML Layout",
"areaName": "RR Nagar",
"costForTwo": "₹200 for two",
"cuisines": [
"Kebabs",
"Fast Food",
"Healthy Food",
"Desserts",
],
"avgRating": 4.4,
"parentId": "21809",
"avgRatingString": "4.4",
"totalRatingsString": "9.5K+"
},
"imageBaseUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/",
"sla": {
"deliveryTime": 41,
"lastMileTravel": 2.8,
"serviceability": "SERVICEABLE",
"slaString": "40-45 mins",
"lastMileTravelString": "2.8 km",
"iconType": "ICON_TYPE_EMPTY"
 },
},  
]

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {
                    resList.map((restaurant=>
                         <RestaurantCard key = {restaurant.info.id} resData = {restaurant} />
                    ))
                } 
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