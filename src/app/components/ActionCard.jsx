import React, { useState } from 'react'
import BookmarkModal from './BookmarkModal';
import { PiLightbulbFilament } from "react-icons/pi";
import { HiOutlineBookmark } from "react-icons/hi2";
import { IoCopyOutline } from "react-icons/io5";
import { IoShareSocial } from "react-icons/io5";
import { MdReportGmailerrorred } from "react-icons/md";

const ActionCard = ({ duaArabic, transliteration, translation, refference }) => {
    const [copy, setCopy] = useState('Copy');
    const [open, setOpen] = useState(false);
    return (
        <>
            <div className="flex gap-4 justify-center ml-16 mt-4  ">
                <div className="relative group" onClick={() => {
                    const textToCopy = `
                        ${duaArabic}
                        ${transliteration ? `Transliteration: ${transliteration}` : ''}
                        ${translation ? `Translation: ${translation}` : ''}
                        Reference: ${refference}
                    `;
                    navigator.clipboard.writeText(textToCopy.trim());
                    setCopy('Copied!');
                    setTimeout(() => setCopy('Copy'), 2000); // Reset after 2 seconds
                }}>
                    <button className="text-gray-500 hover:text-gray-700">
                        <IoCopyOutline className=' rounded-full p-2 size-10 text-gray-600' alt="" />
                    </button>
                    <span className="absolute w-fit px-2 py-1.5 bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-center text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {copy}
                        <span className="absolute top-full left-1/2 transform -translate-x-1/2 border-t-8 border-t-gray-700 border-x-8 border-x-transparent border-b-0"></span>
                    </span>
                </div>
                <div className="relative group">
                    <button className="text-gray-500 hover:text-gray-700" onClick={() => setOpen(!open)}>
                        <HiOutlineBookmark className=' rounded-full p-2 size-10 text-gray-600' alt="" />

                    </button>
                    <span className="absolute w-fit px-2 py-1.5 bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-center text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Bookmark
                        <span className="absolute top-full left-1/2 transform -translate-x-1/2 border-t-8 border-t-gray-700 border-x-8 border-x-transparent border-b-0"></span>
                    </span>
                </div>
                <div className="relative group">
                    <button className="text-gray-500 hover:text-gray-700">
                        <PiLightbulbFilament className=' rounded-full p-2 size-10 text-gray-600' alt="" />

                    </button>
                    <span className="absolute w-fit px-2 py-1.5 bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-center text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Memorize
                        <span className="absolute top-full left-1/2 transform -translate-x-1/2 border-t-8 border-t-gray-700 border-x-8 border-x-transparent border-b-0"></span>
                    </span>
                </div>
                <div className="relative group">
                    <button className="text-gray-500 hover:text-gray-700">
                        <IoShareSocial className=' rounded-full p-2 size-10 text-gray-600' alt="" />
                    </button>
                    <span className="absolute w-fit px-2 py-1.5 bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-center text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Share
                        <span className="absolute top-full left-1/2 transform -translate-x-1/2 border-t-8 border-t-gray-700 border-x-8 border-x-transparent border-b-0"></span>
                    </span>
                </div>
                <div className="relative group">
                    <button className="text-gray-500 hover:text-gray-700">
                        <MdReportGmailerrorred className=' text-nowrap text-lg rounded-full p-2 size-10 text-gray-600' alt="" />
                    </button>
                    <span className="absolute w-fit px-2 py-1.5 bottom-10 left-1/2 transform -translate-x-1/2  bg-gray-700 text-white text-center text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Report
                        <span className="absolute top-full left-1/2 transform -translate-x-1/2 border-t-8 border-t-gray-700 border-x-8 border-x-transparent border-b-0"></span>
                    </span>
                </div>
            </div>
            <div>
                <BookmarkModal open={open} setOpen={setOpen} />
            </div>
        </>
    )
}

export default ActionCard
