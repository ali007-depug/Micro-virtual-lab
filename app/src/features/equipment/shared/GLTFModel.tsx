import { useEffect, useMemo, useRef } from "react"
import { useGLTF } from "@react-three/drei"
import * as THREE from "three"
import { ModelHotspots } from "./ModelHotspots"
import type { Hotspot3D } from "../types"

interface Props {
  url: string
  scale?: number
  hotspots?: Hotspot3D[]
  interactiveKeys?: string[]
  onToggle?: (key: string) => void
}

export function GLTFModel({ url, scale = 1, hotspots = [], interactiveKeys = [], onToggle = () => {} }: Props) {
  const { scene } = useGLTF(url)
  const groupRef = useRef<THREE.Group>(null!)

  // Auto-center and auto-scale so every downloaded model — regardless of its
  // original size/origin — lands consistently in the same viewer frame.
  const cloned = useMemo(() => scene.clone(true), [scene])
  useEffect(() => {
    const box = new THREE.Box3().setFromObject(cloned)
    const size = new THREE.Vector3()
    const center = new THREE.Vector3()
    box.getSize(size)
    box.getCenter(center)
    cloned.position.sub(center)
    const maxDim = Math.max(size.x, size.y, size.z) || 1
    const normalizedScale = (2 / maxDim) * scale
    groupRef.current?.scale.setScalar(normalizedScale)
    cloned.traverse((obj) => {
      if ((obj as THREE.Mesh).isMesh) {
        obj.castShadow = true
        obj.receiveShadow = true
      }
    })
  }, [cloned, scale])

  return (
    <group ref={groupRef}>
      <primitive object={cloned} />
      <ModelHotspots hotspots={hotspots} interactiveKeys={interactiveKeys} onToggle={onToggle} />
    </group>
  )
}