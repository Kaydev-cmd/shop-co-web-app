import React, { useState } from "react";
import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import { CgMenu } from "react-icons/cg";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useRouter } from "next/router";

const Header: React.FC = () => {
  const router = useRouter();
  const [nav, setNav] = useState<boolean>(false);

  const handleNav = () => setNav(!nav);

  return (
    <header>
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-4">
          <CgMenu size={32} onClick={handleNav} />
          <h1
            className="uppercase font-extrabold text-2xl"
            onClick={() => router.push("/")}
          >
            Shop.co
          </h1>
        </div>

        {/* Desktop Links */}
        <nav className="hidden">
          {NAV_LINKS.map((link) => (
            <Link key={link.id} href={link.href}>
              {link.link}
            </Link>
          ))}
        </nav>

        {/* Mobile Links */}
        <nav
          className={`${
            nav ? "flex" : "hidden"
          } flex-col items-center justify-center gap-6 absolute top-34 left-0 w-full bg-black text-white transition-all duration-300 ease-in-out h-68`}
        >
          {NAV_LINKS.map((link) => (
            <Link key={link.id} href={link.href} className="text-lg">
              {link.link}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <IoMdSearch size={32} />
          <MdOutlineShoppingCart
            size={28}
            onClick={() => router.push("/cart")}
          />
          <FaRegUserCircle size={28} onClick={() => router.push("/user")} />
        </div>
      </div>
    </header>
  );
};

export default Header;
