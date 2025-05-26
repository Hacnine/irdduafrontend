import type { Metadata } from "next"
import DuaLayout from "@/components/dua-layout"
import { getDuaCategories, getDuasByCategory, getAllCategorySlugs } from "@/lib/api"
import { notFound } from "next/navigation"

interface PageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const slugs = await getAllCategorySlugs()
  return slugs.map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const categories = await getDuaCategories()
  const category = categories.find((cat) => cat.slug === params.slug)

  return {
    title: `${category?.name || "Category"} - Dua & Ruqyah`,
    description: `Islamic Duas for ${category?.name || "this category"}`,
  }
}

export default async function CategoryPage({ params }: PageProps) {
  const categories = await getDuaCategories()
  const duas = await getDuasByCategory(params.slug)

  if (!duas.length) {
    notFound()
  }

  return <DuaLayout categories={categories} duas={duas} currentCategory={params.slug} />
}

export const dynamic = "force-static"
