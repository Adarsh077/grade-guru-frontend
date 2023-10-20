import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Breadcrumb from "@/components/Breadcrumb";

const HomeLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-8">
        <Breadcrumb className="mb-6 -translate-x-4" />

        <Outlet />
      </div>
    </div>
  );
};
export default HomeLayout;
