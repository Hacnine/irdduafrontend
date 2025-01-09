import React from "react";
import SettingSidebar from "./SettingSidebar";
import Image from "next/image";


const Header = () => {
  return (
    <header className="flex items-center bg-transparent justify-between p-4  ">
      {/* Title */}
      <h1 className="text-2xl font-semibold pl-2">Duas Page</h1>

      {/* Search Bar */}
      <div className=" flex items-center justify-center gap-24">
      <div className="md:flex bg-white w-[352px] h-[48px] border border-gray-300 focus:border-2 ring-transparent outline-none rounded-md items-center space-x-2 p-1  hidden lg:mr-36">
        <input
          type="text"
          placeholder="Search by Dua Name"
          className="px-3 w-full py-2  rounded-md focus:outline-none focus: focus:ring-tranparent"
        />
        <div className=" rounded flex items-center justify-center bg-[#f2f3f5]  w-[54px] h-[40px]">
        <Image src="/icon/search.png" alt="" width={24} height={24} />
        </div>
        

      </div>

      {/* Profile and Settings */}
      <div className="relative flex items-center space-x-4">
        <Image
          src="/icon/profile.svg"
          alt="Profile"
          className="size-14 rounded-full cursor-pointer"
          width={24} height={24}
        />
        <SettingSidebar/>
      
      </div>
      </div>
    </header>
  );
};

export default Header;
