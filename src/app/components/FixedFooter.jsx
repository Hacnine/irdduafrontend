import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const FixedFooter = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-white pb-6 mt-6 rounded-t-[3rem] shadow-md shadow-gray-600 xl:hidden block ">
      <div className="px-6 pt-6 flex justify-between">
        <Link href="/">
          <div className="w-10 h-10 bg-dua-bg flex items-center justify-center rounded-full cursor-pointer dark:bg-dark-bg-dark">
            <Image src="/icon/home.svg" alt="Home" width={34} height={34} />
          </div>
        </Link>
        <Link href="/alldua">
          <div className="w-10 h-10 bg-dua-bg flex items-center justify-center rounded-full cursor-pointer dark:bg-dark-bg-dark">
            <Image src="/icon/AllDuas.svg" alt="All Dua" width={34} height={34} />
          </div>
        </Link>
        <Link href="/memorize">
          <div className="w-10 h-10 bg-dua-bg flex items-center justify-center rounded-full cursor-pointer dark:bg-dark-bg-dark">
            <Image src="/icon/memorize.svg" alt="Memorize" width={34} height={34} />
          </div>
        </Link>
        <Link href="/bookmark">
          <div className="w-10 h-10 bg-dua-bg flex items-center justify-center rounded-full cursor-pointer dark:bg-dark-bg-dark">
            <Image src="/icon/bookmark.svg" alt="Bookmark" width={34} height={34} />
          </div>
        </Link>
        <Link href="/ruqyah">
          <div className="w-10 h-10 bg-dua-bg flex items-center justify-center rounded-full cursor-pointer dark:bg-dark-bg-dark">
            <Image src="/icon/ruqyah.svg" alt="Ruqyah" width={34} height={34} />
          </div>
        </Link>
      </div>
    </footer>
  );
};

export default FixedFooter;