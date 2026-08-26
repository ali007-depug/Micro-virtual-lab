import { NavLink } from "react-router-dom"
import { categories } from "../data/categories"
import { equipmentCatalog } from "../data/equipmentCatalog"
import { getIcon } from "../shared/icon-registry"

export function EquipmentSidebar() {
  return (
    <aside className="hidden lg:block w-64 shrink-0">
      <div className="sticky top-24">
        <span className="px-3 font-mono text-xs tracking-[0.2em] text-ink/40 uppercase">
          Categories
        </span>

        <nav className="mt-3 flex flex-col gap-1">
          <NavLink
            to="/equipments"
            end
            className={({ isActive }) =>
              `rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                isActive ? "bg-culture/10 text-culture" : "text-ink/70 hover:bg-ink/5"
              }`
            }
          >
            All Equipment
          </NavLink>

          {categories.map((category) => {
            const Icon = getIcon(category.icon)
            const count = equipmentCatalog.filter((e) => e.category === category.id).length

            return (
              <NavLink
                key={category.id}
                to={`/equipments/${category.id}`}
                className={({ isActive }) =>
                  `flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    isActive ? "bg-culture/10 text-culture" : "text-ink/70 hover:bg-ink/5"
                  }`
                }
              >
                <Icon className="h-4 w-4 shrink-0" />
                <span className="flex-1 truncate">{category.name}</span>
                <span className="text-xs text-ink/30">{count}</span>
              </NavLink>
            )
          })}
        </nav>
      </div>
    </aside>
  )
}