import CategoryPage from "@/components/CategoryPage"

export async function generateStaticParams() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories`)
  const categories = await res.json()

  return categories.map((cat: any) => ({
    slug: cat.cat_name_en
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-"),
  }))
}

export default function Page() {
  return <CategoryPage />
}
