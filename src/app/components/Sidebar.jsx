import React from "react";
import Image from "next/image";
const icons = ["/icon/home.svg", "/icon/AllDuas.svg", "/icon/Memorize.svg", "/icon/Ruqyah.svg", "/icon/bookmark.svg", "/icon/chat.svg", "/icon/book.svg"]
export default function Sidebar() {
  return (
    <div className=" w-[100px] h-[900px]  hidden overflow-y-scroll mt-6 bg-gray-50 xl:flex flex-col justify-between items-center py-4 shadow-md scrollable-container overflow-hidden">
      {/* Top Icon */}
      <div className="">
        <Image src="/icon/appicon.svg" alt=""    width={24} height={24}/>
      </div>

      {/* Navigation Icons */}
      <div className="flex flex-col space-y-6 py-20">
        {icons.map((icon, index) => (<Image key={index} src={icon} alt={`icon-${index}`} width={23} height={23}/>))}
      </div>

      {/* Bottom Icon */}
      <div className="">
        <Image src="/icon/donation.svg" alt=""   width={24} height={24}/>
      </div>
    </div>
  );
}
