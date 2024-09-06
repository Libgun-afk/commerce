import React, { useState } from "react";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity != 0) setQuantity(quantity - 1);
  };

  return (
    <div className="w-[300px] h-auto flex flex-col gap-8">
      <div className="flex gap-4 ">
        <label className="font-bold">Colours:</label>
        <div className=" space-x-3  flex items-center ">
          <button
            className={`w-5 h-5 rounded-full border-2 ${
              selectedColor === "#A0BCE0" ? "border-black" : "border-gray-300"
            }`}
            style={{ backgroundColor: "#A0BCE0" }}
            onClick={() => setSelectedColor("#A0BCE0")}
          />
          <button
            className={`w-5 h-5 rounded-full border-2 ${
              selectedColor === "#E07575" ? "border-black" : "border-gray-300"
            }`}
            style={{ backgroundColor: "#E07575" }}
            onClick={() => setSelectedColor("#E07575")}
          />
        </div>
      </div>

      <div className="flex gap-6 items-center ">
        <label className="font-bold text-base">Size:</label>
        <div className="flex space-x-3 text-sm font-medium">
          {["XS", "S", "M", "L", "XL"].map((size) => (
            <button
              key={size}
              className={`w-8 h-8 border rounded ${
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
      <div className="flex gap-2">
        <div className=" flex items-center w-[159px] h-[44px] rounded-md border-[1px] justify-between ">
          <button
            className="px-4 py-2 hover:bg-red-500 hover:text-white border-r text-xl "
            onClick={decreaseQuantity}
          >
            -
          </button>
          <span className="text-xl">{quantity}</span>
          <button
            className="px-4 py-2 hover:bg-red-500 hover:text-white border-l text-xl"
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

      <div className="w-[399px] h-[180px] rounded-md border-[1px] border-gray-500 flex flex-col">
        <div className="flex items-center w-full h-1/2 gap-4 border-b border-gray-500 px-4">
          <img
            src="/image copy 12.png"
            alt=""
            className="w-6 h-6 object-contain"
          />
          <div className=" flex flex-col w-[276px] h-[50px]">
            <div className="font-medium text-[16px]">Free Delivery</div>
            <a href="/" className="underline font-medium text-xs">
              Enter your postal code for Delivery Availability
            </a>
          </div>
        </div>
        <div className="flex items-center w-full h-1/2 gap-4 px-4">
          <img
            src="/image copy 11.png"
            alt=""
            className="w-6 h-6 object-contain"
          />
          <div className=" flex flex-col w-[276px] h-[50px]">
            <div className="font-medium text-[16px]">Return Deliverydiv</div>
            <div className="flex gap-2 w-[225px] h-[18px]">
              <div className="font-medium text-xs">
                Free 30 Days Delivery Returns.
              </div>
              <a href="/" className="underline font-medium text-xs">
                Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
