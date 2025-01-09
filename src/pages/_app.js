import "../index.css";
import "../app/globals.css";
import Footer from "@/app/components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
