/* eslint-disable react/prop-types */
import RestaurantList from "./RestaurantList";
import ShimmerEffect from "../../ui/ShimmerEffect";
import { useResCardContext } from "../../contexts/RestaurantCardProvider";
const RestaurantCards = () => {
  const { searchedRestaurant } = useResCardContext();
  return (
    <div className="restaurant-Card">
      {searchedRestaurant.length === 0
        ? Array.from({ length: 8 }, (e, i) => <ShimmerEffect key={i} />)
        : searchedRestaurant.map((data, i) => {
            return <RestaurantList resData={data} key={i} />;
          })}
      {}
    </div>
  );
};

export default RestaurantCards;
