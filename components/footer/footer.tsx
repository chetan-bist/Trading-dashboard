export function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-slate-700 mt-2 rounded-lg px-4 py-6 md:px-6 md:py-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-0">
        {/* Left side */}
        <div className="flex flex-col items-start gap-2 text-gray-600 dark:text-white text-sm md:flex-row md:items-center md:gap-1">
          <span>© 2025 , made with</span>
          <span className="text-red-500">❤️</span>
          <span>by Chetan bist</span>
        </div>

        {/* Right side - stack vertically on mobile, horizontally on md+ */}
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-6">
          <a
            href="#"
            className="text-gray-600 dark:text-white hover:text-gray-900 dark:hover:text-gray-500 text-sm transition"
          >
            License
          </a>
          <a
            href="#"
            className="text-gray-600 dark:text-white hover:text-gray-900 dark:hover:text-gray-500 text-sm transition"
          >
            More Themes
          </a>
          <a
            href="#"
            className="text-gray-600 dark:text-white hover:text-gray-900 dark:hover:text-gray-500 text-sm transition"
          >
            Documentation
          </a>
          <a
            href="#"
            className="text-gray-600 dark:text-white hover:text-gray-900 dark:hover:text-gray-500 text-sm transition"
          >
            Support
          </a>
        </div>
      </div>
    </footer>
  )
}
