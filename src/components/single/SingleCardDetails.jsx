/** @format */

// "use client";
// import Link from "next/link";
// export const SingleCard = ({ id, image, price, title, rating }) => {
//   return (
//     <Link
//       href={`/single/${id}`}
//       className="w-[270px] overflow-scroll h-[370px] flex flex-col gap-8"
//     >
//       <div>
//         <div className="flex flex-col gap-8 rounded-lg  h-[350px] w-[270px] border-[#7c7c7d]">
//           <div className="flex flex-col relative items-center group ">
//             <div className="rounded-md h-[250px] w-[270px] flex items-center justify-center bg-[#a09f9f] ">
//               <img className="w-44 h-36 object-contain mt-7" src={image} />
//               <button
//                 className={`w-[270px] h-[40px] bg-black text-white absolute bottom-0 rounded-md transition-opacity duration-300 opacity-0 group-hover:opacity-100`}
//               >
//                 Add To Cart
//               </button>
//             </div>
//           </div>
//           <div className="flex flex-col w-[270px] h-[84px] gap-8">
//             <div className="font-medium text-base h-6">{title}</div>
//             <div className="flex gap-1 items-center">
//               <div className="text-[#DB4444] font-medium text-base h-6">
//                 {" "}
//                 ${price}{" "}
//               </div>
//               <div className="font-semibold text-sm text-gray-500">/** @format */

// "use client";
// import React from "react";

// const SingleCardDetails = async ({ params }) => {
//   const { id } = params;
//   const result = await fetch(`https://fakestoreapi.com/products/${id}`);
//   const oneCard = await result.json();

//   return (
//     <div className="flex gap-4 ">
//       <div className="flex flex-col justify-between">
//         <img
//           className="w-[170px] h-[138px]"
//           src={oneCard.image}
//           alt={oneCard.title}
//         />
//         <img
//           className="w-[170px] h-[138px]"
//           src={oneCard.image}
//           alt={oneCard.title}
//         />
//         <img
//           className="w-[170px] h-[138px]"
//           src={oneCard.image}
//           alt={oneCard.title}
//         />
//         <img
//           className="w-[170px] h-[138px]"
//           src={oneCard.image}
//           alt={oneCard.title}
//         />
//       </div>
//       <div className="w-[500px] h-[600px] rounded-lg bg-[#F5F5F5] flex items-center justify-center">
//         <img
//           className="w-[446px] h-[315px] px-6"
//           src={oneCard.image}
//           alt={oneCard.title}
//         />
//       </div>
//       <div className="flex flex-col h-[600px] w-[400px]">
//         <div className="flex flex-col gap-10 ">
//           <div className="font-semibold text-xl w-[304px] h-[24px]">
//             {oneCard.title}
//           </div>
//           <div className="font-normal text-xl w-[97px] h-[24px]">
//             ${oneCard.price}
//           </div>
//           <div className="font-normal text-sm w-[374px] h-[63px]">
//             {oneCard.description}
//           </div>

//           <div className="flex w-[155px] h-[20px]">
//             <div className="w-[83px] h-[20px] font-normal">Colours:</div>
//             <div className="rating">
//               <input
//                 type="radio"
//                 name="rating-2"
//                 className="mask mask-star-2 bg-orange-400"
//               />
//               <input
//                 type="radio"
//                 name="rating-2"
//                 className="mask mask-star-2 bg-orange-400"
//                 defaultChecked
//               />
//               <input
//                 type="radio"
//                 name="rating-2"
//                 className="mask mask-star-2 bg-orange-400"
//               />
//               <input
//                 type="radio"
//                 name="rating-2"
//                 className="mask mask-star-2 bg-orange-400"
//               />
//               <input
//                 type="radio"
//                 name="rating-2"
//                 className="mask mask-star-2 bg-orange-400"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SingleCardDetails;

// //                 ({rating.count} {rating.rate})
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </Link>
// //   );
// // };
