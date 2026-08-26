import { SimpleEquipmentCard } from "./SimpleEquipmentCard";
import type { EquipmentEntry, Accent } from "../types";


export function EquipmentGrid({
  items,
  accent,
}: {
  items: EquipmentEntry[];
  accent: Accent;
}) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <SimpleEquipmentCard key={item.id}  {...item} accent={accent} />
      ))}
    </div>
  );
}
