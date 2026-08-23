import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getIcon } from "./icon-registry"
import { accentBg } from "./accent"
import type { Accent } from "../types"

interface Props {
  name: string
  icon: string
  description: string
  imageUrl?: string
  accent?: Accent
}

export function SimpleEquipmentCard({ name, icon, description, imageUrl, accent = "colony" }: Props) {
  const Icon = getIcon(icon)

  return (
    <Card className="overflow-hidden border-ink/10 hover:border-colony/40 transition-colors h-full">
      {imageUrl ? (
        <div className="aspect-video w-full bg-glass">
          <img src={imageUrl} alt={name} loading="lazy" className="h-full w-full object-cover" />
        </div>
      ) : (
        <div className={`flex aspect-video w-full items-center justify-center ${accentBg[accent]}`}>
          <Icon className="h-10 w-10 opacity-60" />
        </div>
      )}
      <CardHeader className="flex flex-row items-center gap-3">
        <div className={`rounded-full p-2 ${accentBg[accent]}`}><Icon className="h-4 w-4" /></div>
        <CardTitle className="font-display text-sm text-ink">{name}</CardTitle>
      </CardHeader>
      <CardContent className="text-xs text-ink/70 leading-relaxed">{description}</CardContent>
    </Card>
  )
}