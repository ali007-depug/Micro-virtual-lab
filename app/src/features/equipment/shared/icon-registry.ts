import {
  Thermometer, Gauge, ShieldAlert, Flame, Sun, Snowflake, Waves, RotateCw,
  Microscope, Hash, Scale, Wind, Circle, Wand2, Package, Feather, TestTube,
  FlaskConical, Droplet, PenTool, Layers, AlignJustify, Beaker, ListChecks,
  CircleDot, Ruler, Cpu, Grid3x3, Camera, Pipette, Dna, Zap, Monitor,
  ClipboardCheck, Syringe, type LucideIcon,
} from "lucide-react"

const registry: Record<string, LucideIcon> = {
  thermometer: Thermometer, gauge: Gauge, "shield-alert": ShieldAlert, flame: Flame,
  sun: Sun, snowflake: Snowflake, waves: Waves, "rotate-cw": RotateCw,
  microscope: Microscope, hash: Hash, scale: Scale, wind: Wind, circle: Circle,
  "wand-2": Wand2, package: Package, feather: Feather, "test-tube": TestTube,
  "flask-conical": FlaskConical, droplet: Droplet, "pen-tool": PenTool,
  layers: Layers, "align-justify": AlignJustify, beaker: Beaker,
  "list-checks": ListChecks, "circle-dot": CircleDot, ruler: Ruler, cpu: Cpu,
  "grid-3x3": Grid3x3, camera: Camera, pipette: Pipette, dna: Dna, zap: Zap,
  monitor: Monitor, "clipboard-check": ClipboardCheck, syringe: Syringe,
}

export function getIcon(key: string): LucideIcon {
  return registry[key] ?? Beaker // safe fallback — a typo'd key never crashes the app
}