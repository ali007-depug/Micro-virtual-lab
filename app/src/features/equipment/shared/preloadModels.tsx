import { useGLTF } from "@react-three/drei"
import { equipmentCatalog } from "../data/equipmentCatalog"

// Call once, at module scope in the catalog page, so every sourced .glb
// starts fetching immediately instead of popping in as each card scrolls into view.
export function preloadAllModels() {
  equipmentCatalog.forEach((item) => {
    if (item.modelUrl) useGLTF.preload(item.modelUrl)
  })
}