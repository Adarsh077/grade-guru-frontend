import { Plus } from "lucide-react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import AppBreadcrumb from "@/components/Breadcrumb";
import FetchData from "@/components/FetchData";
import { Button } from "@/components/ui/button";
import AddMasterSemesterDailog from "@/features/MasterList/Semester/AddSemester";
import { getAllMasterSemesters } from "@/store/master-list/semester/semester.actions";
import { masterSemesterErrorSelector } from "@/store/master-list/semester/semester.selectors";

import MasterSemesters from "./MasterSemesters";

const MasterSemestersRoot = () => {
  const { departmentId } = useParams();
  const masterSemesterError = useSelector(masterSemesterErrorSelector);

  return (
    <div>
      <div className="mb-4 grid grid-cols-12 justify-between">
        <div className="md:col-span-9">
          <AppBreadcrumb className="-translate-x-4" />
        </div>
        <div className="md:col-span-3">
          <div className="flex justify-end">
            <AddMasterSemesterDailog departmentId={departmentId}>
              <Button>
                <Plus className="mr-2 h-4 w-4" /> Add Semester
              </Button>
            </AddMasterSemesterDailog>
          </div>
        </div>
      </div>
      <FetchData
        loadFirstThenRender
        error={masterSemesterError}
        shouldNotFetch={!departmentId}
        dispatchFunction={getAllMasterSemesters({ departmentId })}
        dependencies={[departmentId]}
      >
        <MasterSemesters />
      </FetchData>
    </div>
  );
};
export default MasterSemestersRoot;
