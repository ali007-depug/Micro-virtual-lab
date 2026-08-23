export interface Hotspot3D {
  id: string;
  position: [number, number, number];
  label: string;
  description: string;
}

export type CategoryId =
  | "core"
  | "culture"
  | "microscopy"
  | "biochemical"
  | "molecular"
  | "immunology";
export type Accent = "colony" | "culture" | "agar";

export interface Attribution {
  author: string;
  sourceUrl: string;
  license: "CC0" | "CC-BY";
}

export interface EquipmentEntry {
  id: string;
  name: string;
  category: CategoryId;
  icon: string;
  description: string;
  modelUrl?: string;
  modelScale?: number;
  imageUrl?: string; // 

  hotspots?: Hotspot3D[];
  interactiveKeys?: string[];
  attribution?: Attribution;
  tier: "interactive" | "simple";
}

export interface CategoryMeta {
  id: CategoryId;
  name: string;
  nameAr: string;
  accent: Accent;
}
