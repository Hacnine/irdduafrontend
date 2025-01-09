import React, { useEffect } from "react";
import Categories from "./Categories";
import Sidebar from "./Sidebar";
import Header from "./Header";
import RightSidebar from "./RightSidebar";
import { IoMenuSharp } from "react-icons/io5";
import { useRouter } from "next/router";
import Footer from "./Footer";

const Layout = ({ children, categories, sub_categories }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [title, setTitle] = React.useState('');

    const router = useRouter();
    const pathName = router.asPath.split('/')[2];

    const formattedName = pathName
        .split('?')[0] // Remove query parameters
        .split('-') // Split by hyphen
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
        .join(' '); // Join words with space

    useEffect(() => {
        if (pathName) {
            document.title = `${formattedName} | IRD Dua`;
            setTitle(formattedName);
        }
    }, [router]);

    return (
        <div className="flex bg-[#ebeef2] pt-2 pl-5 h-[1123px]">
            {/* Sidebar */}
            <Sidebar className="w-1/4 " />

            {/* Content Area */}
            <div className="flex-1 flex flex-col h-full">
                {/* <Header /> */}
                <Header />
                <div className="flex items-start justify-between gap-5 bg-[#ebeef2] px-5 h-full">
                    {isOpen && (
                        <div
                            className="fixed inset-0 bg-black bg-opacity-50 z-40"
                            onClick={() => setIsOpen(false)}
                        ></div>
                    )}
                    <div className={` ${isOpen ? 'translate-x-9' : '-translate-x-full'} rounded-br-[30px] rounded-tr-[30px] fixed z-50 top-0 -left-10 shadow-lg transition-transform transform w-[322px] bg-white h-full`}>
                        <div className="h-full w-[350px] flex-shrink-0">
                            <Categories categories={categories} sub_categories={sub_categories} />
                        </div>
                    </div>

                    <div className="h-full w-[350px] lg:block hidden  flex-shrink-0">
                        <Categories categories={categories} sub_categories={sub_categories} />
                    </div>

                    <main className="flex-1 overflow-y-auto h-full ">
                        <button className="mb-4 lg:hidden block bg-white rounded-lg p-3 w-full" onClick={() => setIsOpen(!isOpen)}>
                            <h3 className="text-base text-gray-600 font-semibold flex items-center gap-2">
                                <span className=""><IoMenuSharp className='text-2xl' /></span>{title? title : 'IRD Dua'}
                            </h3>
                        </button>
                        {children}
                    </main>
                    <div className="hidden xl:flex items-start justify-between gap-5 bg-white px-5 h-[837px] width-[322px] rounded-[30px] sticky top-0">
                        <RightSidebar />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Layout;