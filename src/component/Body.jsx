import { Link } from "react-router";
import RestaurantCard from "./RestaurantCard";
import {  useContext, useEffect, useState } from "react";
import UserContext from "../../utils/UserContext";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const {loggedInUser,setUserName} = useContext(UserContext);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );
    const json = await data.json();
    const restaurantCard = json?.data?.cards?.find(
      (item) => item?.card?.card?.id === "restaurant_grid_listing_v2",
    );

    const restaurants =
      restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants ??
      [];

    setListOfRestaurant(restaurants);
    setFilteredRestaurant(restaurants);
  };

  if (listOfRestaurant.length === 0) {
    return <h1>Loading........</h1>;
  }

  return (
    <div className="body">
      <div className="flex filter p-3 m-3">
        <input
          type="search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
           placeholder="Search a restaurant you want..."
            className="searchBox border border-solid border-black rounded-lg w-90 outline-none"
        />
        <button
          className="px-4 py-2 bg-green-100 m-4 rounded-lg"
          onClick={(e) => {
            const filteredRestaurant = listOfRestaurant.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase()),
            );
            setFilteredRestaurant(filteredRestaurant);
          }}
        >
          Search
        </button>
        <button
          onClick={() => {
            const topRes = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4.5,
            );
            setFilteredRestaurant(topRes);
            console.log(topRes);
          }}
        >
          Top Rated Restaurant
        </button>
        <div>
         <input className="p-3 border border-black mx-5 rounded" onChange={(e)=>setUserName(e.target.value)} value={loggedInUser}  />
      </div>
      </div>
      
      <div className="flex flex-wrap gap-4 justify-self-start p-10">
        {filteredRestaurant.map((res) => (
          <Link to={`/restaurant/${res.info.id}`} key={res.info.id}>
            <RestaurantCard resData={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
