import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestroMenu from "../utlis/useRestroMenu";
import RestuarntCategory from "./RestaurantCategory";

const ResturantMenu = () => {

    const {resId} = useParams();

    const resInfo = useRestroMenu(resId);

    if(resInfo === null) return <Shimmer />;

    // Destructing an Array

    const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) =>
        c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    console.log(categories);

    return(
        <div className="text-center">
            <h1 className="font-bold m-2 p-2 text-2xl">{name}</h1>
            <p className ="text-lg">{cuisines.join(" , ")} - {costForTwoMessage}</p>

            {/* Categories Accordion */}

            { categories.map((category) => 
            <RestuarntCategory key = {category?.card?.card?.title} data = {category?.card?.card} />
            )}


        </div>
    );
};

export default ResturantMenu;