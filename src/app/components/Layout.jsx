import React from "react";
import Categories from "./Categories";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children, categories, sub_categories }) => {
    return (
        <div className="flex bg-[#ebeef2] pt-2 pl-5">
            <Sidebar className="w-1/4  " />
            <div className="flex-1 ">
                <Header />
                <div className="flex items-start justify-between gap-5 bg-[#ebeef2] px-5">
                    {/* Sidebar with Categories */}
                    <Categories categories={categories} sub_categories={sub_categories} />

                    {/* Main Content */}
                    <main className="flex-1">{children}</main>
                </div>
            </div>
        </div>
    );
};

export default Layout;
