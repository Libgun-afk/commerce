import React from "react";

export const Exclusive = () => {
  const exc = [
    "Women's fashion",
    "Men's fashion",
    "Electronics",
    "Home & Lifestyle",
    "Medicine",
    "Sports & outdoor",
    "Baby's & Toys",
    "Groceries & Pets",
    "Health & beauty",
  ];
  return (
    <div className="flex w-full h-[344px]">
      <div className="flex flex-col gap-4 w-[217px] h-[344px] pr-5 ">
        {exc.map((el) => {
          return (
            <div className="flex font-normal text-base items-center text-black w-36 h-6 ">
              <p>{el}</p>
            </div>
          );
        })}
      </div>
      <div className="">
        <div className="carousel w-[892px] h-[344px] z-0 absolute">
          <div id="item1" className="carousel-item w-full">
            <img src="/image copy 4.png" className="w-[892px] h-[344px]" />
          </div>
          <div id="item2" className="carousel-item w-full">
            <img src="/image copy 7.png" className="w-[892px] h-[344px]" />
          </div>
          <div id="item3" className="carousel-item w-full">
            <img src="/image copy 4.png" className="w-[892px] h-[344px]" />
          </div>
          <div id="item4" className="carousel-item w-full">
            <img src="/image copy 7.png" className="w-[892px] h-[344px]" />
          </div>
        </div>
        <div className="flex w-full justify-center gap-2 py-2 z-10 relative ">
          <a href="#item1" className="btn btn-xs">
            1
          </a>
          <a href="#item2" className="btn btn-xs">
            2
          </a>
          <a href="#item3" className="btn btn-xs">
            3
          </a>
          <a href="#item4" className="btn btn-xs">
            4
          </a>
        </div>
        {/* <img className="h-[344px]" src="/image copy 4.png" alt="" />{" "} */}
      </div>
    </div>
  );
};
