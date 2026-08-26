import { useParams, Navigate } from "react-router-dom"
import { categories } from "../data/categories"
import { equipmentCatalog } from "../data/equipmentCatalog"
import { EquipmentGrid } from "../shared/EquipmentGrid"
import { accentText } from "../shared/accent"

export default function EquipmentCategoryPage() {
  const { categoryId } = useParams<{ categoryId: string }>()
  const category = categories.find((c) => c.id === categoryId)
  if (!category) return <Navigate to="/equipments" replace />
  const items = equipmentCatalog.filter((e) => e.category === category.id)

  return (
    <div>
      <div className="mb-10">
        <span className={`font-mono text-xs tracking-[0.2em] uppercase ${accentText[category.accent]}`}>
          {category.nameAr}
        </span>
        <h1 className="mt-1 font-display text-2xl font-semibold text-ink">{category.name}</h1>
      </div>
      <EquipmentGrid items={items} accent={category.accent} />
    </div>
  )
}