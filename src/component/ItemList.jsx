import React from "react";
import { useDispatch } from "react-redux";
import {addItem} from "../../utils/cartSlice"

const ItemList = ({ lists }) => {
  const dispatch = useDispatch();

  const handleClick = (list) => {
    dispatch(addItem(list))
  };

  return (
    <div>
      
      {lists?.map((list) => (
        <div className="flex justify-between" key={list?.card?.info?.id}>
          <div>{list?.card?.info?.name}</div>
          <div
            className="bg-black text-white p-1 m-3 rounded-md cursor-pointer"
            onClick={()=>handleClick(list)}
          >
            Add to Cart
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
