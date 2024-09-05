import { CgChevronDown } from "react-icons/cg";

import Link from "next/link";

export const Header = () => {
  const routers = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Contact",
      href: "/contact",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "SignUp",
      href: "/signUp",
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center w-1440px h-12 px-28 py-8 bg-black text-white ">
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
      <div className="border-b border-gray-400">
        <div className="flex px-[130px] justify-between h-[38px] mt-12 mb-6  ">
          <div className="w-[118px] h-[24px] font-bold text-2xl">Exclusive</div>
          <div className="h-[24px] flex gap-10">
            {routers.map(({ href, title }) => (
              <Link href={href} key={title}>
                {title}
              </Link>
            ))}
          </div>
          <div className="flex w-[347px] h-[38px] gap-6 justify-center items-center ">
            <input
              className="w-[243px] h-[38px] rounded flex gap-[10px] py-[7px] pl-3 pr-5 bg-[#F5F5F5]"
              type="text"
              placeholder="What are you looking for?"
            />

            <img
              className="object-cover w-5 h-[17.83px]"
              src="/image copy.png"
              alt=""
            />
            <img
              className="object-cover w-5 h-[17.83px]"
              src="/image.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
