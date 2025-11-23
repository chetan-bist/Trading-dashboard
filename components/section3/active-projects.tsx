"use client"

import { MoreVertical } from "lucide-react"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { useState } from "react"

export function ActiveProjects() {
  const [failedImages, setFailedImages] = useState(new Set())

  const projects = [
    { id: 1, name: "Laravel", desc: "Ecommerce", percentage: 85, color: "#DC3545", icon: "/laravel.png" },
    { id: 2, name: "Figma", desc: "App UI Kit", percentage: 86, color: "#6366F1", icon: "/figma.png" },
    { id: 3, name: "VueJS", desc: "Calendar App", percentage: 90, color: "#10B981", icon: "/vue.png" },
    { id: 4, name: "React", desc: "Dashboard", percentage: 37, color: "#06B6D4", icon: "/react.png" },
    { id: 5, name: "Bootstrap", desc: "Website", percentage: 22, color: "#8B5CF6", icon: "/bootstrap.png" },
    { id: 6, name: "Sketch", desc: "Website Design", percentage: 29, color: "#F59E0B", icon: "/sketch.png" },
  ]

  const handleImageError = (id: unknown) => {
    setFailedImages(prev => new Set(prev).add(id))
  }

  return (
    <Card className="p-3 sm:p-4 md:p-6 h-full">
      <div className="flex justify-between items-start mb-4 sm:mb-6">
        <div>
          <h3 className="text-sm sm:text-base md:text-lg text-gray-800 dark:text-white font-semibold">
            Active Projects
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Average 72% completed</p>
        </div>
        <button className="text-gray-400 dark:text-white hover:text-gray-600">
          <MoreVertical size={16} className="sm:w-5 sm:h-5 md:w-5 md:h-5" />
        </button>
      </div>

      <div className="space-y-3 sm:space-y-4">
        {projects.map((project) => {
          const failed = failedImages.has(project.id)

          return (
            <div key={project.id} className="flex items-center justify-between gap-2 sm:gap-3">

              {/* LEFT SIDE */}
              <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                
                {/* ICON / FALLBACK */}
                <div
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded flex items-center justify-center text-white font-bold text-xs sm:text-sm flex-shrink-0 overflow-hidden"
                  // style={{ backgroundColor: project.color }}
                >
                  {!failed ? (
                    <Image
                      src={project.icon}
                      alt={project.name}
                      width={32}
                      height={32}
                      onError={() => handleImageError(project.id)}
                    />
                  ) : (
                    <span className="text-white">{project.name.charAt(0)}</span>
                  )}
                </div>

                {/* TEXT */}
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm md:text-base text-gray-800 dark:text-white font-medium truncate">
                    {project.name}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                    {project.desc}
                  </p>
                </div>
              </div>

              {/* RIGHT SIDE (Progress bar + %) */}
              <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                <div className="w-16 sm:w-20 md:w-24 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${project.percentage}%`, backgroundColor: project.color }}
                  />
                </div>
                <span className="text-xs sm:text-sm text-gray-700 dark:text-white font-semibold w-7 sm:w-8 text-right">
                  {project.percentage}%
                </span>
              </div>

            </div>
          )
        })}
      </div>
    </Card>
  )
}
