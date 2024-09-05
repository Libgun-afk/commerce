import React, { useState } from "react";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("blue");

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };

  return (
    <div className="">
      <div className="">
        <label className="font-bold">Colours:</label>
        <div className="flex space-x-3 mt-2">
          <button
            className={`w-6 h-6 rounded-full border-2 ${
              selectedColor === "green" ? "border-black" : "border-gray-300"
            }`}
            style={{ backgroundColor: "green" }}
            onClick={() => setSelectedColor("green")}
          />
          <button
            className={`w-6 h-6 rounded-full border-2 ${
              selectedColor === "red" ? "border-black" : "border-gray-300"
            }`}
            style={{ backgroundColor: "red" }}
            onClick={() => setSelectedColor("red")}
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="font-bold">Size:</label>
        <div className="flex space-x-3 mt-2">
          {["XS", "S", "M", "L", "XL"].map((size) => (
            <button
              key={size}
              className={`px-4 py-2 border rounded ${
                selectedSize === size
                  ? "bg-red-500 text-white"
                  : "bg-white border-gray-300"
              }`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
      <div className="flex gap-6">
        <div className=" flex items-center w-[159px] h-[44px] rounded-md border-[1px] justify-between ">
          <button
            className="px-4 py-2 bg-red-500 text-white rounded"
            onClick={decreaseQuantity}
          >
            -
          </button>
          <span className="text-xl">{quantity}</span>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded"
            onClick={increaseQuantity}
          >
            +
          </button>
        </div>

        <button className="w-[165px] h-[44px] bg-[#DB4444] text-white py-2 rounded">
          Buy Now
        </button>
        <button className="rounded border-[2px] h-[40px] w-[40px] flex items-center justify-center">
          <img
            className="flex w-[20px] h-[20px]"
            src="/image copy 13.png"
            alt=""
          />
        </button>
      </div>

      <div className="w-[399px] h-[180px] rounded-md border-1px border-gray-500">
        <div className="flex items-center ">
          <img src="/image copy 12.png" alt="" className="w-6 h-6" />
          <div className="ml-2 font-bold flex flex-col">
            Free Delivery{" "}
            <a href="/" className="underline">
              Enter your postal code for Delivery Availability
            </a>
          </div>
        </div>
        <div className="flex items-center">
          <img src="/image copy 11.png" alt="" className="w-6 h-6" />
          <div className="ml-2 font-bold w-[225px] h-[50px]">
            Return Delivery{" "}
            <div className="flex">
              Free 30 Days Delivery Returns. <a href="/">Details</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
