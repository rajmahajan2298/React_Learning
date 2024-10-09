import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9187318&lng=77.49744160000002&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();

        // Optional Chaining

        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    // if(listOfRestaurants.length === 0) {
    //     return(<Shimmer />)
    // }

    // Conditional Rendering Through Tenary Operator

    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="search">
                <input type="text" className="search-text" value={searchText} 
                onChange = {(e) => {
                    setSearchText(e.target.value);
                }}
                />
                <button className="search-btn" 
                onClick = {() => {
                    const filterRestaurant = listOfRestaurants.filter((res) => 
                        res.info.name.toLowerCase().includes(searchText.toLowerCase())
                    );

                    setFilteredRestaurant(filterRestaurant);
                }}
                >
                    Search
                    
                    </button>
            </div>
            <div className="filter">
                <button 
                className="filter-btn"
                onClick={() => {
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.info.avgRating > 4
                    );
                    setListOfRestaurants(filteredList);
                }}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {
                    filteredRestaurant.map((restaurant) => (
                        <Link key = {restaurant.info.id} to ={"/restaurants/" + restaurant.info.id }> 
                        <RestaurantCard resData = {restaurant} /></Link>
                    ))
                } 
            </div>
        </div>
    )
}

export default Body;