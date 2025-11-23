"use client"

import { useState } from "react"
import { MoreVertical, ShoppingCart, BarChart3, DollarSign, Clock, Plus } from "lucide-react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const dataSets = {
  orders: [
    { category: "Jan", value: 28000 },
    { category: "Feb", value: 35000 },
    { category: "Mar", value: 32000 },
    { category: "Apr", value: 41000 },
    { category: "May", value: 38000 },
  ],
  sales: [
    { category: "Jan", value: 45000 },
    { category: "Feb", value: 52000 },
    { category: "Mar", value: 48000 },
    { category: "Apr", value: 61000 },
    { category: "May", value: 58000 },
  ],
  profit: [
    { category: "Jan", value: 38000 },
    { category: "Feb", value: 42000 },
    { category: "Mar", value: 40000 },
    { category: "Apr", value: 51000 },
    { category: "May", value: 48000 },
  ],
  income: [
    { category: "Jan", value: 30000 },
    { category: "Feb", value: 35000 },
    { category: "Mar", value: 32000 },
    { category: "Apr", value: 42000 },
    { category: "May", value: 39000 },
  ],
}

export function EarningReports() {
  const [activeTab, setActiveTab] = useState("orders")
  const chartData = dataSets[activeTab as keyof typeof dataSets]

  const tabs = [
    { id: "orders", label: "Orders", icon: ShoppingCart },
    { id: "sales", label: "Sales", icon: BarChart3 },
    { id: "profit", label: "Profit", icon: DollarSign },
    { id: "income", label: "Income", icon: Clock },
  ]

  return (
    <Card className="lg:col-span-2 h-full">
      <CardHeader className="flex flex-col gap-2 pb-3 sm:pb-4">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <CardTitle className="text-lg sm:text-xl">Earning Reports</CardTitle>
            <CardDescription className="text-xs sm:text-sm">Yearly Earnings Overview</CardDescription>
          </div>
          <button className="text-gray-400 dark:text-white hover:text-gray-600 transition-colors flex-shrink-0">
            <MoreVertical size={18} className="sm:w-5 sm:h-5" />
          </button>
        </div>
      </CardHeader>

      <CardContent className="space-y-3 sm:space-y-4 px-3 sm:px-6">
        <div className="flex gap-1 sm:gap-2 pb-3 sm:pb-4 border-b border-gray-100 dark:border-gray-800 overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => {
            const IconComponent = tab.icon
            const isActive = activeTab === tab.id

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-lg border-2 font-medium text-xs sm:text-sm flex items-center gap-1 sm:gap-2 whitespace-nowrap transition-colors flex-shrink-0 ${
                  isActive
                    ? "border-purple-500 text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950"
                    : "border-gray-200 dark:border-gray-700 text-gray-600 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-900"
                }`}
              >
                <IconComponent size={14} className="sm:w-5 sm:h-5 flex-shrink-0" />
                <span className="hidden xs:inline">{tab.label}</span>
              </button>
            )
          })}
          <button className="px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-white font-medium text-xs sm:text-sm flex items-center justify-center whitespace-nowrap hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors flex-shrink-0">
            <Plus size={14} className="sm:w-5 sm:h-5" />
          </button>
        </div>

        <div className="w-full overflow-x-auto -mx-3 sm:mx-0">
          <ResponsiveContainer width="100%" height={200} className="sm:h-72 md:h-80" minWidth={280}>
            <BarChart data={chartData} margin={{ top: 15, right: 15, left: -5, bottom: 15 }} className="text-xs">
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
              <XAxis dataKey="category" stroke="#9ca3af" style={{ fontSize: "11px" }} />
              <YAxis stroke="#9ca3af" style={{ fontSize: "11px" }} width={35} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#fff",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                  fontSize: "12px",
                }}
              />
              <Bar dataKey="value" fill="#8b5cf6" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
