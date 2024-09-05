"use client";

import { SellingCard } from "./SellingCard";

export const Selling = ({ posts }) => {
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
    <div className="flex flex-col w-full gap-20 pb-6">
      <div className="flex flex-col w-[100%] h-12 py-16 gap-5">
        <div className="flex items-center gap-4">
          <img
            className="w-5 h-10 text-[#DB4444]"
            src="today's/image.png"
            alt=""
          />
          <div>This Month</div>
        </div>

        <div className="flex justify-between">
          <div className="flex gap-5">
            <div className="w-[400px] h-12 font-semibold text-4xl">
              Best Selling Products
            </div>
          </div>

          <div className="flex justify-center">
            <div className="flex justify-center items-center">
              <button className="btn btn-secondary bg-[#DB4444] hover:bg-[#DB4444] border-[1px] rounded-md text-white w-[159px] h-[56px] flex gap-[10px]">
                View All Products
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center flex-col">
          <div
            id="a-a"
            className="flex  overflow-x-scroll gap-4 h-[400px] w-full"
          >
            {posts.map(({ id, image, title, price, rating }, index) => {
              return (
                <div className="">
                  <SellingCard
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
        </div>
      </div>
    </div>
  );
};
