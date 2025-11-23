'use client'

import { LineChart, Line, BarChart, Bar, ResponsiveContainer, XAxis, YAxis } from 'recharts'
import { TrendingDown, TrendingUp, DollarSign, TrendingUpIcon } from 'lucide-react'
import { Card } from '../ui/card'

const salesData = [
  { name: 'J', value: 25 },
  { name: 'F', value: 35 },
  { name: 'M', value: 30 },
  { name: 'A', value: 40 },
  { name: 'M', value: 28 },
  { name: 'J', value: 38 },
]

const sessionData = [
  { month: 'Jan', blue: 45, purple: 35, green: 25 },
  { month: 'Feb', blue: 50, purple: 40, green: 30 },
  { month: 'Mar', blue: 55, purple: 45, green: 35 },
  { month: 'Apr', blue: 60, purple: 50, green: 40 },
  { month: 'May', blue: 65, purple: 55, green: 45 },
]

const revenueData = [
  { day: 'M', value: 30 },
  { day: 'T', value: 45 },
  { day: 'W', value: 40 },
  { day: 'T', value: 50 },
  { day: 'F', value: 55 },
  { day: 'S', value: 70 },
  { day: 'S', value: 60 },
]

export function MetricCards() {
  return (
    <div className="grid sm:grid-cols-12  xl:grid-cols-12 md:grid-cols-12  gap-4">
      
      {/* Sales Card */}
      <Card className="bg-white xl:col-span-2 md:col-span-4 dark:bg-gray-900 border-b border-slate-700 rounded-lg p-6   shadow-sm hover:shadow-md transition-shadow">
      {/* <div className="bg-white sm:col-span-2 dark:bg-gray-900 border-b border-slate-700 rounded-lg p-6   shadow-sm hover:shadow-md transition-shadow"> */}
        <div className="mb-4">
          <p className="text-gray-600 dark:text-white text-sm font-medium">Sales</p>
          <p className="text-gray-400 dark:text-white text-xs">Last Year</p>
        </div>
        <ResponsiveContainer width="100%" height={60}>
          <LineChart data={salesData}>
            <Line type="monotone" dataKey="value" stroke="#22c55e" dot={false} strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
        <div className="flex items-baseline gap-2 mt-4">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">175k</span>
          <span className="text-red-500 text-sm font-semibold">-16.2%</span>
        </div>
      {/* </div> */}
      </Card>

      {/* Sessions Card */}
      <Card className="bg-white xl:col-span-2 md:col-span-4 dark:bg-gray-900 border-b border-slate-700 rounded-lg p-6   shadow-sm hover:shadow-md transition-shadow">
      {/* <div className="bg-white sm:col-span-2 dark:bg-gray-900 border-b border-slate-700 rounded-lg p-6   shadow-sm hover:shadow-md transition-shadow"> */}
        <div className="mb-4">
          <p className="text-gray-600 dark:text-white text-sm font-medium">Sessions</p>
          <p className="text-gray-400 dark:text-white text-xs">This Month</p>
        </div>
        <ResponsiveContainer width="100%" height={60}>
          <BarChart data={sessionData}>
            <Bar dataKey="blue" stackId="a" fill="#6366f1" radius={[2, 2, 0, 0]} />
            <Bar dataKey="purple" stackId="a" fill="#8b5cf6" radius={[2, 2, 0, 0]} />
            <Bar dataKey="green" stackId="a" fill="#22c55e" radius={[2, 2, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
        <div className="flex items-baseline gap-2 mt-4">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">45.1k</span>
          <span className="text-green-500 text-sm font-semibold">+12.6%</span>
        </div>
      {/* </div> */}
      </Card>

      {/* Total Profit Card */}
      <Card className="bg-white xl:col-span-2 md:col-span-4 dark:bg-gray-900 border-b border-slate-700 rounded-lg p-6   shadow-sm hover:shadow-md transition-shadow">
      {/* <div className="bg-white sm:col-span-2 dark:bg-gray-900 border-b border-slate-700 rounded-lg p-6   shadow-sm hover:shadow-md transition-shadow"> */}
        <div className="mb-4">
          <p className="text-gray-600 dark:text-white text-sm font-medium flex items-center gap-2">
            {/* <span className="text-3xl text-red-400">$</span> Total Profit */}
            <DollarSign className="text-3xl text-red-400  bg-amber-100 rounded-b-md border-2" />Total Profit
          </p>
          <p className="text-gray-400 text-xs">Last week</p>
        </div>
        <div className="mt-12">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">1.28k</span>
          <p className="text-red-500 text-sm font-semibold mt-2">-12.2%</p>
        </div>
      {/* </div> */}
      </Card>
    
      {/* Total Sales Card */}
      <Card className="bg-white xl:col-span-2 md:col-span-4 dark:bg-gray-900 border-b border-slate-700 rounded-lg p-6  shadow-sm hover:shadow-md transition-shadow">
      {/* <div className="bg-white sm:col-span-2 dark:bg-gray-900 border-b border-slate-700 rounded-lg p-6  shadow-sm hover:shadow-md transition-shadow"> */}
        <div className="mb-4">
          <p className="text-gray-600 dark:text-white text-sm font-medium flex items-center gap-2">
            <TrendingUpIcon size={20} className="text-cyan-400" /> Total Sales
          </p>
          <p className="text-gray-400 dark:text-white text-xs">Last week</p>
        </div>
        <div className="mt-12">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">24.67k</span>
          <p className="text-green-500 text-sm font-semibold mt-2">+25.2%</p>
        </div>
      {/* </div> */}
      </Card>

      {/* Revenue Growth Card */}
      <Card className="bg-white xl:col-span-4 md:col-span-8 mr-1.5 w-full dark:bg-gray-900 border-b border-slate-700 rounded-lg p-6  shadow-sm hover:shadow-md transition-shadow">
      {/* <div className="bg-white sm:col-span-4 mr-1.5 dark:bg-gray-900 border-b border-slate-700 rounded-lg p-6  shadow-sm hover:shadow-md transition-shadow"> */}
        <div className="mb-4">
          <p className="text-gray-600 dark:text-white text-sm font-medium">Revenue Growth</p>
          <p className="text-gray-400 dark:text-white text-xs">Weekly Report</p>
        </div>
        <ResponsiveContainer width="100%" height={60}>
          <BarChart data={revenueData}>
            <Bar dataKey="value" fill="#22c55e" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
        <div className="flex items-baseline justify-between mt-4">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">$4,673</span>
          <span className="text-green-500 text-sm font-semibold">+15.2%</span>
        </div>
      {/* </div> */}
      </Card>
    </div>  
    
  )
}
