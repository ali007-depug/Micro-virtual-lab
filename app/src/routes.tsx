import { Routes, Route } from "react-router-dom";
import HomePage from "./features/home/pages/page";
import RootLayout from "./Layouts/RootLayout";
import EquipmentCategoryPage from "./features/equipment/pages/EquipmentCategoryPage";
import EquipmentHubPage from "./features/equipment/pages/EquipmentHubPage";
import EquipmentLayout from "./features/equipment/layouts/EquipmentLayout";
export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/equipments" element={<EquipmentLayout />}>
          <Route index element={<EquipmentHubPage />} />
          <Route path=":categoryId" element={<EquipmentCategoryPage />} />
        </Route>{" "}
      </Route>
    </Routes>
  );
}
