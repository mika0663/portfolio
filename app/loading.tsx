import { Loader2 } from "lucide-react"

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-slate-900 z-50">
      <div className="flex flex-col items-center">
        <Loader2 className="w-12 h-12 text-violet-600 animate-spin mb-4" />
        <div className="text-xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 text-transparent bg-clip-text">
          Loading...
        </div>
      </div>
    </div>
  )
}
