import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MySubjectsLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto py-8">
        <Outlet />
      </div>
    </div>
  );
};
export default MySubjectsLayout;
