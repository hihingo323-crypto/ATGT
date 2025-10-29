"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">🚗</span>
            </div>
            <span className="font-bold text-xl text-primary hidden sm:inline">An Toàn Giao Thông</span>
          </div>

          <nav className="hidden md:flex gap-8">
            <a href="#tips" className="text-foreground hover:text-primary transition">
              Tư Vấn
            </a>
            <a href="#statistics" className="text-foreground hover:text-primary transition">
              Thống Kê
            </a>
            <a href="#resources" className="text-foreground hover:text-primary transition">
              Tài Nguyên
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition">
              Liên Hệ
            </a>
          </nav>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 hover:bg-muted rounded-lg transition">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-3">
            <a href="#tips" className="text-foreground hover:text-primary transition py-2">
              Tư Vấn
            </a>
            <a href="#statistics" className="text-foreground hover:text-primary transition py-2">
              Thống Kê
            </a>
            <a href="#resources" className="text-foreground hover:text-primary transition py-2">
              Tài Nguyên
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition py-2">
              Liên Hệ
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
