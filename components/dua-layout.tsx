"use client";

import { useState } from "react";
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
}

export default function DuaLayout({
  categories,
  duas,
  currentCategory,
}: DuaLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [fontSettingsOpen, setFontSettingsOpen] = useState(false);
  const [arabicFontSize, setArabicFontSize] = useState(28);
  const [translationFontSize, setTranslationFontSize] = useState(16);

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
