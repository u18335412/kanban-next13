"use client";

import hideImage from "../assets/icon-hide-sidebar.svg";
import showImage from "../assets/icon-show-sidebar.svg";
import Image from "next/image";

export const HideSidebar = () => {
  return (
    <div className="mt-6 mb-12">
      <button className="flex items-center font-bold gap-x-4 text-medium-grey text-md">
        <Image src={hideImage} alt="" aria-hidden />
        <span>Hide Sidebar</span>
      </button>
    </div>
  );
};

export const ShowSidebar = () => {
  return (
    <div className="absolute -left-2 bottom-8">
      <button className="flex items-center justify-center h-12 rounded-r-full w-14 bg-main-purple">
        <span className="sr-only ">Show sidebar</span>
        <Image
          src={showImage}
          alt=""
          aria-hidden
          className=" w-4 h-2.5"
        />
      </button>
    </div>
  );
};
