import { Link } from "react-router-dom"
import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import { categories } from "../data/categories"
import { equipmentCatalog } from "../data/equipmentCatalog"

export default function EquipmentHubPage() {
  return (
    <main className="px-6 py-16 max-w-5xl mx-auto">
      <div className="mb-12">
        <span className="font-mono text-xs tracking-[0.2em] text-culture uppercase">Equipment Library</span>
        <h1 className="mt-2 font-display text-3xl font-semibold text-ink">Choose a category</h1>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => {
          const count = equipmentCatalog.filter((e) => e.category === category.id).length

          return (
            <Link key={category.id} to={`/equipments/${category.id}`}>
              <Card className="group relative h-48 overflow-hidden border-ink/10 transition-transform hover:-translate-y-0.5">
                {/* Background photo */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                  style={{ backgroundImage: `url('${category.imageUrl}')` }}
                />
                {/* Ink overlay for text readability, matches Hero treatment */}
                <div className="absolute inset-0 bg-ink/50 group-hover:bg-ink/60 transition-colors" />
                <div className="absolute inset-0 bg-linear-to-t from-ink/30 via-ink/20 to-transparent" />

                {/* Content */}
                <div className="relative flex h-full flex-col justify-end p-5">
                  <h2 className="font-display text-lg font-semibold text-glass">{category.name}</h2>
                  <p className={`mt-1 font-[cairo] text-md text-white text-center uppercase tracking-wide `}>
                    {category.nameAr}
                  </p>
                  <div className="mt-3 flex items-center justify-between text-sm text-glass/60">
                    <span>{count} tools</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Card>
            </Link>
          )
        })}
      </div>
    </main>
  )
}