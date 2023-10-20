import { HomeLayout } from "@/layouts";
import { DepartmentsScreen } from "@/pages";
import { Navigate, Route, Routes } from "react-router-dom";

const ProtectedRoutes = () => {
  return (
    <Routes>
      <Route path="/departments" element={<HomeLayout />}>
        <Route path="" element={<DepartmentsScreen />} />
      </Route>
      <Route path="*" element={<Navigate to="/departments" replace />} />
    </Routes>
  );
};
export default ProtectedRoutes;
