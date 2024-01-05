/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";

const RestaurantCardContext = createContext();

function RestaurantCardProvider({ children }) {
  const [foodData, setFoodData] = useState([]);
  const [query, setQuery] = useState("");

  const fetchData = async () => {
    const req = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const res = await req.json();

    // console.log(
    //   res?.data?.cards[2].card.card.gridElements.infoWithStyle.restaurants
    // );

    console.log(res);

    setFoodData(
      res?.data?.cards[2].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  function handleFilter() {
    setFoodData((data) => {
      return data.filter((el) => el?.info.avgRating >= 4.6);
    });
  }

  const searchedRestaurant =
    query.length > 0
      ? foodData.filter((data) => {
          return data?.info?.name?.toLowerCase().includes(query.toLowerCase());
        })
      : foodData;

  return (
    <RestaurantCardContext.Provider
      value={{
        foodData,
        setFoodData,
        query,
        setQuery,
        handleFilter,
        searchedRestaurant,
      }}
    >
      {children}
    </RestaurantCardContext.Provider>
  );
}

export function useResCardContext() {
  const context = useContext(RestaurantCardContext);

  if (context == "undefined") throw new Error("Out Of Context");

  return context;
}

export default RestaurantCardProvider;
