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
  ];

  return (
    <div>
      <div  className="flex justify-between items-center w-1440px h-12 px-28 py-8 bg-black text-white">
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
      <div className="flex">
        <div>Exclusive</div>
        <div className="h-[24px] flex gap-10">
        {routers.map(({ href, title }) => (
          <Link href={href} key={title}>
            {title}
          </Link>
        ))}
      </div>
      </div>
    </div>
);
};
