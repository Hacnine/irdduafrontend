"use client";

import { useState } from "react";
import { Search, ChevronDown, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import type { Category } from "@/types";
import Link from "next/link";
import Image from "next/image"; // ✅ Needed to render SVG icons
import { useGetSubCategoriesByCategoryIdQuery } from "@/redux/services/duaApi";
import { useRouter } from "next/navigation";
interface SidebarProps {
  categories: Category[];
  currentCategory: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({
  categories,
  currentCategory,
  isOpen,
  onClose,
}: SidebarProps) {
  // console.log(categories)
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const [expandedCategories, setExpandedCategories] = useState<number[]>([]);
  const [activeCategoryId, setActiveCategoryId] = useState<number | null>(null);

  const toggleCategory = (catId: number) => {
    setExpandedCategories((prev) =>
      prev.includes(catId)
        ? prev.filter((id) => id !== catId)
        : [...prev, catId]
    );
    setActiveCategoryId(catId);
  };

  const { data: subcategories = [], isFetching } =
    useGetSubCategoriesByCategoryIdQuery(activeCategoryId!, {
      skip: activeCategoryId === null,
    });
  const filteredCategories = categories?.filter(
    (category) =>
      category?.cat_name_bn?.includes(searchQuery) ||
      category?.cat_name_en?.toLowerCase().includes(searchQuery.toLowerCase())
  );
  console.log(filteredCategories);
  const categoryIcons = [
    "/category/duas.svg",
    "/category/Adhan.svg",
    "/category/tasbih.svg",
    "/category/bedug.svg",
    "/category/calendar.svg",
  ];

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-80 bg-white border-r border-gray-200 
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        flex flex-col h-screen lg:h-[calc(100vh-73px)] lg:top-[73px]`}
      >
        <div className="p-5">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search by Dua Categories"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-gray-200 rounded-full border border-[#E1EBE1] text-sm h-10 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors placeholder:text-gray-500"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="p-4 space-y-4">
            {filteredCategories.map((category, categoryIndex) => (
              <div
                key={category.cat_id}
                className="space-y-2 cursor-pointer"
                onClick={() => {
                  toggleCategory(category.cat_id);
                  const formattedName = category.cat_name_en
                    .toLowerCase()
                    .replace(/\s+/g, "-")
                    .replace(/['"]/g, "");

                  router.replace(`/dua-categories/${formattedName}`, {
                    scroll: false,
                    shallow: true,
                  });
                }}
              >
                <div className="flex items-center gap-3 p-3">
                  <div className="w-10 h-10 bg-[#e1ebe1] hover:bg-gray-50 transition-colors rounded-[15px] flex items-center justify-center">
                    <Image
                      src={categoryIcons[categoryIndex % categoryIcons.length]}
                      alt="icon"
                      width={28}
                      height={28}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900 text-sm">
                      {category.cat_name_en}
                    </h3>
                    <p className="text-xs text-gray-500">
                      {category?.no_of_subcat || 0} Subcat |{" "}
                      {category?.no_of_dua} Duas
                    </p>
                  </div>
                  <Button variant="ghost" size="sm" className="p-1 h-6 w-6">
                    {expandedCategories.includes(category.cat_id) ? (
                      <ChevronDown className="h-4 w-4 text-gray-400" />
                    ) : (
                      <ChevronRight className="h-4 w-4 text-gray-400" />
                    )}
                  </Button>
                </div>

                {expandedCategories.includes(category.cat_id) && (
                  <div className="ml-4 space-y-1">
                    {isFetching ? (
                      <p className="text-sm text-gray-400">Loading...</p>
                    ) : (
                      subcategories?.map((subcategory, subIndex) => (
                        <div
                          key={subcategory.subcat_id}
                          className="flex items-start gap-3"
                        >
                          <div className="flex flex-col items-center pt-2">
                            <div className="w-3 h-3 border-2 border-gray-300 rounded-full bg-white"></div>
                            {subIndex < subcategories.length - 1 && (
                              <div className="w-px h-8 bg-gray-200 mt-1"></div>
                            )}
                          </div>

                          <Link
                            href={`/category/${subcategory.subcat_id}`}
                            className={`flex-1 px-3 py-2 text-sm rounded-md transition-colors ${
                              Number(currentCategory) === subcategory.subcat_id
                                ? "bg-green-50 text-green-700 font-medium"
                                : "text-gray-600 hover:bg-gray-50"
                            }`}
                            onClick={onClose}
                          >
                            {subcategory.subcat_name_en}
                          </Link>
                        </div>
                      ))
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
}
