"use client";

import { MdOutlinePhoneIphone } from "react-icons/md";
import { RiComputerLine } from "react-icons/ri";
import { BsSmartwatch } from "react-icons/bs";
import { LuCamera } from "react-icons/lu";
import { FiHeadphones } from "react-icons/fi";
import { LuGamepad2 } from "react-icons/lu";
export const Browse = () => {
  return (
    <div className="flex w-full  flex-col gap-6 border-y border-gray-500">
      <div className="flex items-center gap-4 pt-20">
        <div className="w-5 h-10 bg-red-600 rounded"></div>
        <div className="text-red-600">Categories</div>
      </div>

      <div className="flex justify-between w-full gap-6">
        <div className="text-4xl font-semibold">Browse By Category</div>
        <div className="flex gap-2">
          <button
            // onClick={() => sliderRef.current.slickPrev()}
            className="border w-[46px] h-[46px] rounded-full flex items-center justify-center"
            aria-label="Previous Slide"
          >
            {"<"}
          </button>
          <button
            // onClick={() => sliderRef.current.slickNext()}
            className="border w-[46px] h-[46px] rounded-full flex items-center justify-center"
            aria-label="Next Slide"
          >
            {">"}
          </button>
        </div>
      </div>
      <div className="flex f-full justify-between">
        <button className="border w-[170px] h-[145px] rounded flex flex-col items-center justify-center hover:bg-[#DB4444] hover:text-[#FFFFFF]">
          <MdOutlinePhoneIphone className="w-[56px] h-[56px]" />
          <p>Phone</p>
        </button>

        <button className="border w-[170px] h-[145px] rounded flex flex-col items-center justify-center hover:bg-[#DB4444] hover:text-[#FFFFFF]">
          <RiComputerLine className="w-[56px] h-[56px]" />
          <p>Computers</p>
        </button>

        <button className="border w-[170px] h-[145px] gap-3 rounded flex flex-col items-center justify-center hover:bg-[#DB4444] hover:text-[#FFFFFF]">
          <BsSmartwatch className="w-[56px] h-[56px]" />
          <p>SmartWatch</p>
        </button>

        <button className="border w-[170px] h-[145px] rounded flex flex-col items-center justify-center hover:bg-[#DB4444] hover:text-[#FFFFFF]">
          <LuCamera className="w-[56px] h-[56px]" />
          <p>Camera</p>
        </button>

        <button className="border w-[170px] h-[145px] rounded flex flex-col items-center justify-center hover:bg-[#DB4444] hover:text-[#FFFFFF]">
          <FiHeadphones className="w-[56px] h-[56px]" />
          <p>HeadPhones</p>
        </button>

        <button className="border w-[170px] h-[145px] rounded flex flex-col items-center justify-center hover:bg-[#DB4444] hover:text-[#FFFFFF]">
          <LuGamepad2 className="w-[56px] h-[56px]" />
          <p>Gaming</p>
        </button>
      </div>
    </div>
  );
};
