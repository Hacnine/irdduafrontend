import React from "react";

const icons = ["/icon/home.svg", "/icon/AllDuas.svg", "/icon/Memorize.svg", "/icon/Ruqyah.svg", "/icon/bookmark.svg", "/icon/chat.svg", "/icon/book.svg"]
export default function Sidebar() {
  return (
    <div className=" w-[100px] h-[633px]  hidden overflow-y-scroll mt-6 bg-gray-50 xl:flex flex-col justify-between items-center py-4 shadow-md scrollable-container overflow-hidden">
      {/* Top Icon */}
      <div className="">
        <img src="/icon/appicon.svg" alt="" />
      </div>

      {/* Navigation Icons */}
      <div className="flex flex-col space-y-6 py-20">
        {icons.map((icon, index) => (<img key={index} src={icon} alt={`icon-${index}`} />))}
      </div>

      {/* Bottom Icon */}
      <div className="">
        <img src="/icon/donation.svg" alt="" />
      </div>
    </div>
  );
}
