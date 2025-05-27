"use client"

import { ChevronRight, Bookmark, Share, Copy, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Dua } from "@/types"
import Image from "next/image"

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
   <main className="flex-1 h-full max-h-screen overflow-y-auto w-full mx-auto   bg-white">

      <nav className="flex items-center gap-2  h-[46px] 2xl:px-[100px] text-xs  px-[3%] bg-[#e1ebe1] text-gray-500">
        <Image src={"/icon/home.svg"} alt="Logo" width={18} height={18} />
        <span className="font-medium text-[var(--desaturated-green)]">Home</span>
        <ChevronRight className="h-4 w-4 font-medium text-[var(--desaturated-green)]" />
        <span className="font-medium text-[var(--desaturated-green)]">{categoryName}</span>
        <ChevronRight className="h-4 w-4" />
        <span className="text-[#7C827D]">The servant is dependent...</span>
      </nav>

      <div className="mb-8 2xl:px-[100px] bg-[#eef6eb] flex items-center  h-[68px] px-[3%]">
        <h1 className=" text-base ">
          <span className="font-semibold text-[var(--desaturated-green)]">Section:</span> {sectionTitle}
        </h1>
      </div>

      <div className="space-y-8 flex-1 overflow-y-auto 2xl:px-[100px]   ">
        {duas.map((dua, index) => (
          <div key={dua.id} className="bg-white rounded-lg -mt-8 px-6 pb-6 border-b border-gray-200 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src={ "/icon/mark.svg"}
                alt={dua.title}
                width={28}
                height={28}
                className="rounded-full flex-shrink-0"
              />
              <h2 className="text-base font-medium text-[var(--desaturated-green)] leading-relaxed"> <span className="">{index + 1}.</span> {dua.title}</h2>
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
              <p className="text-[var(--transliteration-text)] italic leading-relaxed">{dua.transliteration}</p>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold text-[#282E29] mb-2">Translation</h3>
              <p className="  text-[#282E29] font-normal leading-relaxed" style={{ fontSize: `${translationFontSize}px` }}>
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



