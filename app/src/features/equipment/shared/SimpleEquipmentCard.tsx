import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Accent } from "../types";

interface Props {
  name: string;
  icon: string;
  description: string;
  imageUrl?: string;
  accent?: Accent;
}

export function SimpleEquipmentCard({
  name,
  description,
  imageUrl,
}: Props) {
  return (
    <Card className="overflow-hidden border-ink/10 hover:border-colony/40 transition-colors h-full">
      <div className="aspect-video w-full bg-glass">
        <img
          src={`/${imageUrl}`}
          alt={name}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>
      <CardHeader className="flex flex-row items-center gap-3">
        <CardTitle className="font-display text-sm text-ink">{name}</CardTitle>
      </CardHeader>
      <CardContent className="text-xs text-ink/70 leading-relaxed">
        {description}
      </CardContent>
    </Card>
  );
}
