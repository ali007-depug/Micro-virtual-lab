// MVP: static data. Later, swap the return for a Firestore query
// (orderBy + limit) — the component's API (items) stays the same.
export function useEquipmentPreview() {
  const items = [
    {
      id: "microscope",
      name: "Compound Microscope",
      icon: "microscope",
      description: "Observe stained specimens at up to 1000x magnification.",
    },
    {
      id: "petri",
      name: "Petri Dish & Agar",
      icon: "flask",
      description: "Culture and isolate bacterial colonies safely.",
    },
    {
      id: "autoclave",
      name: "Autoclave",
      icon: "autoclave",
      description: "Sterilize tools and media before every experiment.",
    },
  ];
  return { items };
}
