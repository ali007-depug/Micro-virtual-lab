import { Link, NavLink, useLocation, useNavigate } from "react-router-dom"
import { ArrowLeft, ShieldCheck } from "lucide-react"

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/equipments", label: "Equipment" },
  { to: "/experiments", label: "Experiments" },
]

export default function Header() {
  const navigate = useNavigate()
  const location = useLocation()
  const isHome = location.pathname === "/"

  return (
    <header className="sticky top-0 z-50 bg-ink/80 backdrop-blur border-b border-glass/10 px-6 py-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
        {/* Left: back button + logo */}
        <div className="flex items-center gap-3">
          {!isHome && (
            <button
              type="button"
              onClick={() => navigate(-1)}
              aria-label="Go back"
              className="flex items-center justify-center rounded-full p-1.5 text-glass/60 hover:text-colony hover:bg-glass/10 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
          )}
          <Link to="/" className="font-display text-lg font-semibold text-glass whitespace-nowrap">
            Micro<span className="text-culture">Lab</span>
          </Link>
        </div>

        {/* Center: nav links */}
        <nav className="hidden sm:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `font-bold text-sm tracking-wide uppercase transition-colors ${
                  isActive ? "text-colony" : "text-glass/60 hover:text-glass"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Right: admin link */}
        <Link
          to="/admin/login"
          className="flex items-center gap-1.5 text-xs font-mono text-glass/50 hover:text-culture transition-colors whitespace-nowrap"
        >
          <ShieldCheck className="h-3.5 w-3.5" /> Admin
        </Link>
      </div>
    </header>
  )
}