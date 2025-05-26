"use client"

import { Menu, Settings, User, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface HeaderProps {
  onMenuClick: () => void
  onFontSettingsClick: () => void
}

export default function Header({ onMenuClick, onFontSettingsClick }: HeaderProps) {
  return (
    <header className=" bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={onMenuClick} className="lg:hidden">
            <Menu className="h-5 w-5" />
          </Button>

            
            <div>
              <h1 className="text-[18px] font-semibold text-gray-900">Dua & Ruqyah</h1>
              <p className="text-sm text-gray-500">Hisnul Muslim</p>
            </div>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={onFontSettingsClick}
            className="size-[38px]  bg-[var(--light-gray)] rounded-full hover:bg-gray-200"
          >
            <Image src={'/icon/search.svg'} height={18} width={18} alt="flag image"  />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={onFontSettingsClick}
            className="size-[38px]  bg-[var(--light-gray)] rounded-full hover:bg-gray-200"
          >
            <Image src={'/icon/swatch.svg'} height={18} width={18} alt="flag image"  />
          </Button>

          <div className="flex items-center gap-2 px-3 h-[38px] py-3 bg-[var(--light-gray)]  rounded-full ">
            <div className="w-5 h-4 0 rounded-sm flex items-center justify-center relative overflow-hidden">
              <Image src={'/icon/flag.svg'} height={16} width={16} alt="flag image" className="absolute top-0 left-0 w-full h-full object-cover" />
            </div>
            <span className="text-sm font-medium text-gray-700">En</span>
            <ChevronDown className="h-3 w-3 text-gray-500" />
          </div>

          <Button className=" bg-[var(--desaturated-green)]  hover:bg-green-700 text-white px-4 py-2 rounded-[30px] flex w-[133px] text-[14px] items-center gap-2">
            <span>Support Us</span>
            <div className="size-[18px]">
              <Image src={'/icon/right.png'} height={18} width={18} alt="support image"/>
            </div>
          </Button>
        </div>
      </div>
    </header>
  )
}
