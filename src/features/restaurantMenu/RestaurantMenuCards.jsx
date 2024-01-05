import RestaurantMenuList from "./RestaurantMenuList";

/* eslint-disable react/prop-types */
function RestaurantMenuCards({ menuListItems }) {
  return (
    <div className="menu-item">
      {menuListItems.map((menuList) => (
        <RestaurantMenuList key={menuList.card.title} menuList={menuList} />
      ))}
    </div>
  );
}

export default RestaurantMenuCards;
