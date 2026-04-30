import React, { useEffect, useState } from "react";
import { MENU_API } from "../../utils/constant";
import { useParams } from "react-router";
import { MockData } from "../../utils/mockData";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [showIndex, setShowIndex] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    setResInfo(MockData);
  }, []);

  // const fetchMenu = async () => {
  //   if(!resId)  return ;
  //   const data = await fetch(MENU_API + resId);
  //   const json = await data.json();
  //   setResInfo(json.data)
  //   console.log(json.data);
  // };

  const name = resInfo?.data?.cards[0]?.card?.card?.info?.name;
  const menuItem = resInfo?.data?.cards[1]?.card?.card?.itemCards;
  const restaurantCategories = resInfo?.data?.cards?.filter(
    (card) => card.card?.card?.title,
  );

  return (
    <div className="text-center my-3">
      <h1 className="text-lg font-bold">{name}</h1>
      <h3 className="font-semibold">
        {resInfo?.data?.cards[1]?.card?.card?.title}{" "}
      </h3>
      <ul>
        {menuItem?.map((menu) => (
          <li key={menu?.card?.info?.id}>
            {menu?.card?.info.name} - {menu?.card?.info?.price}{" "}
          </li>
        ))}
      </ul>
      {restaurantCategories?.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItem={index === showIndex ? true : false  }
          setShowIndex={()=>setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
