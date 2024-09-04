"use client";

import Link from "next/link";
// import { Author } from "./Author";

export const Card = ({ id, image, price, title, rating }) => {
  return (
    <Link href={`${id}`} className="w-[270px] overflow-scroll">
      <div className="flex flex-col gap-4 rounded-lg  h-[350px] w-[270px] border-[#E8E8EA]">
        <div className="relative">
          <div className="h-[250px] w-[270px] flex items-center justify-center bg-[#F5F5F5]">
            <img
              className="flex justify-center w-[172px] h-[152px] items-center bg-[#F5F5F5]"
              src={image}
              alt=""
            />
          </div>
          <div className="flex flex-col w-[201px] h-[84px] gap-8">
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
