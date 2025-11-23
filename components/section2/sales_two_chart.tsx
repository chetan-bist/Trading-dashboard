"use client"
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  type ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A radar chart with a legend"

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
]

const chartConfig = {
  desktop: {
    label: "Sales",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Visits",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export function ChartRadarLegend() {
  return (
    <Card className="dark:bg-gray-900 h-full ">
      <CardHeader className="items-center pb-2 sm:pb-4">
        <CardTitle className="text-lg sm:text-xl">Sales</CardTitle>
        <CardDescription className="text-xs sm:text-sm">last 6 months</CardDescription>
      </CardHeader>
      <CardContent className="p-3 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square w-full max-h-[200px] sm:max-h-[300px] md:max-h-[400px]"
        >
          <RadarChart
            data={chartData}
            margin={{
              top: -40,
              bottom: -10,
              left: -20,
              right: -20,
            }}
          >
            <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
            <PolarAngleAxis dataKey="month" tick={{ fontSize: 12 }} />
            <PolarGrid />
            <Radar dataKey="desktop" fill="var(--color-desktop)" fillOpacity={0.6} />
            <Radar dataKey="mobile" fill="var(--color-mobile)" />
            <ChartLegend className="mt-4 sm:mt-6 md:mt-8" content={<ChartLegendContent />} />
          </RadarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
