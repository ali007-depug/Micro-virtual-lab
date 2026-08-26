import { Outlet } from "react-router-dom"
import { EquipmentSidebar } from "./EquipmentSidebar"

export default function EquipmentLayout() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-10 flex gap-8">
      <EquipmentSidebar />
      <div className="flex-1 min-w-0">
        <Outlet />
      </div>
    </div>
  )
}