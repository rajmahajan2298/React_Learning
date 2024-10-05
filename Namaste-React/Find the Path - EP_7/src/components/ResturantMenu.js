import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const ResturantMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9187318&lng=77.49744160000002&restaurantId=713373&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
    };

    if(resInfo === null) return <Shimmer />;

    // Destructing an Array

    const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
    // const {itemCards} = resInfo?.card[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[13]?.card?.card;

    return(
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(" , ")}</h3>
            <h3>{costForTwoMessage}</h3>
        </div>
    );
};

export default ResturantMenu;