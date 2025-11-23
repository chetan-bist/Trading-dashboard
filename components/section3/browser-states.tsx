"use client"

import React, { useState } from "react"
import { MoreVertical } from "lucide-react"
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export function BrowserStates() {
  const [failedImages, setFailedImages] = useState(new Set())

  const browsers = [
    { name: "Google Chrome", percentage: 54.4, color: "#EA4335", icon: "/chrome.png" },
    { name: "Apple Safari", percentage: 14.6, color: "#0071E3", icon: "/safari.png" },
    { name: "Mozilla Firefox", percentage: 6.1, color: "#FF7139", icon: "/mozilla.png" },
    { name: "Opera Mini", percentage: 8.0, color: "#FF1B2D", icon: "/opera.png" },
    { name: "Internet Explorer", percentage: 4.2, color: "#00A4EF", icon: "/internet.png" },
    { name: "Brave", percentage: 5.3, color: "#FB542B", icon: "/brave.png" },
  ]

  const handleImageError = (index: unknown) => {
    setFailedImages((prev) => new Set(prev).add(index))
  }

  return (
    <Card className="w-full h-full">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg md:text-xl">Browser States</CardTitle>
            <CardDescription className="text-xs md:text-sm">Counter April 2022</CardDescription>
          </div>
          <button className="text-muted-foreground hover:text-foreground transition-colors flex-shrink-0">
            <MoreVertical size={20} />
          </button>
        </div>
      </CardHeader>

      <CardContent>
        <div className="space-y-3 md:space-y-4">
          {browsers.map((browser, index) => {
            const isFailed = failedImages.has(index)

            return (
              <div key={index} className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
                <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                  
                  {/* Circle container */}
                  <div
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden"
                    // style={{ backgroundColor: browser.color }}
                  >
                    {!isFailed ? (
                      <Image
                        src={browser.icon}
                        alt={`${browser.name} logo`}
                        width={40}
                        height={40}
                        onError={() => handleImageError(index)}
                      />
                    ) : (
                      <span className="text-white text-xs font-bold">
                        {browser.name.charAt(0)}
                      </span>
                    )}
                  </div>

                  <span className="text-sm sm:text-base font-medium truncate">{browser.name}</span>
                </div>

                {/* Percentage + Pie Chart */}
                <div className="flex items-center gap-2 sm:gap-4 ml-10 sm:ml-0">
                  <span className="text-sm sm:text-base font-semibold">{browser.percentage}%</span>

                  <ResponsiveContainer width={36} height={36} className="sm:w-[40px] sm:h-[40px]">
                    <PieChart>
                      <Pie
                        data={[
                          { value: browser.percentage, fill: browser.color },
                          { value: 100 - browser.percentage, fill: "#E5E7EB" },
                        ]}
                        innerRadius={12}
                        outerRadius={18}
                        dataKey="value"
                        startAngle={90}
                        endAngle={450}
                      >
                        {[browser.color, "#E5E7EB"].map((entry, idx) => (
                          <Cell key={`cell-${idx}`} fill={entry} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>

                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
