"use client";

import { useEffect, useState } from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import MainContent from "./main-content";
import FontSettings from "./font-settings";
import type { Category, Duas } from "@/types";
import LeftNavigation from "./left-navigation";

interface DuaLayoutProps {
  categories: Category[];
  duas: Duas[];
  currentCategory: string;
  categoryId?: number;
}

export default function DuaLayout({
  categories,
  duas,
  currentCategory,
  categoryId,
}: DuaLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [fontSettingsOpen, setFontSettingsOpen] = useState(false);
  const [arabicFontSize, setArabicFontSize] = useState(28);
  const [translationFontSize, setTranslationFontSize] = useState(16);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    const handleChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        setFontSettingsOpen(true);
      } else {
        setFontSettingsOpen(false);
      }
    };

    // Set initial state based on current screen size
    if (mediaQuery.matches) {
      setFontSettingsOpen(true);
    }

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <div className="min-h-screen flex bg-gray-50">
      <LeftNavigation />

      <div className="flex-1 flex flex-col min-h-screen">
        <Header
          onMenuClick={() => setSidebarOpen(!sidebarOpen)}
          onFontSettingsClick={() => setFontSettingsOpen(!fontSettingsOpen)}
        />
        <div className="flex flex-1 h-[calc(100vh-64px)] overflow-hidden">
          <Sidebar
            categories={categories}
            currentCategory={currentCategory}
            isOpen={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
            categoryId={categoryId}
          />

          <MainContent
            duas={duas}
            currentCategory={currentCategory}
            arabicFontSize={arabicFontSize}
            translationFontSize={translationFontSize}
          />

          <FontSettings
            isOpen={fontSettingsOpen}
            onClose={() => setFontSettingsOpen(false)}
            arabicFontSize={arabicFontSize}
            setArabicFontSize={setArabicFontSize}
            translationFontSize={translationFontSize}
            setTranslationFontSize={setTranslationFontSize}
          />
        </div>
      </div>
    </div>
  );
}
