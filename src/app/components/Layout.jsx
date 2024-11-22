import React from "react";
import Categories from "./Categories";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = ({ children, categories, sub_categories }) => {
    return (
        <div className="flex bg-[#ebeef2] pt-2 pl-5 h-[1123px]">
            {/* Sidebar */}
            <Sidebar className="w-1/4" />

            {/* Content Area */}
            <div className="flex-1 flex flex-col h-full">
                <Header/>
                <div className="flex items-start justify-between gap-5 bg-[#ebeef2] px-5 h-full  ">
                    {/* Categories Section */}
                    <div className="h-full w-[350px]  flex-shrink-0">
                        <Categories categories={categories} sub_categories={sub_categories} />
                    </div>

                    {/* Main Content Section */}
                    <main className="flex-1 overflow-y-auto h-full">
                        {children}
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Layout;
