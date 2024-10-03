import { IMAGE_URL } from "../utlis/constants";

const RestaurantCard = (props) => {
    const { resData } = props;

    const {cloudinaryImageId, name,cuisines,costForTwo,avgRating,sla} = resData?.info;
    // const {deliveryTime} = resData?.sla;


    return (
        <div className="res-card">
            <img className="res-image" 
             src= {IMAGE_URL + cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.join(" , ")}</h4>
            <h4>{costForTwo}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{sla.deliveryTime} Minutes </h4>
        </div>
    )
}

export default RestaurantCard;