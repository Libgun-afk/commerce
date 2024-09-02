import { CgChevronDown } from "react-icons/cg";

export const Header = () => {
  return (
    <div className="flex justify-between items-center w-1440px h-12 px-28 py-8 bg-black text-white">
      <div></div>
      <div className="flex gap-3">
        <div className="flex w-[474px] h-[18px] font-normal text-sm">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </div>
        <div className="font-bold text-sm underline">ShopNow</div>
      </div>
      <div className="flex gap-1 items-center">
        English
        <CgChevronDown />
      </div>
    </div>
  );
};
