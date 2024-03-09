import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constants";
import MenuResList from "./menuSwiggyData";
// import { SwiggyResList } from "./swiggyMockData";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const [menuStatic, setMenuStatic] = useState(null);

  console.log(resInfo);

  // console.log(MenuResList1[0]?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card);
  // console.log(MenuResList1[0]);

  // ======  Dynamic Data Fetch  =====
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    setResInfo(json?.data);
    console.log(json?.data);
  };

  // ==== Static Data Fetch =====

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      fetchData();
    }, 1500);

    return () => clearTimeout(timeoutId);
  }, []);

  const fetchData = () => {
    setMenuStatic(MenuResList[0]+resId);
  };

  return { resInfo, menuStatic };
};

export default useRestaurantMenu;
