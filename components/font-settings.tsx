"use client"

import { X, Settings, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface FontSettingsProps {
  isOpen: boolean
  onClose: () => void
  arabicFontSize: number
  setArabicFontSize: (size: number) => void
  translationFontSize: number
  setTranslationFontSize: (size: number) => void
}

export default function FontSettings({
  isOpen,
  onClose,
  arabicFontSize,
  setArabicFontSize,
  translationFontSize,
  setTranslationFontSize,
}: FontSettingsProps) {
  if (!isOpen) return null

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={onClose} />

      <aside className="fixed lg:static right-0 top-0 z-50 w-80 h-screen lg:h-[calc(100vh-73px)] bg-white border-l border-gray-200 overflow-y-auto">
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <Settings className="h-5 w-5 text-gray-600" />
            <h2 className="font-medium text-gray-900">Font Settings</h2>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="p-4 space-y-6">
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="text-sm font-medium text-gray-900">Arabic Font Size</label>
              <span className="text-sm text-gray-500">{arabicFontSize}</span>
            </div>
            <Slider
              value={[arabicFontSize]}
              onValueChange={(value) => setArabicFontSize(value[0])}
              max={48}
              min={16}
              step={2}
              className="w-full"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="text-sm font-medium text-gray-900">Translation Font Size</label>
              <span className="text-sm text-gray-500">{translationFontSize}</span>
            </div>
            <Slider
              value={[translationFontSize]}
              onValueChange={(value) => setTranslationFontSize(value[0])}
              max={32}
              min={12}
              step={2}
              className="w-full"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-900 mb-3 block">Arabic Script & Font Face</label>
            <Select defaultValue="uthmani">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="uthmani">Uthmani</SelectItem>
                <SelectItem value="indopak">IndoPak</SelectItem>
                <SelectItem value="simple">Simple</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-3">
              <Eye className="h-4 w-4 text-gray-600" />
              <h3 className="text-sm font-medium text-gray-900">View Settings</h3>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-3">Appearance Settings</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">Dark Mode</span>
                <div className="w-10 h-6 bg-gray-200 rounded-full relative">
                  <div className="w-4 h-4 bg-white rounded-full absolute top-1 left-1 transition-transform"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
