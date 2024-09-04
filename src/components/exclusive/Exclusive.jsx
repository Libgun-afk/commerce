// export const Exclusive = () => {
//   return (
//     <div className="flex w-[100%]  mb-2   gap-8 ">
//       <div className="flex flex-col gap-4 border-r py-10 border-gray-400 ">
//         <div className="flex items-center w-[217px] h-6 gap-[51px]">
//           <div className="font-normal text-base items-center text-black w-36 h-6">
//             Woman’s Fashion
//           </div>
//           <img
//             className="w-[7.78px] h-[12.73px] "
//             src="image copy 3.png"
//             alt=""
//           />
//         </div>
//         <div className="flex items-center w-[217px] h-6 gap-[51px]">
//           <div className="font-normal text-base items-center text-black w-36 h-6">
//             Men’s Fashion
//           </div>
//           <img
//             className="w-[7.78px] h-[12.73px] "
//             src="image copy 3.png"
//             alt=""
//           />
//         </div>
//         <div className="font-normal text-base items-center text-black w-36 h-6">
//           Electronics
//         </div>
//         <div className="font-normal text-base items-center text-black w-36 h-6">
//           Home & Lifestyle
//         </div>
//         <div className="font-normal text-base items-center text-black w-36 h-6">
//           Medicine
//         </div>
//         <div className="font-normal text-base items-center text-black w-36 h-6">
//           Sports & Outdoor
//         </div>
//         <div className="font-normal text-base items-center text-black w-36 h-6">
//           Baby’s & Toys
//         </div>
//         <div className="font-normal text-base items-center text-black w-36 h-6">
//           Groceries & Pets
//         </div>
//         <div className="font-normal text-base items-center text-black w-36 h-6">
//           Health & Beauty
//         </div>
//       </div>
//       <div>
//         <img className="py-10" src="image copy 4.png" alt="" />
//       </div>
//     </div>
//   );
// };

import React from "react";
// import { FaChevronRight } from "react-icons/fa";

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
              {/* <FaChevronRight /> */}
            </div>
          );
        })}
      </div>
      <div>
        <img className="h-[344px]" src="image copy 4.png" alt="" />{" "}
      </div>
    </div>
  );
};
