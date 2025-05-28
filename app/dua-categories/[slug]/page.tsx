import CategoryPage from "@/components/CategoryPage";
import type { Metadata, ResolvingMetadata } from "next";

export async function generateStaticParams() {
  const res = await fetch(`https://irdduabackend.onrender.com/categories`);
  const categories = await res.json();

  return categories.map((cat: any) => ({
    slug: cat.cat_name_en
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-"),
  }));
}

// DYNAMIC TITLE
export async function generateMetadata(
  props: { params: { slug: string } },
  parent?: ResolvingMetadata
): Promise<Metadata> {
  const { params } = await props;
  const res = await fetch(`https://irdduabackend.onrender.com/categories`);
  const categories = await res.json();
  const slug = await params.slug;
  const category = categories.find(
    (cat: any) =>
      cat.cat_name_en &&
      cat.cat_name_en
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .trim()
        .replace(/\s+/g, "-") === slug
  );

  return {
    title: category
      ? `${category.cat_name_en} | Dua & Ruqyah`
      : "Dua & Ruqyah",
    description: category
      ? `Islamic Duas for ${category.cat_name_en}`
      : "Islamic Duas and Ruqyah collection from Hisnul Muslim",
  };
}

export default function Page() {
  return <CategoryPage />;
}