"use client";

import { useState } from "react";
import { Card } from "./Card";

export const Today = ({ posts }) => {
  const [sliceCount, setSliceCount] = useState(4);

  const clickA = () => {
    document.getElementById("a-a").scrollBy({
      left: -400,
      behavior: "smooth",
    });
  };
  const clickB = () => {
    document.getElementById("a-a").scrollBy({
      left: 400,
      behavior: "smooth",
    });
  };
  return (
    <div className="flex flex-col w-full gap-8 ">
      <div className="flex flex-col w-[100%] h-12 py-16">
        <div className="flex items-center gap-4">
          <img className="w-5 h-10" src="today's/image.png" alt="" />
          <div>Today’s</div>
        </div>

        <div className="flex justify-between">
          <div className="flex gap-5">
            <div className="w-[211px] h-12 font-semibold text-4xl">
              Flash Sales
            </div>
            <div>component irne</div>
          </div>

          <div className="flex gap-2">
            <div
              onClick={clickA}
              className="rounded-full bg-slate-200 flex justify-center items-center w-[46px] h-[46px] "
            >
              <img
                className="w-4 h-[14px]  items-center justify-center"
                src="today's/image copy.png"
                alt=""
              />
            </div>
            <div
              onClick={clickB}
              className="rounded-full flex justify-center items-center bg-slate-200 w-[46px] h-[46px]"
            >
              <img
                className="w-4 h-[14px]"
                src="today's/image copy 2.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <div
        className="flex justify-center flex-col
    "
      >
        <div id="a-a" className="flex alga overflow-x-scroll gap-4">
          {posts.map(({ id, image, title, price, rating }, index) => {
            return (
              <div className="">
                <Card
                  key={index}
                  id={id}
                  image={image}
                  title={title}
                  price={price}
                  rating={rating}
                />
              </div>
            );
          })}
        </div>

        {posts.length != posts.length && (
          <div className="flex justify-center items-center">
            <button
              onClick={moreHandler}
              className="text-white  text-base font-medium w-[234px] h-14 rounded-[4px] bg-[#DB4444]"
            >
              View All Products
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
