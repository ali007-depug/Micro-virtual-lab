import type { Accent } from "../types"

// Tailwind needs static class names (not interpolated strings) to detect
// them at build time, so every place that colors by category imports this
// map instead of building a class string dynamically.
export const accentBg: Record<Accent, string> = {
  colony: "bg-colony/10 text-colony",
  culture: "bg-culture/10 text-culture",
  agar: "bg-agar/10 text-agar",
}

export const accentText: Record<Accent, string> = {
  colony: "text-colony",
  culture: "text-culture",
  agar: "text-agar",
}

export const accentBorder: Record<Accent, string> = {
  colony: "border-colony/50",
  culture: "border-culture/50",
  agar: "border-agar/50",
}