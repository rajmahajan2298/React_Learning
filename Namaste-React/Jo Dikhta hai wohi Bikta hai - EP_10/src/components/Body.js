import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utlis/useOnlineStatus";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9175599&lng=77.4976725&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();

        // Optional Chaining

        const RestaurantCard = json?.data?.cards.find(
            (card) => card.card?.card?.gridElements?.infoWithStyle?.restaurants
        );

        const restaurants = RestaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        if (restaurants) {
            setListOfRestaurants(restaurants);
            setFilteredRestaurant(restaurants);
        } else {
            console.error("No restaurants found in the API response.");
        }

    };

    
    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false) return(
        <h1>Looks like you are offline!!. Please check you internet connection.</h1>
    );

    // if(listOfRestaurants.length === 0) {
    //     return(<Shimmer />)
    // }

    // Conditional Rendering Through Tenary Operator

       return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter flex">
               <div className="search p-4 m-4">
            
                <input type="text" className="border border-solid border-black" value={searchText} 
                onChange = {(e) => {
                    setSearchText(e.target.value);
                }}
                />
                <button className="bg-indigo-200 hover:bg-indigo-200 text-gray-800 font-bold py-1 px-4 mx-4 rounded inline-flex items-center hover:text-sky-600" 
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
            <div>
            <button 
                className="bg-indigo-200 hover:bg-indigo-200 text-gray-800 font-bold px-3 py-1 my-8 mr-10 rounded inline-flex items-center hover:text-sky-600"
                onClick={() => {
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.info.avgRating > 5
                    );
                    setListOfRestaurants(filteredList);
                }}
                >
                    Top Rated Restaurants
                </button>
            </div>
                
                </div>
            <div className="flex flex-wrap">
                {
                    filteredRestaurant.map((restaurant) => (
                        <Link key = {restaurant.info.id} to = {"/restuarants/" + restaurant.info.id} className = "res-link"
                        >
                            <RestaurantCard resData = {restaurant} />
                        </Link>
                    ))
                } 
            </div>
        </div>
    )
}

export default Body;