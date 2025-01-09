"use client";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";

// Categories Component
export default function Categories({ categories = [], sub_categories = [] }) {
  const router = useRouter();
  const { cat } = router.query;

  // State to manage search input
  const [searchTerm, setSearchTerm] = useState("");

  // Filter categories based on the search term
  const filteredCategories = categories.filter((category) =>
    category.cat_name_en.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleClick = (queryParams, cat_id) => {
    const baseUrl = "/duas";
    queryParams = queryParams.replace(/\s/g, "-").toLowerCase();
    const completeUrl = `${baseUrl}/${queryParams}?cat=${cat_id}`;
    router.push(completeUrl);
  };

  const handleSubCategoryClick = (subcat_id) => {
    const baseUrl = window.location.href.split('&subcat=')[0];
    const completeUrl = `${baseUrl}&subcat=${subcat_id}`;
    router.push(completeUrl);
  }

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
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Update search term
          className="w-full border border-gray-300 rounded-lg py-2 pl-10 pr-4 focus:ring-2 focus:ring-green-400 focus:outline-none"
        />
        <div className="absolute left-5 top-2">
          <Image className="text-gray-400 text-lg" src="/icon/search.png" width={13} height={13}/>
        </div>
      </div>

      {/* Categories and Subcategories */}
      <div className="overflow-y-auto scrollable-container h-[697px] p-4">
        {filteredCategories.length > 0 ? (
          filteredCategories.map((category) => {
            // Check if the category matches the current query parameter
            const isSelectedCategory = category.cat_id === parseInt(cat);

            // Filter subcategories for the selected category
            const relatedSubcategories = sub_categories.filter(
              (sub_category) => sub_category.cat_id === category.cat_id
            );

            return (
              <div key={category.cat_id}>
                {/* Category */}
                <div
                  className={`flex items-center ${
                    isSelectedCategory ? "bg-[#e9f0f5]" : ""
                  } hover:bg-[#e9f0f5] h-[77px] p-[10px] rounded-[10px] shadow-sm mb-6 cursor-pointer`}
                  onClick={() =>
                    handleClick(category.cat_name_en, category.cat_id)
                  }
                >
                  <Image
                    src="/icon/icon.svg"
                    alt={category.cat_icon}
                    className="size-[40px]"
                    width={13} height={13}
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

                {/* Subcategories (Visible only for the selected category) */}
                {isSelectedCategory && relatedSubcategories.length > 0 ? (
                  <ul className="relative ml-6 pl-4 border-l-2 border-dotted border-green-500">
                    {relatedSubcategories.map((sub_category) => (
                      <li
                        key={sub_category.id}
                        className="relative mb-6 pl-4 cursor-pointer text-gray-700"
                        onClick={() =>(handleSubCategoryClick(sub_category.subcat_id))}
                      >
                        <div className="absolute -left-[20px] top-2 size-[7px] bg-green-500 rounded-full"></div>
                        <p className="text-xs leading-5 font-semibold">
                          {sub_category.subcat_name_en}
                        </p>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            );
          })
        ) : (
          <p className="text-gray-500 text-center">No matching categories found.</p>
        )}
      </div>
    </div>
  );
}
