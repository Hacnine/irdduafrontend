import React from 'react';
import Link from 'next/link';
import { HiOutlineHome } from "react-icons/hi2";
import { HiOutlineViewGrid } from "react-icons/hi";
import { PiLightbulbFilament } from "react-icons/pi";
import { HiOutlineBookmark } from "react-icons/hi2";
import { RiMedicineBottleLine } from "react-icons/ri";

const FixedFooter = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-white pb-6 mt-6 rounded-t-[3rem] shadow-md shadow-gray-600 xl:hidden block ">
      <div className="px-6 pt-6 flex justify-between">
        <Link href="/">
          <div className="w-10 h-10 bg-dua-bg flex items-center justify-center rounded-full cursor-pointer dark:bg-dark-bg-dark">
            <HiOutlineHome className=' rounded-full p-2 size-10 text-gray-400' alt="" />
          </div>
        </Link>
        <Link href="/alldua">
          <div className="w-10 h-10 bg-dua-bg flex items-center justify-center rounded-full cursor-pointer dark:bg-dark-bg-dark">
          <HiOutlineViewGrid className=' rounded-full p-2 size-10 text-gray-400' alt="" />
          </div>
        </Link>
        <Link href="/memorize">
          <div className="w-10 h-10 bg-dua-bg flex items-center justify-center rounded-full cursor-pointer dark:bg-dark-bg-dark">
          <PiLightbulbFilament className=' rounded-full p-2 size-10 text-gray-400' alt="" />
          </div>
        </Link>
        <Link href="/bookmark">
          <div className="w-10 h-10 bg-dua-bg flex items-center justify-center rounded-full cursor-pointer dark:bg-dark-bg-dark">
          <HiOutlineBookmark className=' rounded-full p-2 size-10 text-gray-400' alt="" />
          </div>
        </Link>
        <Link href="/ruqyah">
          <div className="w-10 h-10 bg-dua-bg flex items-center justify-center rounded-full cursor-pointer dark:bg-dark-bg-dark">
          <RiMedicineBottleLine className=' rounded-full p-2 size-10 text-gray-400' alt="" />
          </div>
        </Link>
      </div>
    </footer>
  );
};

export default FixedFooter;