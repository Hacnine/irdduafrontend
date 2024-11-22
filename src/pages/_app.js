// src/pages/_app.js
import "../index.css";
import "../app/globals.css";
import Layout from "../app/components/Layout";

function MyApp({ Component, pageProps, categories, sub_categories }) {
  return (
    <Layout categories={categories} sub_categories={sub_categories}>
      <Component {...pageProps} />
    </Layout>
  );
}

export async function getStaticProps() {
  try {
    const [categoriesRes, subcategoriesRes] = await Promise.all([
      fetch("http://localhost:3001/categories"),
      fetch("http://localhost:3001/subcategories"),
    ]);

    if (!categoriesRes.ok || !subcategoriesRes.ok) {
      throw new Error("Failed to fetch data");
    }

    const categories = await categoriesRes.json();
    const sub_categories = await subcategoriesRes.json();
console.log(sub_categories)
    return {
      props: {
        categories,
        sub_categories,
      },
    };
  } catch (error) {
    console.error(error);

    return {
      props: {
        categories: [],
        sub_categories: [],
      },
    };
  }
}

export default MyApp;
