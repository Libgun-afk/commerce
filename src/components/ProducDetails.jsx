/** @format */

"use client";
import React from "react";
import ProductDetails from "./ProductDetails";

export const ProducDetails = ({ products }) => {
  const { id, image, title, description, price, rating } = products;
  return (
    <div className="flex gap-7">
      <div className="flex flex-col justify-between h-[600px]">
        <img
          className="h-[138px] w-[170px] object-contain"
          src={image}
          alt=""
        />
        <img
          className="h-[138px] w-[170px] object-contain"
          src={image}
          alt=""
        />
        <img
          className="h-[138px] w-[170px] object-contain"
          src={image}
          alt=""
        />
        <img
          className="h-[138px] w-[170px] object-contain"
          src={image}
          alt=""
        />
      </div>
      <img className="h-[600px] w-[500px] object-contain" src={image} alt="" />
      <div className="w-[399px] flex flex-col gap-5 ">
        {title}
        <div className="flex justify-between items-center w-[290px] h-[21px]">
          <div className="rating w-[100px] h-[20px] flex justify-center items-center ">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
          <div className="text-gray-500 border-r border-gray-400  h-[21px] flex justify-center items-center text-sm pr-3">
            ({rating.count} Reviews)
          </div>
          <div className="text-[#00FF66] text-sm flex justify-center items-center">
            In Stock
          </div>
        </div>
        <div className="flex font-normal text-lg">${price}</div>
        <div className="text-sm font-normal border-b border-gray-400 pb-5">
          {description}
        </div>

        <div>Colours:</div>
        <ProductDetails />
      </div>
    </div>
  );
};
