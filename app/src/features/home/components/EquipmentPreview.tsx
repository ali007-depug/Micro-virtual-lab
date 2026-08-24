import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {Button} from "@/components/ui/button";
import { Microscope, FlaskConical, Thermometer } from "lucide-react"
import {useEquipmentPreview} from "../hooks/useEquipmentReview"

const ICONS = { microscope: Microscope, flask: FlaskConical, autoclave: Thermometer }

export default function EquipmentPreview() {
  const { items } = useEquipmentPreview()

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <span className="font-mono text-xs tracking-[0.2em] text-culture uppercase">On the bench</span>
          <h2 className="mt-2 font-display text-3xl font-semibold text-ink">Equipment you'll work with</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          {items.map((item) => {
            const Icon = ICONS[item.icon as keyof typeof ICONS] ?? Microscope
            return (
              <Card key={item.id} className="border-ink/10 hover:border-colony/50 transition-colors">
                <CardHeader className="flex flex-row items-center gap-3">
                  <div className="rounded-full bg-colony/10 p-2">
                    <Icon className="h-5 w-5 text-colony" />
                  </div>
                  <CardTitle className="font-display text-base text-ink">{item.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-ink/70">{item.description}</CardContent>
              </Card>
            )
          })}
        </div>
        <div className="mt-10 text-center">
          <Button variant="outline" className="border-culture text-culture hover:bg-culture/10">
            View full equipment library
          </Button>
        </div>
      </div>
    </section>
  )
}