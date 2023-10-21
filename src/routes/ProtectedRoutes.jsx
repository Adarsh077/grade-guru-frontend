import { HomeLayout } from "@/layouts";
import { DepartmentsScreen, SemestersScreen } from "@/pages";
import { Navigate, Route, Routes } from "react-router-dom";

const ProtectedRoutes = () => {
  return (
    <Routes>
      <Route path="/departments" element={<HomeLayout />}>
        <Route path="" element={<DepartmentsScreen />} />
        <Route path=":departmentId/semesters" element={<SemestersScreen />} />
      </Route>
      <Route path="*" element={<Navigate to="/departments" replace />} />
    </Routes>
  );
};
export default ProtectedRoutes;
