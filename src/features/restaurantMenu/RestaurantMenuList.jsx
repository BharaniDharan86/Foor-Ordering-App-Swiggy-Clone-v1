/* eslint-disable no-prototype-builtins */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/prop-types */
import { useState } from "react";

import { HiChevronDown, HiChevronUp } from "react-icons/hi2";
import "./RestaurantMenuList.css";
import MenuCategory from "./MenuCategory";
import MenuItem from "./MenuItem";
function RestaurantMenuList({ menuList }) {
  const { title, itemCards } = menuList?.card.card;

  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="">
      <div className="menu-header">
        <h1>{title}</h1>
        <button onClick={() => setIsOpen((curr) => !curr)}>
          {isOpen ? <HiChevronDown /> : <HiChevronUp />}
        </button>
      </div>
      {isOpen && (
        <div className="menu-res-item">
          {itemCards?.map((item) => (
            <MenuItem key={item.card.info.id} item={item.card.info} />
          ))}
          {menuList?.card.card.hasOwnProperty("categories") &&
            menuList?.card.card.categories.map((item) => {
              return <MenuCategory item={item} />;
            })}
        </div>
      )}
    </div>
  );
}



// function MenuCategoryList({ item }) {
//   const { name, price, description, imageId } = item.card.info;
//   return (
//     <div className="item">
//       <div>
//         <p className="item-name">{name}</p>
//         <p className="item-price">{price / 100} rs</p>
//         <p className="item-description">{description}</p>
//       </div>
//       <div>
//         <img
//           src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${imageId}`}
//           alt=""
//         />
//         <button>Add</button>
//       </div>
//     </div>
//   );
// }

export default RestaurantMenuList;
