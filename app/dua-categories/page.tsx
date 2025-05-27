"use client"
import type { Metadata } from "next"
import DuaLayout from "@/components/dua-layout"
import {
  useGetCategoriesQuery,
  useGetDuasQuery,
  useGetSubCategoriesQuery,
} from "@/redux/services/duaApi";



export default function HomePage() {
  // const categories = await getDuaCategories()
  // const duas = await getDuasByCategory("dua-importance")
  const { data:categoriesData = [], isFetching } = useGetCategoriesQuery();

  const { data: duas = [], isFetching: duaFetiching } = useGetDuasQuery();
  // console.log(categoriesData);

  return <DuaLayout categories={categoriesData} duas={duas} currentCategory="dua-importance" />
}

// Enable SSG
export const dynamic = "force-static"
