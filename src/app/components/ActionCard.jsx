import React, { useState } from 'react'
import BookmarkModal from './BookmarkModal';
import Image from 'next/image';
const ActionCard = ({duaArabic,  transliteration ,translation, refference}) => {
    const [copy, setCopy] = useState('Copy');
    const [open, setOpen] = useState(false);
    return (
       <>
        <div className="flex space-x-4 justify-center mt-4">
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
                    <Image src="/icon/copypng.png" alt="Bookmark" width={24} height={24} />
                </button>
                <span className="absolute w-fit px-2 py-1.5 bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-center text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {copy}
                    <span className="absolute top-full left-1/2 transform -translate-x-1/2 border-t-8 border-t-gray-700 border-x-8 border-x-transparent border-b-0"></span>
                </span>
            </div>
            <div className="relative group">
                <button className="text-gray-500 hover:text-gray-700" onClick={() => setOpen(!open)}>
                    <Image src="/icon/bookmark.png" alt="Bookmark" width={24} height={24} />
                </button>
                <span className="absolute w-fit px-2 py-1.5 bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-center text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Bookmark
                    <span className="absolute top-full left-1/2 transform -translate-x-1/2 border-t-8 border-t-gray-700 border-x-8 border-x-transparent border-b-0"></span>
                </span>
            </div>
            <div className="relative group">
                <button className="text-gray-500 hover:text-gray-700">
                    <Image src="/icon/bulb.png" alt="Ideas" width={13} height={13}/>
                    
                </button>
                <span className="absolute w-fit px-2 py-1.5 bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-center text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Memorize
                    <span className="absolute top-full left-1/2 transform -translate-x-1/2 border-t-8 border-t-gray-700 border-x-8 border-x-transparent border-b-0"></span>
                </span>
            </div>
            <div className="relative group">
                <button className="text-gray-500 hover:text-gray-700">
                    <Image src="/icon/share.png" alt="Share" width={13} height={13}/>
                </button>
                <span className="absolute w-fit px-2 py-1.5 bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-center text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Share
                    <span className="absolute top-full left-1/2 transform -translate-x-1/2 border-t-8 border-t-gray-700 border-x-8 border-x-transparent border-b-0"></span>
                </span>
            </div>
            <div className="relative group">
                <button className="text-gray-500 hover:text-gray-700">
                    <Image src="/icon/report.png" alt="Report" width={13} height={13}/>
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
