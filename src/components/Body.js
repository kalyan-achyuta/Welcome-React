import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData";

const Body = () => {

  // Array Destructuring

  // const ar = useState(resList);
  // const [listOfRestros, setListOfRestros] = ar;
  // const listOfRestros = ar[0];
  // const setListOfRestros = ar[1];

  const [listOfRestros, setListOfRestros] = useState(resList);
 
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            filteredList = listOfRestros.filter((res) => res.info.avgRating > 4);
            setListOfRestros(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestros.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
