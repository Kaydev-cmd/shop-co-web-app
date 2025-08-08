import React, { useEffect, useState, useRef } from "react";
import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import { CgMenu } from "react-icons/cg";
import { IoMdSearch } from "react-icons/io";
import { useRouter } from "next/router";
import SearchBar from "../common/SearchBar";
import CartIcon from "../common/CartIcon";
import { motion, AnimatePresence } from "framer-motion";

const Header: React.FC = () => {
  const router = useRouter();
  const [nav, setNav] = useState<boolean>(false);
  const [searchOpen, setSearchOpen] = useState<boolean>(false);

  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (nav && navRef.current && !navRef.current.contains(e.target as Node)) {
        setNav(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [nav]);

  const handleNav = () => setNav(!nav);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <header>
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div ref={navRef}>
              <CgMenu size={32} onClick={handleNav} className="md:hidden" />
            </div>
            {!searchOpen && (
              <h1
                className="uppercase font-extrabold text-2xl cursor-pointer hover:text-blue-600 transition-all duration-300"
                onClick={() => router.push("/")}
              >
                Shop.co
              </h1>
            )}
          </div>
          {searchOpen && <SearchBar />}

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-6 font-semibold">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className="hover:text-blue-600 transition-all duration-300"
              >
                {link.link}
              </Link>
            ))}
          </nav>

          {/* Mobile Links */}
          <AnimatePresence>
            {nav && (
              <motion.nav
                ref={navRef}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="flex flex-col items-center justify-center gap-6 absolute top-33 left-0 w-full bg-black text-white h-72 z-5"
              >
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.id}
                    href={link.href}
                    className="text-lg"
                    onClick={() => setNav(false)}
                  >
                    {link.link}
                  </Link>
                ))}
              </motion.nav>
            )}
          </AnimatePresence>

          <div className="flex items-center gap-4">
            <IoMdSearch
              size={32}
              onClick={() => setSearchOpen((prev) => !prev)}
              className="hover:text-blue-600 transition-all duration-300 cursor-pointer"
            />
            <CartIcon />
          </div>
        </div>
      </header>
    </motion.div>
  );
};

export default Header;
