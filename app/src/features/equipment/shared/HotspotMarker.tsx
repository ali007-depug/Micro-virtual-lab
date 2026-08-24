import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import type { Hotspot3D } from "../types";
import { Button } from "@/components/ui/button";

export function HotspotMarker({
  hotspot,
  onClick,
}: {
  hotspot: Hotspot3D;
  onClick?: () => void;
}) {
  return (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" />}>
        <button
          type="button"
          onClick={onClick}
          className="group relative flex items-center justify-center"
          aria-label={hotspot.label}
        >
          <span className="absolute h-6 w-6 rounded-full bg-colony/30 animate-ping" />
          <span className="relative h-3.5 w-3.5 rounded-full bg-colony border-2 border-white shadow-sm group-hover:bg-culture transition-colors" />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-56 border-ink/10">
        <p className="font-display text-sm font-semibold text-ink">
          {hotspot.label}
        </p>
        <p className="mt-1 text-xs text-ink/70 leading-relaxed">
          {hotspot.description}
        </p>
      </PopoverContent>
    </Popover>
  );
}
