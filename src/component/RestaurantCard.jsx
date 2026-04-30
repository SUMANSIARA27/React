import { CDN_URL } from "../../utils/constant";

const RestaurantCard = ({ resData }) => {
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla,
  } = resData.info;

  return (
    <div className="w-64 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition hover:bg-gray-200 duration-300 bg-white cursor-pointer">
      
      {/* Image */}
      <img
        className="w-full h-40 object-cover"
        src={`${CDN_URL}/${cloudinaryImageId}`}
        alt={name}
      />

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold truncate">{name}</h3>

        <p className="text-sm text-gray-500 truncate">
          {cuisines.join(", ")}
        </p>

        <div className="flex justify-between items-center mt-2">
          <span className="text-green-600 font-medium">
            ⭐ {avgRating}
          </span>
          <span className="text-sm text-gray-600">
            {sla?.deliveryTime} mins
          </span>
        </div>

        <p className="text-sm font-medium mt-2">
          ₹ {costForTwo}
        </p>
      </div>
    </div>
  );
  // i have to write the HOC here  which take Restaurant card as a  input ad
};

export default RestaurantCard;