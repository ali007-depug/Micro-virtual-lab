import type { CategoryMeta } from "../types"

export const categories: (CategoryMeta & { icon: string; imageUrl?: string })[] = [
  { id: "core", name: "Core Laboratory Equipment", nameAr: "الأجهزة الأساسية", accent: "colony", icon: "thermometer", imageUrl: "/images/categories/core.jpg" },
  { id: "culture", name: "Culture & Identification Tools", nameAr: "مطلبات زراعة البكتيريا", accent: "agar", icon: "flask-conical", imageUrl: "/images/categories/culture.jpg" },
  { id: "microscopy", name: "Microscopy & Staining", nameAr: "الصبغ والفحص المجهري", accent: "culture", icon: "microscope", imageUrl: "/images/categories/microscopy.jpg" },
  { id: "biochemical", name: "Biochemical & Rapid Tests", nameAr: "الكيمياء", accent: "colony", icon: "beaker", imageUrl: "/images/categories/biochemical.jpg" },
  { id: "molecular", name: "Molecular Diagnostics", nameAr: "أجهزة التشخيص الجزيئي الحديث", accent: "culture", icon: "dna", imageUrl: "/images/categories/molecular.jpg" },
  { id: "immunology", name: "Immunology & Serology", nameAr: "أدوات قسم المناعة", accent: "agar", icon: "clipboard-check", imageUrl: "/images/categories/immunology.jpg" },
]