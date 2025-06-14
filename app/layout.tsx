import type React from "react";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "@/redux/Provider";
const inter = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});
export const metadata = {
  title: "Dua-Ruqiah",
  description: "Islamic Duas and Ruqyah collection from Hisnul Muslim",
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
