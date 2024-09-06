"use client";

import { Card } from "./today/Card";

export const Related = ({ products1 }) => {
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
    <div className="flex w-full flex-col  pb-6">
      <div className="flex flex-col w-[100%] h-12 py-16 gap-3">
        <div className="flex items-center gap-4">
          <img className="w-5 h-10" src="/today's/image.png" alt="" />
          <div className="font-bold text-base text-[#DB4444]">Related Item</div>
        </div>
      </div>
      <div className="flex justify-center flex-col">
        <div
          id="a-a"
          className="flex  overflow-x-scroll gap-4 pt-5 h-[400px] w-full 
          "
        >
          {products1.map(({ id, image, title, price, rating }, index) => {
            return (
              <div key={index} className="h-[350px] w-full ">
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
      </div>
    </div>
  );
};
