import RestaurantCards from "../features/restaurantCard/RestaurantCards";
import SearchBar from "./SearchBar";
import RestaurantCardProvider from "../contexts/RestaurantCardProvider";

const Body = () => {
  return (
    <RestaurantCardProvider>
      <SearchBar />
      <RestaurantCards />
    </RestaurantCardProvider>
  );
};

export default Body;
