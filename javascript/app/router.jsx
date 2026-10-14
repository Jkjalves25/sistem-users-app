import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Sidenav from "../components/Sidenav";
import DepartamentManagement from "../components/Departments/DepartmentsManagement";
import App from "../src/App";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <>
        <Sidenav />

        <Routes>
          <Route path="/departments" element={<DepartamentManagement />}/>
          <Route path="/dashboard" element={<App/>}/>

          <Route
            path="*"
            element={<Navigate to="/" replace />}
          />
        </Routes>
      </>
    </BrowserRouter>
  );
}