import { Outlet } from "react-router-dom";

import MasterListSidebar from "./components/MasterListSidebar";
import Navbar from "../components/Navbar";

const MasterListLayout = () => {
  return (
    <div>
      <Navbar disableBatchSelector />
      <div className="md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto py-8">
        <div className="grid grid-cols-12 gap-3">
          <div className="col-span-3">
            <MasterListSidebar />
          </div>
          <div className="col-span-9">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};
export default MasterListLayout;
