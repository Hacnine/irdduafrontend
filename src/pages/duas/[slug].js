
import ContentSection from "@/app/components/ContentSection"; // Assuming you have this component
import Layout from "@/app/components/Layout"; // Sidebar layout component

export default function DuaPage({ duas, categories, sub_categories, filteredSubCategories }) {


  return (
    <Layout categories={categories} sub_categories={sub_categories}>
      <div>
        {/* Pass the dua data to the content section */}
        <ContentSection duas={duas} filteredSubCategories={filteredSubCategories} />
      </div>
    </Layout>
  );
}

// Fetching data for the specific category based on `cat` query parameter
export async function getServerSideProps({ query }) {
  const { cat } = query; // The `cat` value from the query parameter

  try {
    const duasRes = await fetch('http://localhost:3001/duas');

    if (!duasRes.ok) {
      throw new Error('Failed to fetch duas data');
    }

    const allDuas = await duasRes.json();

    const filteredDuas = allDuas.filter((dua) => dua.cat_id === parseInt(cat, 10));

    const categoriesRes = await fetch('http://localhost:3001/categories');
    const subcategoriesRes = await fetch('http://localhost:3001/subcategories');

    const categories = await categoriesRes.json();
    const sub_categories = await subcategoriesRes.json();

    const filteredSubCategories = sub_categories.filter((category)=> category.cat_id === parseInt(cat, 10));
    console.log(filteredSubCategories)

    return {
      props: {
        duas: filteredDuas,
        categories,
        sub_categories,
        filteredSubCategories
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);

    // Return empty data if an error occurs
    return {
      props: {
        duas: [],
        categories: [],
        sub_categories: [],
        filteredSubCategories: []
      },
    };
  }
}
