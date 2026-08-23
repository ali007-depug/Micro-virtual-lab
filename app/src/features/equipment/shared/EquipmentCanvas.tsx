import { Suspense, type ReactNode } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, ContactShadows, Environment, Html } from "@react-three/drei"
import { useWebGLSupport } from "../hooks/useWebGLSupport"

function Loader() {
  return <Html center><span className="font-mono text-xs text-ink/60">Loading model…</span></Html>
}

export function EquipmentCanvas({ children }: { children: ReactNode }) {
  const webglSupported = useWebGLSupport()
  if (!webglSupported) {
    return (
      <div className="flex h-full items-center justify-center px-6 text-center">
        <p className="text-sm text-ink/60">Your device doesn't support 3D rendering.</p>
      </div>
    )
  }
  return (
    <Canvas shadows camera={{ position: [3, 2, 4], fov: 40 }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[4, 6, 4]} intensity={1.2} castShadow />
      <Suspense fallback={<Loader />}>
        {children}
        <ContactShadows position={[0, -0.9, 0]} opacity={0.35} blur={2} />
        <Environment preset="city" />
      </Suspense>
      <OrbitControls enablePan={false} minDistance={2} maxDistance={7} maxPolarAngle={Math.PI / 2} />
    </Canvas>
  )
}