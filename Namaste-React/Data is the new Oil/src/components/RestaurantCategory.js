import ItemList from "./ItemList";
import { useState  } from "react";

const RestuarntCategory = ({ data }) => {
    const [showItems, setShowItems] = useState(false);

    const handleClick = () => {
        setShowItems(!showItems);
    }
    return(
        <div>
           <div className="w-6/12 mx-auto my-4 bg-gray-100 p-4 shadow-lg">
              <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-bold">{ data.title } ({ data.itemCards.length })</span>
                <span>⬇</span>
              </div>
              {showItems && <ItemList items = { data.itemCards } />}
           </div>
        </div>
    );
};

export default RestuarntCategory;