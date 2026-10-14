
import { Routes, Route, Navigate } from "react-router-dom";

import DashboardManagement from "../Dashboard/DashboardManagement";
import DepartamentManagement from "../Departments/DepartmentsManagement";

export default function SidenavRoutes() {
  return (
    <Routes>
      <Route path="/dashboard" element={<DashboardManagement />} />

      <Route path="/departments" element={<DepartamentManagement />} />

      <Route path="/" element={<Navigate to="/dashboard" replace />} />

      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}
