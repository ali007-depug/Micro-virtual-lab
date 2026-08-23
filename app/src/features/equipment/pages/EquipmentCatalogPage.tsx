import { Suspense } from "react"
import { categories } from "../data/categories"
import { equipmentCatalog } from "../data/equipmentCatalog"
import { SketchfabModelCard } from "../shared/SketchFabModelCard"
import { SimpleEquipmentCard } from "../shared/SimpleEquipmentCard"
import { accentText } from "../shared/accent"

function CardSkeleton() {
  return <div className="h-72 animate-pulse rounded-lg bg-panel" />
}

export default function EquipmentCatalogPage() {
  return (
    <main className="px-6 py-16 space-y-20 max-w-6xl mx-auto">
      {categories.map((category) => {
        const items = equipmentCatalog.filter((e) => e.category === category.id)
        if (items.length === 0) return null

        return (
          <section key={category.id}>
            <div className="mb-8">
              <span className={`font-mono text-xs tracking-[0.2em] uppercase ${accentText[category.accent]}`}>
                {category.nameAr}
              </span>
              <h2 className="mt-1 font-display text-2xl font-semibold text-ink">{category.name}</h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((item) =>
                item.modelUrl ? (
                  <Suspense key={item.id} fallback={<CardSkeleton />}>
                    <SketchfabModelCard {...item} modelUrl={item.modelUrl} accent={category.accent} />
                  </Suspense>
                ) : (
                  <SimpleEquipmentCard key={item.id} {...item} accent={category.accent} />
                )
              )}
            </div>
          </section>
        )
      })}
    </main>
  )
}