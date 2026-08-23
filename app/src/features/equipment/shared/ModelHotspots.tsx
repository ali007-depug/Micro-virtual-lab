import { Html } from "@react-three/drei"
import { HotspotMarker } from "./HotspotMarker"
import type { Hotspot3D } from "../types"

interface Props {
  hotspots: Hotspot3D[]
  interactiveKeys?: string[]
  onToggle: (key: string) => void
}

export function ModelHotspots({ hotspots, interactiveKeys = [], onToggle }: Props) {
  return (
    <>
      {hotspots.map((h) => (
        <Html key={h.id} position={h.position} center distanceFactor={8} occlude>
          <HotspotMarker hotspot={h} onClick={interactiveKeys.includes(h.id) ? () => onToggle(h.id) : undefined} />
        </Html>
      ))}
    </>
  )
}