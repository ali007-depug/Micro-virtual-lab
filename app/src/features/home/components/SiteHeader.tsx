import { Link } from "react-router-dom"
import { ShieldCheck } from "lucide-react"

export default function SiteHeader() {
  return (
    <header className="flex items-center justify-between px-6 py-4">
      <Link to="/" className="font-display text-lg font-semibold text-ink">
        Micro<span className="text-culture">Lab</span>
      </Link>
      <Link
        to="/admin/login"
        className="flex items-center gap-1.5 text-xs font-mono text-ink/50 hover:text-culture transition-colors"
      >
        <ShieldCheck className="h-3.5 w-3.5" /> Admin
      </Link>
    </header>
  )
}