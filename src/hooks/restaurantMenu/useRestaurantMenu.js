/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

export default function useRestaurantMenu(resId) {
  const [menu, setMenu] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getMenu() {
    try {
      setIsLoading(true);
      const request = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
      );

      const data = await request.json();

      setMenu(data);
    } catch (err) {
      console.log(err.message || "Something Went Wrong");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getMenu();
  }, [resId]);

  return { menu, isLoading };
}
