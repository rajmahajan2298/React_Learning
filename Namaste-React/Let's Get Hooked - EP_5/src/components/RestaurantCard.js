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

export default RestaurantCard;