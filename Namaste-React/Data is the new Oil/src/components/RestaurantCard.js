import { IMAGE_URL } from "../utlis/constants";

const RestaurantCard = (props) => {
    const { resData } = props;

    const {cloudinaryImageId, name,cuisines,costForTwo,avgRating,sla} = resData?.info;
    // const {deliveryTime} = resData?.sla;


    return (
        <div className="p-5 m-5 w-64 h-80 text-gray-800 font-bold shadow-lg mb-5 flex flex-col justify-between rounded-md border border-opacity-15">
            <img className="h-32 w-full object-cover rounded-md hover:shadow-lg" 
             src= {IMAGE_URL + cloudinaryImageId} />
            <h3 className="text-lg font-bold truncate">{name}</h3>
            <h4 className="text-md font-semibold truncate">{cuisines.join(" , ")}</h4>
            <h4 className="text-md font-semibold">{costForTwo}</h4>
            <h4 className="text-md font-semibold">{avgRating} stars</h4>
            <h4 className="text-md font-semibold">{sla.deliveryTime} Minutes </h4>
        </div>
    )
}

// Higher Order Component

export const withLabelPromoted = (RestaurantCard) => {
    return(props) => {
        return(
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg font-bold">Veg</label>
                <RestaurantCard {...props} />
            </div>
        );
    };
};

export default RestaurantCard;