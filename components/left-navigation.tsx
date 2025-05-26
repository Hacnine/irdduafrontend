"use client"

import { Hand, X, Grid3X3, Info, Bookmark, Lock, BookOpen, Trophy, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface LeftNavigationProps {
  isOpen?: boolean
  onToggle?: () => void
}

export default function LeftNavigation({ isOpen = false, onToggle }: LeftNavigationProps) {
  const navItems = [
    { icon: '/icon/cross.svg', active: true, color: "bg-gray-100" },
    { icon: '/icon/grid.svg', active: false, color: "bg-gray-100" },
    { icon: '/icon/light.svg', active: false, color: "bg-gray-100" },
    { icon: '/icon/bookmark.svg', active: false, color: "bg-gray-100" },
    { icon: '/icon/bookmark-plus.svg', active: false, color: "bg-gray-100" },
    { icon: '/icon/book.svg', active: false, color: "bg-gray-100" },
  ]

  const bottomItems = [
     { icon: '/icon/cup.svg', active: true, color: "bg-gray-100" },
      { icon: '/icon/menu.svg', active: true, color: "bg-gray-100" },
  ]

  return (
    <aside className="w-[68px] hidden  h-screen bg-[var(--left-sidebar)]  lg:flex flex-col items-center justify-between py-4">

      <Image src={'/icon/logo.svg'} height={40} width={40} alt="logo" className="mb-4" />


      <div className="flex flex-col gap-3">
        
        {navItems.map((item, index) => (
          <Button
            key={index}
            variant="ghost"
            size="icon"
            className={`
              w-10 h-10 rounded-xl transition-colors
              ${
                item.active
                  ? "bg-[#d8e7d3] text-white hover:bg-green-700"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }
            `}
          >
            <Image src={`${item.icon}`} width={24} height={24} alt="icon"/>
          </Button>
        ))}
      </div>


      <div className="flex flex-col gap-3">
        {bottomItems.map((item, index) => (
          <Button
            key={index}
            variant="ghost"
            size="icon"
            className="w-10 h-10 rounded-xl bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
          >
            <Image src={`${item.icon}`} width={24} height={24} alt="icon"/>
          </Button>
        ))}
      </div>
    </aside>
  )
}
