export function LastTransaction() {
  const transactions = [
    { id: 1, card: "*4230", type: "Credit", date: "17 Mar 2022", status: "Verified", trend: "+$1,678", logo: "visa" },
    {
      id: 2,
      card: "*5578",
      type: "Credit",
      date: "12 Feb 2022",
      status: "Rejected",
      trend: "-$839",
      logo: "mastercard",
    },
    { id: 3, card: "*4567", type: "ATM", date: "28 Feb 2022", status: "Verified", trend: "+$435", logo: "amex" },
    { id: 4, card: "*5699", type: "Credit", date: "08 Jan 2022", status: "Pending", trend: "+$2,345", logo: "visa" },
    { id: 5, card: "*5699", type: "Credit", date: "08 Jan 2022", status: "Rejected", trend: "+$2,345", logo: "visa" },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Verified":
        return "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
      case "Rejected":
        return "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"
      case "Pending":
        return "bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-300"
      default:
        return "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"
    }
  }

  const getCardLogo = (logo: string) => {
    const logos: { [key: string]: string } = {
      visa: "💳",
      mastercard: "💳",
      amex: "💳",
    }
    return logos[logo] || "💳"
  }

  return (
    <div className="bg-white h-full dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4 md:p-6 shadow-sm">
      {/* Header */}
      <div className="flex justify-between items-center mb-4 md:mb-6">
        <h3 className="text-base md:text-lg font-semibold text-gray-800 dark:text-white">Last Transaction</h3>
        <button className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-400">⋮</button>
      </div>

      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-800">
              <th className="text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase pb-3">Card</th>
              <th className="text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase pb-3">Date</th>
              <th className="text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase pb-3">
                Status
              </th>
              <th className="text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase pb-3">Trend</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx) => (
              <tr
                key={tx.id}
                className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition"
              >
                <td className="py-4 flex items-center gap-2">
                  <span className="text-xl">{getCardLogo(tx.logo)}</span>
                  <div>
                    <p className="text-sm font-medium text-gray-800 dark:text-white">{tx.card}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{tx.type}</p>
                  </div>
                </td>
                <td className="py-4 text-sm text-gray-600 dark:text-gray-300">{tx.date}</td>
                <td className="py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(tx.status)}`}>
                    {tx.status}
                  </span>
                </td>
                <td
                  className={`py-4 text-sm font-medium ${tx.trend.startsWith("+") ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}
                >
                  {tx.trend}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="md:hidden space-y-3">
        {transactions.map((tx) => (
          <div
            key={tx.id}
            className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="text-xl">{getCardLogo(tx.logo)}</span>
                <div>
                  <p className="text-sm font-medium text-gray-800 dark:text-white">{tx.card}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{tx.type}</p>
                </div>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(tx.status)}`}>
                {tx.status}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-xs text-gray-500 dark:text-gray-400">{tx.date}</p>
              <p
                className={`text-sm font-semibold ${tx.trend.startsWith("+") ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}
              >
                {tx.trend}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
