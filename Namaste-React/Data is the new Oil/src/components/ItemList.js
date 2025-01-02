import { IMAGE_URL } from "../utlis/constants";

const ItemList = ({ items }) => {
    return(
        <div>
            {items.map((item) => (
                <div key = {item.card.info.id} className="p-2 m-2 border-b-2 border-gray-200 text-left flex">
                    <div className="w-9/12">
                    <div className="py-2">
                        <span className="font-black text-gray-800">{item.card.info.name}</span>
                        <span className="font-semibold"> - ₹ {item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}</span>
                    </div>
                    <p className="text-xs my-2">{item.card.info.description}</p>
                    </div>
                    <div className="w-3/12 p-2">
                      <div className="absolute">
                        <button className="p-2 mx-12 my-28 bg-green-600 text-white shadow-lg rounded-lg font-bold">Add</button>
                      </div>
                      <img src= {IMAGE_URL + item.card.info.imageId} className="h-32 w-full object-cover rounded-md hover:shadow-lg"/>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ItemList;