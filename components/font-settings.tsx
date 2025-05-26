"use client";

import { X, Settings, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import CustomSlider from "./CustomSlider";

interface FontSettingsProps {
  isOpen: boolean;
  onClose: () => void;
  arabicFontSize: number;
  setArabicFontSize: (size: number) => void;
  translationFontSize: number;
  setTranslationFontSize: (size: number) => void;
}

export default function FontSettings({
  isOpen,
  onClose,
  arabicFontSize,
  setArabicFontSize,
  translationFontSize,
  setTranslationFontSize,
}: FontSettingsProps) {
  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
        onClick={onClose}
      />

      <aside className="fixed lg:static right-0 top-0 z-50 w-80 h-screen lg:h-[calc(100vh-73px)] bg-white border-l border-gray-200 overflow-y-auto">
        <div className="p-4">
          <Accordion type="multiple" className="">
            {/* Font Size */}
            <AccordionItem value="font-size" className=" border-none h-14">
              <AccordionTrigger className="hover:no-underline no-underline">
                <div className="flex  items-center gap-3">
                  <div className="size-[34px] flex items-center justify-center rounded-full bg-[#d8e7d3]">
                    <Image
                      src={"/icon/smallcaps.svg"}
                      width={18}
                      height={18}
                      alt="Font Icon"
                    />
                  </div>
                  <h2 className="font-semibold text-sm text-[var(--desaturated-green)]">
                    Font Settings
                  </h2>
                </div>
              </AccordionTrigger>
              <AccordionContent className="space-y-6 mt-2">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-sm font-medium text-gray-900">
                      Arabic Font Size
                    </label>
                    <span className="text-sm text-gray-500">
                      {arabicFontSize}
                    </span>
                  </div>
                  <CustomSlider
                    value={arabicFontSize}
                    onChange={(val) => setArabicFontSize(val)}
                    min={16}
                    max={48}
                    step={2}
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-sm font-medium text-gray-900">
                      Translation Font Size
                    </label>
                    <span className="text-sm text-gray-500">
                      {translationFontSize}
                    </span>
                  </div>
                  <CustomSlider
                    value={translationFontSize}
                    onChange={(val) => setTranslationFontSize(val)}
                    max={32}
                    min={12}
                    step={2}
                  />
                </div>
                <h2 className="text-sm">Arabic Script & Font Face</h2>
                <Select defaultValue="uthmani">
                  <SelectTrigger className="bg-[var(--light-gray)] rounded-[12px] border-none focus:ring-0 focus:ring-offset-0 shadow-none">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-[var(--light-gray)] rounded-[12px] border-none focus:ring-0 focus:ring-offset-0 shadow-none">
                    <SelectItem value="uthmani">Uthmani</SelectItem>
                    <SelectItem value="indopak">IndoPak</SelectItem>
                    <SelectItem value="simple">Simple</SelectItem>
                  </SelectContent>
                </Select>
              </AccordionContent>
            </AccordionItem>

            {/* Script */}

            {/* View Settings */}
            <AccordionItem value="view-settings" className=" border-none h-14">
              <AccordionTrigger className="hover:no-underline no-underline  border-none">
                <div className="flex  items-center gap-3">
                  <div className="size-[34px] flex items-center justify-center rounded-full bg-[#d8e7d3]">
                    <Image
                      src={"/icon/copy-success.svg"}
                      width={18}
                      height={18}
                      alt="Font Icon"
                    />
                  </div>
                  <h2 className="font-semibold text-sm text-[var(--desaturated-green)]">
                    View Settings
                  </h2>
                </div>
              </AccordionTrigger>
              <AccordionContent className="mt-2">
                <div className="flex items-center gap-3">
                  <Eye className="h-4 w-4 text-gray-600" />

                  <h3 className="text-sm font-medium text-gray-900">
                    View Settings
                  </h3>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Appearance */}
            <AccordionItem
              value="appearance-settings"
              className=" border-none h-14"
            >
              <AccordionTrigger className="hover:no-underline no-underline  border-none">
                <div className="flex  items-center gap-3">
                  <div className="size-[34px] flex items-center justify-center rounded-full bg-[#d8e7d3]">
                    <Image
                      src={"/icon/swatch.svg"}
                      width={18}
                      height={18}
                      alt="Font Icon"
                    />
                  </div>
                  <h2 className="font-semibold text-sm text-[var(--desaturated-green)]">
                    Appearance Settings
                  </h2>
                </div>
              </AccordionTrigger>
              <AccordionContent className="mt-2 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">Dark Mode</span>
                  <div className="w-10 h-6 bg-gray-200 rounded-full relative">
                    <div className="w-4 h-4 bg-white rounded-full absolute top-1 left-1 transition-transform" />
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </aside>
    </>
  );
}
