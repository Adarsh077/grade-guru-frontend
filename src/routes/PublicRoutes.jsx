import { LoginScreen } from "@/pages";
import { Navigate, Route, Routes } from "react-router-dom";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginScreen />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};
export default PublicRoutes;
