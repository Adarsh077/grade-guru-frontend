import { useSelector } from "react-redux";
import Departments from "./Departments";
import { departmentErrorSelector } from "@/store/department/department.selectors";
import Breadcrumb from "@/components/Breadcrumb";
import { AddDepartmentDailog } from "@/features";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import FetchData from "@/components/FetchData";
import { useQueryString } from "@/hooks";
import { getAllDepartments } from "@/store/department/department.actions";

const DepartmentRoot = () => {
  const departmentError = useSelector(departmentErrorSelector);
  const { parsedQueryString } = useQueryString();

  return (
    <div>
      <div className="mb-4 grid grid-cols-12 justify-between">
        <div className="md:col-span-9 xl:col-span-10">
          <Breadcrumb className="-translate-x-4" />
        </div>
        <div className="md:col-span-3 xl:col-span-2">
          <div className="flex justify-end">
            <AddDepartmentDailog>
              <Button>
                <Plus className="mr-2 h-4 w-4" /> Add Department
              </Button>
            </AddDepartmentDailog>
          </div>
        </div>
      </div>
      <FetchData
        loadFirstThenRender
        error={departmentError}
        shouldNotFetch={!parsedQueryString.batch}
        dispatchFunction={getAllDepartments({
          batch: parsedQueryString.batch,
        })}
        dependencies={[parsedQueryString.batch]}
      >
        <Departments />
      </FetchData>
    </div>
  );
};
export default DepartmentRoot;
