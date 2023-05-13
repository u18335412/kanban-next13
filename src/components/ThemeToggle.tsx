"use client";

import Image from "next/image";
import darkMode from "@/assets/icon-dark-theme.svg";
import lightMode from "@/assets/icon-light-theme.svg";
import { useState } from "react";

export const ThemeToggle = () => {
  const [isDarkMode] = useState(true);
  return (
    <div className=" py-[0.875rem] justify-center gap-x-6 flex items-center bg-very-dark-grey rounded-md">
      <p className="sr-only ">Toggle Dark Mode</p>
      <Image src={lightMode} alt="" aria-hidden />
      <label
        htmlFor="theme-toggle"
        className="relative w-10 h-5 rounded-full cursor-pointer bg-main-purple"
      >
        <input
          defaultChecked={isDarkMode}
          type="checkbox"
          name="theme-toggle"
          id="theme-toggle"
          className="sr-only peer"
        />
        <span className=" absolute bg-white rounded-full peer-checked:translate-x-[1.18rem] pointer-events-none left-1 top-[.17rem] w-[0.875rem] h-[0.875rem] transition-all" />
      </label>
      <Image src={darkMode} alt="" aria-hidden />
    </div>
  );
};
