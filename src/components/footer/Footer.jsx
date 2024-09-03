import React from "react";

const Footer = () => {
  return (
    <div className="flex h-[440px] justify-center px-[130px]  bg-black">
      <div className="flex gap-[87px] w-full py-[80px] h-[236px] justify-between ">
        <div className="flex flex-col gap-5">
          <div className="w-[118px] h-6 font-bold text-2xl text-[#FAFAFA]">
            Exclusive
          </div>
          <div className="w-[101px] h-7 font-medium text-xl text-[#FAFAFA]">
            Subscribe
          </div>
          <div className="font-normal text-base text-[#FAFAFA]">
            Get 10% off your first order
          </div>
          <div className="flex items-center">
            <input
              type="text"
              className="flex text-[#FAFAFA] bg-black rounded-[4px] gap-8 w-[217px] h-[48px] py-3 pr-4 pl-2 border-2"
              placeholder="Enter your email"
            />
            <img className="w-5 h-[18px] " src="image copy 2.png" alt="" />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="w-[118px] h-6 font-medium text-xl text-[#FAFAFA]">
            Support
          </div>
          <div className="font-normal text-base text-[#FAFAFA]">
            111 Bijoy sarani, Dhaka,
            <br /> DH 1515, Bangladesh.
          </div>
          <div className="font-normal text-base text-[#FAFAFA]">
            exclusive@gmail.com
          </div>
          <div className="font-normal text-base text-[#FAFAFA]">
            +88015-88888-9999
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="w-[118px] h-6 font-medium text-xl text-[#FAFAFA]">
            Account
          </div>
          <div className="font-normal text-base text-[#FAFAFA]">My Account</div>
          <div className="font-normal text-base text-[#FAFAFA]">
            Login / Register
          </div>
          <div className="font-normal text-base text-[#FAFAFA]">Cart</div>
          <div className="font-normal text-base text-[#FAFAFA]">Wishlist</div>
          <div className="font-normal text-base text-[#FAFAFA]">Shop</div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="w-[118px] h-6 font-medium text-xl text-[#FAFAFA]">
            Quick Link
          </div>
          <div className="font-normal text-base text-[#FAFAFA]">
            Privacy Policy
          </div>
          <div className="font-normal text-base text-[#FAFAFA]">
            Terms Of Use
          </div>
          <div className="font-normal text-base text-[#FAFAFA]">FAQ</div>
          <div className="font-normal text-base text-[#FAFAFA]">Contact</div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="w-[148px] h-7 font-medium text-xl text-[#FAFAFA]">
            Download App
          </div>
          <div className="flex flex-col gap-2">
            <div className="font-normal text-xs text-[#FAFAFA]">
              Save $3 with App New User Only
            </div>
            <div className="flex flex-wrap gap-2">
              <img
                className="w-[76px] h-[76px]"
                src="footer/image.png"
                alt=""
              />
              <div className="flex flex-col gap-[7px]">
                <img
                  className="flex w-[104px] h-[34px]"
                  src="footer/image copy.png"
                  alt=""
                />
                <img
                  className="flex w-[104px] h-[34px] "
                  src="footer/image copy 2.png"
                  alt=""
                />
              </div>
            </div>
            <div className="flex justify-around mr-10 pt-6">
              <img
                className="flex w-[10.5px] h-[18px] object-fill"
                src="footer/image copy 3.png"
                alt=""
              />
              <img
                className="flex w-[20.06px] h-[16.65px] object-fill"
                src="footer/image copy 4.png"
                alt=""
              />
              <img
                className="flex w-[18px] h-[18px] object-fill"
                src="footer/image copy 5.png"
                alt=""
              />
              <img
                className="flex w-[17.5px] h-[17.5px] object-fill"
                src="footer/image copy 6.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
