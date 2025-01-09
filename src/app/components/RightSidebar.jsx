import Image from 'next/image'
import React from 'react'
import { HiLanguage } from "react-icons/hi2";
import { HiOutlineInboxStack } from "react-icons/hi2";
;import { AiOutlineFontSize } from "react-icons/ai";
import { HiOutlineViewGrid } from "react-icons/hi";

const RightSidebar = () => {
    return (
        <div className="px-4 text-sm h-full ">
            <h2 className="text-xl h-[87px] text-center flex items-center justify-center font-bold mb-4">Settings</h2>
            <div className="mb-4 bg-[#f7f8fa] flex items-center justify-start gap-3 p-3 rounded-md">
                <HiLanguage className='bg-green-100 rounded-full p-2 size-10 text-gray-400' alt="" />
                <h3 className=" text-gray-500">Language Settings</h3>
            </div>
            <div className="mb-4 flex items-center justify-start gap-3 p-3 rounded-md bg-[#f7f8fa]">
                <HiOutlineInboxStack className='bg-green-100 rounded-full p-2 size-10 text-gray-400' alt="" />
                <h3 className=" text-gray-500">General Settings</h3>
            </div>
            <div className="mb-4 flex items-center justify-start gap-3 p-3 rounded-md bg-[#f7f8fa]">
            <AiOutlineFontSize className='bg-green-100 rounded-full p-2 size-10 text-gray-400' alt="" />
                <h3 className=" text-gray-500">Font Settings</h3>
            </div>
            <div className="mb-4 flex items-center justify-start gap-3 p-3 rounded-md bg-[#f7f8fa]">
            <HiOutlineViewGrid className='bg-green-100 rounded-full p-2 size-10 text-gray-400' alt="" />
                <h3 className=" text-green-600">Appearance Settings</h3>
            </div>

            <div className="mb-4 flex items-center justify-start gap-3 p-3 rounded-md bg-[#f7f8fa]">
                <h3 className="text-base text-black">Night Mode</h3>
                <label className="inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
            </div>
        </div>
    )
}

export default RightSidebar
