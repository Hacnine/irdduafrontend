"use client"

import { ChevronRight, Bookmark, Share, Copy, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Dua } from "@/types"

interface MainContentProps {
  duas: Dua[]
  currentCategory: string
  arabicFontSize: number
  translationFontSize: number
}

export default function MainContent({ duas, currentCategory, arabicFontSize, translationFontSize }: MainContentProps) {
  const categoryName = duas[0]?.categoryName || "Dua Category"
  const sectionTitle = duas[0]?.sectionTitle || "The servant is dependent on his Lord"

  return (
   <main className="flex-1 h-full max-h-screen overflow-y-auto w-full mx-auto py-6 px-[100px] bg-white">

      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <span>Home</span>
        <ChevronRight className="h-4 w-4" />
        <span>{categoryName}</span>
        <ChevronRight className="h-4 w-4" />
        <span className="text-gray-900">The servant is dependent...</span>
      </nav>

      <div className="mb-8">
        <h1 className="text-xl font-semibold text-gray-900 mb-2">
          <span className="text-green-600">Section:</span> {sectionTitle}
        </h1>
      </div>

      <div className="space-y-8 flex-1 overflow-y-auto">
        {duas.map((dua, index) => (
          <div key={dua.id} className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-start gap-3 mb-6">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 text-sm font-medium">{index + 1}</span>
              </div>
              <h2 className="text-lg font-medium text-gray-900 leading-relaxed">{dua.title}</h2>
            </div>

            <div className="mb-6 text-right">
              <p
                className="text-gray-900 leading-relaxed font-arabic"
                style={{ fontSize: `${arabicFontSize}px` }}
                dir="rtl"
              >
                {dua.arabicText}
              </p>
            </div>

            <div className="mb-4">
              <p className="text-gray-600 italic leading-relaxed">{dua.transliteration}</p>
            </div>

            <div className="mb-6">
              <h3 className="font-medium text-gray-900 mb-2">Translation</h3>
              <p className="text-gray-700 leading-relaxed" style={{ fontSize: `${translationFontSize}px` }}>
                {dua.translation}
              </p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div>
                <p className="text-sm text-gray-500 mb-1">Reference</p>
                <p className="text-sm font-medium text-gray-900">{dua.reference}</p>
              </div>

              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Bookmark className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Share className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Copy className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}



