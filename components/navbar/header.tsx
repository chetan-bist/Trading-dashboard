"use client"

import { Search, Moon, Grid3x3, Bell, Flag, Menu, X } from "lucide-react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { useState, useEffect } from "react"

export function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false) // added mobile menu state

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

  function toggleDarkMode() {
    setIsDarkMode((prevMode) => !prevMode)
  }

  return (
    <nav className="bg-white  dark:bg-gray-900 border-b border-slate-700 px-4 md:px-6 py-4 flex items-center justify-between  rounded-lg">
      {/* Left: Search - Hidden on mobile */}
      <div className="hidden md:flex items-center gap-3 flex-1">
        <Search className="w-5 h-5 text-slate-400" />
        <input
          type="text"
          placeholder="Search (Ctrl+/)"
          className="bg-transparent text-slate-300 placeholder-slate-500 outline-none text-sm w-64"
        />
      </div>

      {/* Mobile Search Icon - Visible only on mobile */}
      <div className="md:hidden flex items-center">
        <Search className="w-5 h-5 text-slate-400" />
      </div>

      {/* Right: Icons and Avatar */}
      {/* Desktop view - always visible */}
      <div className="hidden md:flex items-center gap-6">
        {/* Flag Icon */}
        <button className="text-slate-300 hover:text-slate-100 transition">
          <Flag className="w-5 h-5" fill="currentColor" />
        </button>

        {/* Theme Toggle */}
        <button className="text-slate-300 hover:text-slate-100 transition">
          <Moon className="w-5 h-5" onClick={toggleDarkMode} />
        </button>

        {/* Grid Icon */}
        <button className="text-slate-300 hover:text-slate-100 transition">
          <Grid3x3 className="w-5 h-5" />
        </button>

        {/* Notification Bell */}
        <button className="relative text-slate-300 hover:text-slate-100 transition">
          <Bell className="w-5 h-5" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
            1
          </span>
        </button>

        {/* User Avatar */}
        <Avatar className="w-8 h-8">
          <AvatarImage src="https://github.com/shadcn.png" alt="User" />
          <AvatarFallback>US</AvatarFallback>
        </Avatar>
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden flex items-center gap-3">
        <Avatar className="w-8 h-8">
          <AvatarImage src="https://github.com/shadcn.png" alt="User" />
          <AvatarFallback>US</AvatarFallback>
        </Avatar>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-slate-300 hover:text-slate-100 transition"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <>
          {/* Overlay backdrop */}
          <div className="fixed inset-0 bg-black/50 md:hidden z-40" onClick={() => setIsMobileMenuOpen(false)} />

          {/* Slide-in menu from right */}
          <div className="fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-950 border-l border-slate-700 md:hidden shadow-lg z-50 flex flex-col gap-4 px-4 py-6 animate-in slide-in-from-right">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="self-end text-slate-300 hover:text-slate-100 transition"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Flag Icon */}
            <button className="text-slate-300 hover:text-slate-100 transition flex items-center gap-3">
              <Flag className="w-5 h-5" fill="currentColor" />
              <span className="text-sm">Flags</span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleDarkMode}
              className="text-slate-300 hover:text-slate-100 transition flex items-center gap-3"
            >
              <Moon className="w-5 h-5" />
              <span className="text-sm">{isDarkMode ? "Light Mode" : "Dark Mode"}</span>
            </button>

            {/* Grid Icon */}
            <button className="text-slate-300 hover:text-slate-100 transition flex items-center gap-3">
              <Grid3x3 className="w-5 h-5" />
              <span className="text-sm">Apps</span>
            </button>

            {/* Notification Bell */}
            <button className="relative text-slate-300 hover:text-slate-100 transition flex items-center gap-3">
              <Bell className="w-5 h-5" />
              <span className="text-sm">Notifications</span>
              <span className="absolute top-5 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                1
              </span>
            </button>
          </div>
        </>
      )}
    </nav>
  )
}
