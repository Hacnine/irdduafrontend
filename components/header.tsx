"use client"

import { Menu, Settings, User, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeaderProps {
  onMenuClick: () => void
  onFontSettingsClick: () => void
}

export default function Header({ onMenuClick, onFontSettingsClick }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={onMenuClick} className="lg:hidden">
            <Menu className="h-5 w-5" />
          </Button>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-green-600 rounded-full"></div>
              </div>
            </div>
            <div>
              <h1 className="text-xl font-semibold text-gray-900">Dua & Ruqyah</h1>
              <p className="text-sm text-gray-500">Hisnul Muslim</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
            <User className="h-5 w-5 text-gray-600" />
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={onFontSettingsClick}
            className="w-10 h-10 bg-gray-100 rounded-full hover:bg-gray-200"
          >
            <Settings className="h-5 w-5 text-gray-600" />
          </Button>

          <div className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg">
            <div className="w-5 h-4 bg-red-500 rounded-sm flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-red-500 via-white to-red-500">
                <div className="absolute top-0 left-0 w-2 h-2 bg-blue-600"></div>
              </div>
            </div>
            <span className="text-sm font-medium text-gray-700">En</span>
            <ChevronDown className="h-3 w-3 text-gray-500" />
          </div>

          <Button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2">
            <span>Support Us</span>
            <div className="w-4 h-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <div className="w-0 h-0 border-l-2 border-l-white border-y-2 border-y-transparent"></div>
            </div>
          </Button>
        </div>
      </div>
    </header>
  )
}
