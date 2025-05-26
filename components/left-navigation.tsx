"use client"

import { Hand, X, Grid3X3, Info, Bookmark, Lock, BookOpen, Trophy, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

interface LeftNavigationProps {
  isOpen?: boolean
  onToggle?: () => void
}

export default function LeftNavigation({ isOpen = false, onToggle }: LeftNavigationProps) {
  const navItems = [
    { icon: Hand, active: true, color: "bg-green-600" },
    { icon: X, active: false, color: "bg-gray-100" },
    { icon: Grid3X3, active: false, color: "bg-gray-100" },
    { icon: Info, active: false, color: "bg-gray-100" },
    { icon: Bookmark, active: false, color: "bg-gray-100" },
    { icon: Lock, active: false, color: "bg-gray-100" },
    { icon: BookOpen, active: false, color: "bg-gray-100" },
  ]

  const bottomItems = [
    { icon: Trophy, active: false, color: "bg-gray-100" },
    { icon: Menu, active: false, color: "bg-gray-100" },
  ]

  return (
    <aside className="w-16 h-[calc(100vh-73px)] bg-gray-50 border-r border-gray-200 flex flex-col items-center py-4">
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
                  ? "bg-green-600 text-white hover:bg-green-700"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }
            `}
          >
            <item.icon className="h-5 w-5" />
          </Button>
        ))}
      </div>

      <div className="flex-1" />

      <div className="flex flex-col gap-3">
        {bottomItems.map((item, index) => (
          <Button
            key={index}
            variant="ghost"
            size="icon"
            className="w-10 h-10 rounded-xl bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
          >
            <item.icon className="h-5 w-5" />
          </Button>
        ))}
      </div>
    </aside>
  )
}
