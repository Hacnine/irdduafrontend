import '../../app/globals.css';
import ContentSection from "../../app/components/ContentSection";
import Sidebar from "../../app/components/Sidebar";
import Categories from "../../app/components/Categories";
import Settings from "../../app/components/Setting";
import '../../index.css'

export default function Home({ categories = [], sub_categories = [] }) {
  return (
    <div className="flex items-start justify-between gap-5 bg-[#ebeef2] p-5">
      {/* <Sidebar />  */}
 
      <Categories categories={categories} sub_categories={sub_categories} />

     <main className="flex-1 p-4">
        <ContentSection />
      </main>
      {/*  <Settings /> */}
    </div>
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
    console.log(duas)
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