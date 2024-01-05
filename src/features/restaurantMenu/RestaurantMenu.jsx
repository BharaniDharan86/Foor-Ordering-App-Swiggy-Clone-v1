/* eslint-disable no-prototype-builtins */
import { useParams } from "react-router-dom";
import { HiClock, HiMiniStar } from "react-icons/hi2";
import RestaurantMenuCards from "./RestaurantMenuCards";
import useRestaurantMenu from "../../hooks/restaurantMenu/useRestaurantMenu";

function RestaurantMenu() {
  const { resId } = useParams();

  const { menu, isLoading } = useRestaurantMenu(resId);

  if (isLoading) return <p>Loading...</p>;
  if (!menu) return <p>Nothing to show here</p>;

  const {
    name,
    cuisines,
    costForTwoMessage,
    areaName,
    avgRating,
    totalRatingsString,
    feeDetails,

    sla: { deliveryTime, lastMileTravelString },
  } = menu.data.cards[0].card.card.info;

  const menuListItems =
    menu.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (card) =>
        card.card.card.hasOwnProperty("title") &&
        !card.card.card.hasOwnProperty("carousel") &&
        card
    );

  return (
    <div className="menu-info">
      <div className="menu-res-info">
        <div>
          <p className="menu-res-name">{name}</p>
          <p className="menu-res-cuisines">{cuisines.join(",")}</p>
          <div className="menu-res-about">
            <p className="menu-res-areaName">{areaName},</p>
            <p className="menu-res-deliveryTime">{lastMileTravelString}</p>
          </div>
          <p>{feeDetails.message || null}</p>
        </div>
        <div className="menu-res-ratings">
          <span className="menu-res-avgRating">
            {" "}
            <HiMiniStar className="star-icon" />
            {avgRating}
          </span>
          <hr />
          {totalRatingsString}
        </div>
      </div>
      <div className="menu-res-price-info">
        <div>
          <HiClock className="icons" />
          <p>{deliveryTime} MINS</p>
        </div>
        <p>{costForTwoMessage}</p>
      </div>

      <RestaurantMenuCards menuListItems={menuListItems} />
    </div>
  );
}

export default RestaurantMenu;
