"use client";

import Link from "next/link";
export const Card = ({ id, image, price, title, rating }) => {
  const ButenOd = Array(parseInt(rating.rate)).fill(0);
  const TalOd = rating.rate === rating.rate && rating.rate % 1 !== 0;

  return (
    <Link href={`/single/${id}`} className="w-[270px] h-[350px] flex gap-8">
      <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <figure>
          <img src={image} alt={title} className="w-[250px] h-[280px]" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div className="flex gap-4">
            <div>{price}</div>
            <div>{price}</div>
          </div>

          <div className="flex gap-2 items-center">
            <div className="rating rating-lg rating-half">
              {ButenOd.map((el) => (
                <div className="flex w-3 h-3">
                  <input
                    type="radio"
                    name="rating-10"
                    className="mask mask-star-2 bg-orange-400 "
                  />
                </div>
              ))}

              {TalOd && (
                <div className="flex w-3 h-3 ">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400 mask-half-1"
                  />
                </div>
              )}
            </div>
            <div>({rating.count})</div>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>

      {/* <div className="flex border gap-8 rounded-lg h-[350px] w-[270px] border-gray-500">
        <div>
          <div className="flex flex-col relative items-center group ">
            <div className="rounded-md h-[250px] w-[260px] flex items-center justify-center bg-white">
              <img className="w-44 h-36 object-contain mt-7" src={image} />
              <button
                className={`w-[270px] h-[40px] bg-black text-white absolute bottom-0 rounded-md transition-opacity duration-300 opacity-0 group-hover:opacity-100`}
              >
                Add To Cart
              </button>
            </div>
          </div>
          <div className="flex flex-col w-[270px] h-[84px] gap-8">
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
      </div> */}
    </Link>
  );
};
