import React from "react";

export const Featured = () => {
  return (
    <div className="flex flex-col ">
      <div className="flex h-[600px] justify-between">
        <img
          className="w-[590px] h-[600px] rounded-md"
          src="image copy 6.png"
          alt=""
        />
        <div className="flex flex-col gap-7">
          <img
            className="w-[590px] h-[284px] first-line:"
            src="image copy 7.png"
            alt=""
          />
          <img className="w-[590px] h-[284px]" src="image copy 8.png" alt="" />
        </div>
      </div>
      <img className="flex py-32" src="image copy 9.png" alt="" />
    </div>
  );
};
