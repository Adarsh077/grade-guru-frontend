import { GraduationCap, Users } from "lucide-react";
import { useLocation } from "react-router-dom";

import MasterListSidebarItem from "./MasterListSidebarItem";

const MasterListSidebar = () => {
  const location = useLocation();

  return (
    <div>
      <h2 className="mb-2 text-xs font-semibold tracking-tight text-gray-500">
        Master List
      </h2>
      <div className="space-y-1">
        <MasterListSidebarItem
          isSelected={["/master-list/students", "/master-list/batches"].find(
            (path) => location.pathname.includes(path)
          )}
          startIcon={<Users className="w-4 h-4" />}
          to="/master-list/batches"
        >
          Batches
        </MasterListSidebarItem>
        <MasterListSidebarItem
          isSelected={["/master-list/departments"].find((path) =>
            location.pathname.includes(path)
          )}
          startIcon={<GraduationCap className="w-4 h-4" />}
          to="/master-list/departments"
        >
          Departments
        </MasterListSidebarItem>
      </div>
    </div>
  );
};

export default MasterListSidebar;
