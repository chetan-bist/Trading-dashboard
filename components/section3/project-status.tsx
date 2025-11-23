"use client"

import { MoreVertical, DollarSign } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Card } from "@/components/ui/card"

export function ProjectStatus() {
  const data = [
    { month: "Jan", value: 2000 },
    { month: "Feb", value: 3000 },
    { month: "Mar", value: 2500 },
    { month: "Apr", value: 3500 },
    { month: "May", value: 3200 },
    { month: "Jun", value: 4000 },
  ]

  return (
    <Card className="p-3 sm:p-4 md:p-6">
      <div className="flex justify-between items-start mb-4 sm:mb-6">
        <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 dark:text-white">Project Status</h3>
        <button className="text-gray-400 dark:text-white hover:text-gray-600">
          <MoreVertical size={18} className="sm:w-5 sm:h-5 md:w-5 md:h-5" />
        </button>
      </div>

      <div className="mb-4 sm:mb-6">
        <div className="flex items-baseline gap-2 mb-1">
          <span className="text-xl sm:text-2xl md:text-2xl font-bold text-gray-800 dark:text-white">$4,3742</span>
          <span className="text-green-500 text-xs sm:text-sm font-medium">+10.2%</span>
        </div>
        <p className="text-gray-500 dark:text-white text-xs sm:text-sm">Your Earnings</p>
      </div>

      <ResponsiveContainer width="100%" height={150} className="sm:h-48 md:h-56">
        <LineChart data={data} margin={{ top: 5, right: 10, left: -20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" vertical={false} />
          <XAxis dataKey="month" stroke="#999" style={{ fontSize: "11px" }} className="sm:text-xs" />
          <YAxis stroke="#999" style={{ fontSize: "11px" }} className="sm:text-xs" />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#FFA500" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>

      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-4 mt-4 sm:mt-6 pt-4 border-t border-slate-200 dark:border-slate-700">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <DollarSign size={14} className="sm:w-4 sm:h-4 md:w-4 md:h-4 text-gray-400 dark:text-white" />
            <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-white">Donates</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-sm sm:text-base md:text-base font-semibold text-gray-800 dark:text-white">
              $756.26
            </span>
            <span className="text-red-500 text-xs sm:text-sm">-139.34</span>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2 mb-1">
            <DollarSign size={14} className="sm:w-4 sm:h-4 md:w-4 md:h-4 text-gray-400 dark:text-white" />
            <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-white">Podcasts</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-sm sm:text-base md:text-base font-semibold text-gray-800 dark:text-white">
              $2,207.03
            </span>
            <span className="text-green-500 text-xs sm:text-sm">+576.24</span>
          </div>
        </div>
      </div>
    </Card>
  )
}
