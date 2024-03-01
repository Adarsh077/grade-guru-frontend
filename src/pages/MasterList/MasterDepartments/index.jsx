import { useEffect } from "react";

import { Plus } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

import Breadcrumb from "@/components/Breadcrumb";
import CaslCan from "@/components/CaslCan";
import FetchData from "@/components/FetchData";
import { Button } from "@/components/ui/button";
import caslEnum from "@/constants/casl.enum";
// import { AddDepartmentDailog } from "@/features";
import AddMasterDepartmentDailog from "@/features/MasterList/Department/AddDepartment";
import { reset } from "@/store/breadcrumb/breadcrumb.slice";
import { getAllMasterDepartments } from "@/store/master-list/department/department.actions";
import { masterDepartmentErrorSelector } from "@/store/master-list/department/department.selectors";

import MasterDepartments from "./MasterDepartments";

const MasterDepartmentRoot = () => {
  const dispatch = useDispatch();
  const masterDepartmentError = useSelector(masterDepartmentErrorSelector);

  useEffect(() => {
    dispatch(reset());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div className="mb-4 grid grid-cols-12 justify-between">
        <div className="md:col-span-9 xl:col-span-9">
          <Breadcrumb className="-translate-x-4" />
        </div>
        <div className="md:col-span-3 xl:col-span-3">
          <div className="flex justify-end">
            <CaslCan
              requiredAbilities={[
                {
                  action: caslEnum.actions.create,
                  subject: caslEnum.subjects.departments,
                },
              ]}
            >
              <AddMasterDepartmentDailog>
                <Button>
                  <Plus className="mr-2 h-4 w-4" /> Add Department
                </Button>
              </AddMasterDepartmentDailog>
            </CaslCan>
          </div>
        </div>
      </div>
      <FetchData
        loadFirstThenRender
        error={masterDepartmentError}
        dispatchFunction={getAllMasterDepartments()}
      >
        <MasterDepartments />
      </FetchData>
    </div>
  );
};
export default MasterDepartmentRoot;
