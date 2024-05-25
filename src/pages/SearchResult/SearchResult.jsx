import React, { useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";
import FoodItem from "../../components/FoodItem/FoodItem";

const SearchResult = () => {
  const { searchResults } = useContext(StoreContext);
  return (
    <div className="food-display" id="food-display">
      <h2>
        {searchResults.length > 0 ? "Search Results." : "No result found."}
      </h2>
      <div className="food-display-list">
        {searchResults.map((item) => {
          return (
            <FoodItem
              key={item._id}
              image={item.image}
              name={item.name}
              desc={item.description}
              price={item.price}
              id={item._id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SearchResult;
