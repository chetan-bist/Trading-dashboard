import { Card } from "@/components/ui/card"

export function ActivityTimeline() {
  const activities = [
    {
      id: 1,
      title: "Client Meeting",
      description: "Project meeting with john @10:15am",
      person: "Lester McCarthy (Client)",
      role: "CEO of Infibeam",
      time: "Today",
      dot: "orange",
      avatar: "👤",
    },
    {
      id: 2,
      title: "Create a new project for client",
      description: "Add files to new design folder",
      time: "2 Day Ago",
      dot: "purple",
    },
    {
      id: 3,
      title: "Shared 2 New Project Files",
      description: "Sent by Mollie Dixon",
      badges: ["App Guidelines", "Testing Results"],
      time: "6 Day Ago",
      dot: "cyan",
    },
    {
      id: 4,
      title: "Project status updated",
      description: "WooCommerce iOS App Completed",
      time: "10 Day Ago",
      dot: "gray",
    },
  ]

  const getDotColor = (dot: string) => {
    switch (dot) {
      case "orange":
        return "bg-orange-400"
      case "purple":
        return "bg-purple-500"
      case "cyan":
        return "bg-cyan-400"
      case "gray":
        return "bg-gray-400"
      default:
        return "bg-gray-300"
    }
  }

  return (
    <Card className="p-3 sm:p-4 md:p-6 h-full flex flex-col">
      <div className="flex justify-between items-center mb-4 sm:mb-6">
        <div className="flex items-center gap-2">
          <div className="w-4 sm:w-5 h-4 sm:h-5 flex items-center justify-center text-sm sm:text-base">📋</div>
          <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 dark:text-white">
            Activity Timeline
          </h3>
        </div>
        <button className="text-gray-400 dark:text-white hover:text-gray-600 dark:hover:bg-white text-sm sm:text-base">
          ⋮
        </button>
      </div>

      <div className="space-y-3 sm:space-y-4 md:space-y-6 flex-1 overflow-y-auto">
        {activities.map((activity, idx) => (
          <div key={activity.id} className="flex gap-3 sm:gap-4">
            <div className="flex flex-col items-center">
              <div className={`w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full ${getDotColor(activity.dot)}`}></div>
              {idx < activities.length - 1 && <div className="w-0.5 h-10 sm:h-12 bg-gray-200 dark:bg-black mt-2"></div>}
            </div>
            <div className="flex-1 pb-4">
              <div className="flex justify-between items-start gap-2 sm:gap-3">
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs sm:text-sm font-semibold text-gray-800 dark:text-white">{activity.title}</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{activity.description}</p>
                  {activity.person && (
                    <div className="flex items-center gap-2 mt-2">
                      <div className="w-5 sm:w-6 h-5 sm:h-6 rounded-full bg-cyan-400 flex items-center justify-center text-xs flex-shrink-0">
                        👤
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-medium text-gray-700 dark:text-white truncate">{activity.person}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{activity.role}</p>
                      </div>
                    </div>
                  )}
                  {activity.badges && (
                    <div className="flex gap-2 mt-2 flex-wrap">
                      {activity.badges.map((badge, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-gray-100 dark:bg-black text-gray-700 dark:text-white px-2 py-1 rounded whitespace-nowrap"
                        >
                          {badge === "App Guidelines" ? "📄" : "✅"} {badge}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <span className="text-xs text-gray-400 dark:text-gray-500 flex-shrink-0">{activity.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
