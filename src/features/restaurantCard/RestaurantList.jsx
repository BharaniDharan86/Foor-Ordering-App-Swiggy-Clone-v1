import { HiStar } from "react-icons/hi2";
import { IMG_CDN_URL } from "../../utils/constants";
import { NavLink } from "react-router-dom";

import "./RestaurantMenu.css";

/* eslint-disable react/prop-types */
const RestaurantList = ({ resData }) => {
  const {
    id,
    avgRating,
    cloudinaryImageId,
    costForTwo,
    // cuisines,
    name,
    locality,
    veg,
    sla: { deliveryTime },
  } = resData.info;

  return (
    <NavLink to={`restaurant/${id}`} className="restaurant-Item" key={id}>
      <img src={`${IMG_CDN_URL + cloudinaryImageId}`} alt={name} />
      <h2 className="restaurant-name">{name}</h2>
      <p className="restaurant-locality">{locality}</p>
      <div className="restaurant-rate">
        <p>
          <HiStar className="icon" />
          <span className="restaurant-avgRating">{avgRating}</span>
        </p>
        <p className="restaurant-costForTwo">{costForTwo}</p>
      </div>
      {/* <p className="restaurant-cuisines">{cuisines.join(",")}</p> */}

      <div className="restaurant-info">
        <span className="restaurant-deliveryTime">{deliveryTime}mins</span>
        <span className={`restaurant-${veg ? "veg" : "nonveg"}`}>
          {veg ? "Veg" : "Non Veg"}
        </span>
      </div>
    </NavLink>
  );
};

export default RestaurantList;
