import React from "react";
import Image from "next/image";
const icons = ["/icon/home.svg", "/icon/AllDuas.svg", "/icon/Memorize.svg", "/icon/Ruqyah.svg", "/icon/bookmark.svg", "/icon/chat.svg", "/icon/book.svg"]
export default function Sidebar() {
  return (
    <div className=" w-[100px] shrink-0 h-[900px]  hidden overflow-y-scroll mt-6 bg-gray-50 xl:flex flex-col justify-between items-center py-4 shadow-md scrollable-container overflow-hidden">
      {/* Top Icon */}
      <div className="">
        <Image src="/icon/appicon.svg" alt=""    width={94} height={44}/>
      </div>

      {/* Navigation Icons */}
      <div className="flex flex-col space-y-16 py-20">
        {icons.map((icon, index) => (<Image key={index} src={icon} alt={`icon-${index}`} width={34} height={34}/>))}
      </div>

      {/* Bottom Icon */}
      <div className="">
        <Image src="/icon/donation.svg" alt=""   width={94} height={34}/>
      </div>
    </div>
  );
}
