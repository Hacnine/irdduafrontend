import BottomNav from "./FixedFooter";

export default function Footer() {
    return (
      <>
      <BottomNav/>
      <footer id="footer" className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Dua Ruqyah. All Rights Reserved.</p>
          <p className="text-sm">Contact us at <a href="mailto:info@duaruqyah.com" className="underline">info@duaruqyah.com</a></p>
        </div>
      </footer>
      </>
    );
  }
  