import ContentSection from "@/app/components/ContentSection";
import Layout from "@/app/components/Layout";

export default function Home({ categories, sub_categories, duas }) {
  return (
    <Layout categories={categories} sub_categories={sub_categories}>
      <div>
        <ContentSection duas={duas}/>
      </div>
    </Layout>
  );
}


export async function getStaticProps() {
  try {
    // Fetch data from the API using fetch
    const res = await fetch("http://localhost:3001/categories");
    const res_sub = await fetch("http://localhost:3001/subcategories");
    const res_duas = await fetch("http://localhost:3001/duas");

    if (!res.ok) {
      throw new Error("Failed to fetch categories");
    }

    if (!res_sub.ok) {
      throw new Error("Failed to fetch sub_categories");
    }

    if (!res_duas.ok) {
      throw new Error("Failed to fetch duas");
    }

    const data = await res.json();
    const sub_data = await res_sub.json();
    const duas = await res_duas.json();
    // console.log(data)
    // Pass categories as props to the component
    return {
      props: {
        categories: data,
        sub_categories: sub_data,
        duas: duas
      },
    };
  } catch (error) {
    console.error("Error fetching categories:", error);

    // Pass empty categories array on error
    return {
      props: {
        categories: [],
        sub_categories: [],
        duas: []
      },
    };
  }
}