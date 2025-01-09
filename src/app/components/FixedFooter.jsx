import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const FixedFooter = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-white pb-6 mt-6 rounded-t-[3rem] shadow-top dark:bg-dark-bg hidden md:block lg:block">
      <div className="px-6 pt-6 flex justify-between">
        <Link href="/">
          <div className="w-10 h-10 bg-dua-bg flex items-center justify-center rounded-full cursor-pointer dark:bg-dark-bg-dark">
            <Image src="/assets/nav/home.svg" alt="Home" width={24} height={24} />
          </div>
        </Link>
        <Link href="/alldua">
          <div className="w-10 h-10 bg-dua-bg flex items-center justify-center rounded-full cursor-pointer dark:bg-dark-bg-dark">
            <Image src="/assets/nav/alldua.svg" alt="All Dua" width={24} height={24} />
          </div>
        </Link>
        <Link href="/memorize">
          <div className="w-10 h-10 bg-dua-bg flex items-center justify-center rounded-full cursor-pointer dark:bg-dark-bg-dark">
            <Image src="/assets/nav/memorize.svg" alt="Memorize" width={24} height={24} />
          </div>
        </Link>
        <Link href="/bookmark">
          <div className="w-10 h-10 bg-dua-bg flex items-center justify-center rounded-full cursor-pointer dark:bg-dark-bg-dark">
            <Image src="/assets/nav/bookmark.svg" alt="Bookmark" width={24} height={24} />
          </div>
        </Link>
        <Link href="/ruqyah">
          <div className="w-10 h-10 bg-dua-bg flex items-center justify-center rounded-full cursor-pointer dark:bg-dark-bg-dark">
            <Image src="/assets/nav/ruqyah.svg" alt="Ruqyah" width={24} height={24} />
          </div>
        </Link>
      </div>
    </footer>
  );
};

export default FixedFooter;