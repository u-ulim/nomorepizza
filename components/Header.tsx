"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LetterLogo from "@/src/assets/letterLogo";
import { navMenus } from "../constants";
import Link from "next/link";

export const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="w-[100%] bg-white shadow-md">
      <div className="py-4 flex justify-between items-center container">
        {/* Link 추가 */}
        <Link href="/">
          {/* 로고 */}
          <LetterLogo className="w-[200px] text-primary" />
        </Link>

        {/* 네비게이션 */}
        <nav className="flex gap-6">
          {navMenus.map((menu) => (
            <div
              key={menu.title}
              className="relative group"
              onMouseEnter={() => setActiveDropdown(menu.title)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {/* 메인 메뉴 */}
              <button className="text-gray-800 font-semibold px-4 py-2 hover:text-primary">
                {menu.title}
              </button>

              {/* 드롭다운 메뉴 */}
              <AnimatePresence>
                {activeDropdown === menu.title && (
                  <motion.ul
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-[0px] w-48 bg-white shadow-lg rounded-lg py-2 border "
                  >
                    {menu.subItems.map((subItem) => (
                      <li key={subItem}>
                        <a
                          href="#"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary transition"
                        >
                          {subItem}
                        </a>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
