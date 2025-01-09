'use client';

import React, { useState } from 'react';
import { IoMdSettings } from "react-icons/io";
import RightSidebar from './RightSidebar';

const SettingSidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const closeSidebar = () => {
        setIsOpen(false);
    };

    return (
        <div className="relative flex justify-end">
            <button
                onClick={toggleSidebar}
                className="p-2 text-green-600 text-2xl rounded-md xl:hidden block"
            >
                <IoMdSettings />
            </button>
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={closeSidebar}
                ></div>
            )}
            <div className={` ${isOpen ? 'translate-x-0' : 'translate-x-full'} rounded-bl-[30px] rounded-tl-[30px] fixed z-50 top-0 right-0 shadow-lg transition-transform transform w-[322px] bg-white h-full xl:hidden block `}>
                <RightSidebar />
            </div>
        </div>
    );
};

export default SettingSidebar;
