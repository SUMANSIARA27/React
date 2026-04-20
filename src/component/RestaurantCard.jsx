import { CDN_URL } from "../../utils/constant";

const RestaurantCard = ({resData}) => {
  
const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla,
  } = resData.info;
  return (
    <div
      className="res-card"
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <img
        className="res-logo"
      src={`${CDN_URL}/${cloudinaryImageId}`}
        height={100}
        width={100}
      />
      <h3>{name}</h3>
      <h4>{avgRating}⭐</h4>
      <h4>₹ {costForTwo} FOR TWO</h4>
    </div>
  );
};
export default RestaurantCard ;