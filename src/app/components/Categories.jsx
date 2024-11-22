"use client"

import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

// Categories Component
export default function Categories({ categories = [], sub_categories = [] }) {
  const router = useRouter();
  const link = usePathname();
  return (
    <div className="bg-white overflow-clip shadow-md w-[350px] mx-auto h-[837px] rounded-[10px]">
      {/* Header */}
      <h2 className="text-[17px] text-center text-white mb-4 bg-green-600 h-[57px] py-4">
        Categories
      </h2>

      {/* Search Bar */}
      <div className="relative mb-4 px-3">
        <input
          type="text"
          placeholder="Search by Categories"
          className="w-full border border-gray-300 rounded-lg py-2 pl-10 pr-4 focus:ring-2 focus:ring-green-400 focus:outline-none"
        />
        <FaSearch className="absolute left-5 top-3 text-gray-400 text-lg" />
      </div>

      {/* Categories and Subcategories */}
      <div className="overflow-y-auto scrollable-container h-[697px] p-4">
        {categories.length > 0 ? (
          categories.map((category) => {
            // Filter subcategories for the current category
            const relatedSubcategories = sub_categories.filter(
              (sub_category) => sub_category.cat_id === category.cat_id
            );

            return (
              <div key={category.id}>
                {/* Category */}
                <div className="flex items-center hover:bg-[#e9f0f5] h-[77px] p-[10px] rounded-[10px] shadow-sm mb-6 cursor-pointer"
                 onClick={() => {
                  router.replace(category.cat_name_en);
                }}
                >
                    <img
                      src="/icon/icon.svg"
                      alt={category.cat_icon}
                      className="size-[40px]"
                    />
                  <div className="ml-4 flex-1">
                    <h3 className="text-base font-bold text-green-600">
                      {category.cat_name_en}
                    </h3>
                    <p className="text-sm text-[#7E7E7E]">
                      Subcategory: {category.no_of_subcat}
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-[16px] font-bold text-gray-700">
                      {category.no_of_dua}
                    </p>
                    <p className="text-[14px] text-gray-500">Duas</p>
                  </div>
                </div>

                {/* Subcategories */}
                {relatedSubcategories.length > 0 ? (
                  <ul className="relative ml-6 pl-4 border-l-2 border-dotted border-green-500">
                    {relatedSubcategories.map((sub_category) => (
                      <li
                        key={sub_category.id}
                        className="relative mb-6 pl-4 cursor-pointer text-gray-700"
                      >
                        <div className="absolute -left-[20px] top-2 size-[7px] bg-green-500 rounded-full"></div>
                        <p className="text-xs leading-5 font-semibold">{sub_category.subcat_name_en}</p>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-500 text-center text-sm">
                    No subcategories available.
                  </p>
                )}
              </div>
            );
          })
        ) : (
          <p className="text-gray-500 text-center">No categories available.</p>
        )}
      </div>
    </div>
  );
}
