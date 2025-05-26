import type { Metadata } from "next"
import DuaLayout from "@/components/dua-layout"
import { getDuaCategories, getDuasByCategory } from "@/lib/api"

export const metadata: Metadata = {
  title: "Dua & Ruqyah - Hisnul Muslim",
  description: "Islamic Duas and Ruqyah collection from Hisnul Muslim",
}

export default async function HomePage() {
  const categories = await getDuaCategories()
  const duas = await getDuasByCategory("dua-importance")

  return <DuaLayout categories={categories} duas={duas} currentCategory="dua-importance" />
}

// Enable SSG
export const dynamic = "force-static"
