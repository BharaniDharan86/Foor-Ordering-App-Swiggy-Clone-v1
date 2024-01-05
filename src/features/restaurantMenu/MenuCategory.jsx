/* eslint-disable react/jsx-key */

import MenuItem from "./MenuItem";

/* eslint-disable react/prop-types */
function MenuCategory({ item }) {
  const { title, itemCards } = item;
  return (
    <>
      <h1>{title}</h1>
      {itemCards.map((item) => {
        return <MenuItem item={item} />;
      })}
    </>
  );
}

export default MenuCategory;
