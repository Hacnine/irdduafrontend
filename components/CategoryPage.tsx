"use client";

import { useEffect, useMemo } from "react";
import { useParams, notFound } from "next/navigation";

import DuaLayout from "@/components/dua-layout";
import {
  useGetCategoriesQuery,
  useGetDuasByCategoryIdQuery,
} from "@/redux/services/duaApi";
import { Category, Duas } from "@/types";

const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

export default function CategoryPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const { data: categories = [], isLoading: loadingCategories } =
    useGetCategoriesQuery();

  const selectedCategory = useMemo(() => {
    return categories.find((cat) => slugify(cat.cat_name_en) === slug);
  }, [categories, slug]);

  const catId = selectedCategory?.cat_id;
  const { data: duas = [], isLoading: loadingDuas } =
    useGetDuasByCategoryIdQuery(catId!, {
      skip: !catId,
    });

  useEffect(() => {
    if (!loadingCategories && !selectedCategory) {
      notFound();
    }
  }, [loadingCategories, selectedCategory]);

  if (loadingCategories || loadingDuas)
    return (
      <p className="text-sm h-screen w-screen flex items-center justify-center text-gray-400">
        Loading...
      </p>
    );
  return (
    <DuaLayout
      categories={categories}
      duas={duas}
      currentCategory={slug}
      categoryId={catId}
    />
  );
}
