"use client";

import Link from "next/link";
export const Card = ({ id, image, price, title, rating }) => {
  return (
    <Link
      href={`/single/${id}`}
      className="w-[270px] overflow-scroll h-[350px] flex gap-8"
    >
      <div className="flex  gap-8 rounded-lg  h-[350px] w-[270px] border-[#7c7c7d]">
        <div>
          <div className="flex flex-col relative items-center group ">
            <div className="rounded-md h-[250px] w-[270px] flex items-center justify-center bg-[#a09f9f] ">
              <img className="w-44 h-36 object-contain mt-7" src={image} />
              <button
                className={`w-[270px] h-[40px] bg-black text-white absolute bottom-0 rounded-md transition-opacity duration-300 opacity-0 group-hover:opacity-100`}
              >
                Add To Cart
              </button>
            </div>
          </div>
          <div className="flex flex-col w-[270px] h-[84px] gap-8">
            <div className="font-medium text-base h-6">{title}</div>
            <div className="flex gap-1 items-center">
              <div className="text-[#DB4444] font-medium text-base h-6">
                {" "}
                ${price}{" "}
              </div>
              <div className="font-semibold text-sm text-gray-500">
                ({rating.count} {rating.rate})
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
