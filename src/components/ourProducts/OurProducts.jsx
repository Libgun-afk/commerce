"use client";

import { Cards } from "./Cards.jsx";

export const OurProducts = ({ posts }) => {
  const clickA = () => {
    document.getElementById("b-c").scrollBy({
      left: -400,
      behavior: "smooth",
    });
    document.getElementById("b-b").scrollBy({
      left: -400,
      behavior: "smooth",
    });
  };
  const clickB = () => {
    document.getElementById("b-c").scrollBy({
      left: 400,
      behavior: "smooth",
    });
    document.getElementById("b-b").scrollBy({
      left: 400,
      behavior: "smooth",
    });
  };
  const halfOfProduct = posts.length / 2;
  return (
    <div className="flex flex-col w-full gap-10 pb-6">
      <div className="flex flex-col w-[100%] h-12 py-16 gap-5">
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
      </div>
      <div className="flex justify-center flex-col">
        <div
          id="b-c"
          className="flex  overflow-x-scroll gap-4 pt-5 h-[400px] w-full 
          "
        >
          {posts
            .slice(0, halfOfProduct)
            .map(({ id, image, title, price, rating }, index) => {
              return (
                <div className="h-[350px] w-full ">
                  <Cards
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
        <div
          id="b-b"
          className="flex  overflow-x-scroll gap-4 pt-5 h-[400px] w-full 
          "
        >
          {posts
            .slice(halfOfProduct, posts.length)
            .map(({ id, image, title, price, rating }, index) => {
              return (
                <div className="h-[350px] w-full ">
                  <Cards
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
      <div className="flex justify-center">
        <div className="flex justify-center items-center">
          <button className="btn btn-secondary bg-[#DB4444] hover:bg-[#DB4444] border-[1px] rounded-md text-white w-[234px] h-[56px] flex gap-[10px]">
            View All Products
          </button>
        </div>
      </div>
    </div>
  );
};
