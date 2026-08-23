import type { CategoryId, Accent } from "../types"

export const categories: { id: CategoryId; name: string; nameAr: string; accent: Accent }[] = [
  { id: "core", name: "Core Laboratory Equipment", nameAr: "الأجهزة الأساسية", accent: "colony" },
  { id: "culture", name: "Culture & Identification Tools", nameAr: "مطلبات زراعة البكتيريا", accent: "agar" },
  { id: "microscopy", name: "Microscopy & Staining", nameAr: "الصبغ والفحص المجهري", accent: "culture" },
  { id: "biochemical", name: "Biochemical & Rapid Tests", nameAr: "الكيمياء", accent: "colony" },
  { id: "molecular", name: "Molecular Diagnostics", nameAr: "أجهزة التشخيص الجزيئي الحديث", accent: "culture" },
  { id: "immunology", name: "Immunology & Serology", nameAr: "أدوات قسم المناعة", accent: "agar" },
]