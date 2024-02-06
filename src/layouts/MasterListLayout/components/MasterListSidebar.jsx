import { GraduationCap, Users } from "lucide-react";

import MasterListSidebarItem from "./MasterListSidebarItem";

const MasterListSidebar = () => {
  return (
    <div>
      <h2 className="mb-2 text-xs font-semibold tracking-tight text-gray-500">
        Master List
      </h2>
      <div className="space-y-1">
        <MasterListSidebarItem
          isSelected={true}
          startIcon={<Users className="w-4 h-4" />}
          to="/master-list/students"
        >
          Students
        </MasterListSidebarItem>
        <MasterListSidebarItem
          isSelected={false}
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
