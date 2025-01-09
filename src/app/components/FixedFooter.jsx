import React from 'react';

const BottomNav = () => {
  return (
    <div className="lg:hidden block fixed bottom-0 z-0 w-full bg-white pb-6 mt-6 rounded-t-[3rem] shadow-top dark:bg-dark-bg  shadow-lg shadow-black">
      <div className="px-6 pt-6 flex justify-between">
        <a href="/">
          <div className="w-10 h-10 bg-dua-bg flex items-center justify-center rounded-full cursor-pointer dark:bg-dark-bg-dark">
            <img src="/icon/home.svg" alt="Home" />
          </div>
        </a>
        <a href="/alldua">
          <div className="w-10 h-10 bg-dua-bg flex items-center justify-center rounded-full cursor-pointer dark:bg-dark-bg-dark">
            <img src="/icon/AllDuas.svg" alt="All Dua" />
          </div>
        </a>
        <a href="/memorize">
          <div className="w-10 h-10 bg-dua-bg flex items-center justify-center rounded-full cursor-pointer dark:bg-dark-bg-dark">
            <img src="/icon/memorize.svg" alt="Memorize" />
          </div>
        </a>
        <a href="/bookmark">
          <div className="w-10 h-10 bg-dua-bg flex items-center justify-center rounded-full cursor-pointer dark:bg-dark-bg-dark">
            <img src="/icon/bookmark.svg" alt="Bookmark" />
          </div>
        </a>
        <a href="/ruqyah">
          <div className="w-10 h-10 bg-dua-bg flex items-center justify-center rounded-full cursor-pointer dark:bg-dark-bg-dark">
            <img src="/icon/ruqyah.svg" alt="Ruqyah" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default BottomNav;