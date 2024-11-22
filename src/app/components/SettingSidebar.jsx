'use client';

import React, { useState } from 'react';
import { IoMdSettings } from "react-icons/io";

const SettingSidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex justify-end">
            <button
                onClick={toggleSidebar}
                className="p-2 text-green-600 text-2xl rounded-md"
            >
                <IoMdSettings />
            </button>
            <div
                className={`fixed z-50 rounded-tl-[30px] rounded-bl-[30px] top-0 right-0 h-full bg-white shadow-lg transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
                style={{ width: '322px' }}
            >
                <div className="p-4">
                    <h2 className="text-xl h-[87px] text-center flex items-center justify-center font-bold  mb-4">Settings</h2>
                    <div className="mb-4 bg-[#f7f8fa] flex items-center justify-start gap-3 p-3 rounded-md">
                        <img src="/icon/lan.png" className=' bg-green-100 rounded-full p-2' alt="" />
                        <h3 className="text-lg  text-gray-500">Language Settings</h3>
                    </div>
                    <div className="mb-4 flex items-center justify-start gap-3 p-3 rounded-md bg-[#f7f8fa]">
                        <img src="/icon/gen.png" className=' bg-green-100 rounded-full p-2' alt="" />
                        <h3 className="text-lg  text-gray-500">General Settings</h3>
                    </div>
                    <div className="mb-4 flex items-center justify-start gap-3 p-3 rounded-md bg-[#f7f8fa]">
                        <img src="/icon/font.png" className=' bg-green-100 rounded-full p-2' alt="" />
                        <h3 className="text-lg text-gray-500">Font Settings</h3>
                    </div>
                    <div className="mb-4 flex items-center justify-start gap-3 p-3 rounded-md bg-[#f7f8fa]">
                        <img src="/icon/menu.png" className=' bg-green-100 rounded-full p-2' alt="" />
                        <h3 className="text-lg text-green-600">Appearance Settings</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SettingSidebar;
