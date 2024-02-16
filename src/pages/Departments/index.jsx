import { useEffect } from "react";

import { Plus } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

import Breadcrumb from "@/components/Breadcrumb";
import CaslCan from "@/components/CaslCan";
import FetchData from "@/components/FetchData";
import { Button } from "@/components/ui/button";
import caslEnum from "@/constants/casl.enum";
import { AddDepartmentDailog } from "@/features";
import { useQueryString } from "@/hooks";
import { reset } from "@/store/breadcrumb/breadcrumb.slice";
import { getAllDepartments } from "@/store/department/department.actions";
import { departmentErrorSelector } from "@/store/department/department.selectors";

import Departments from "./Departments";

const DepartmentRoot = () => {
  const dispatch = useDispatch();
  const departmentError = useSelector(departmentErrorSelector);
  const { parsedQueryString } = useQueryString();

  useEffect(() => {
    dispatch(reset());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div className="mb-4 grid grid-cols-12 justify-between">
        <div className="md:col-span-9 xl:col-span-10">
          <Breadcrumb className="-translate-x-4" />
        </div>
        <div className="md:col-span-3 xl:col-span-2">
          <div className="flex justify-end">
            <CaslCan
              requiredAbilities={[
                {
                  action: caslEnum.actions.create,
                  subject: caslEnum.subjects.departments,
                },
              ]}
            >
              <AddDepartmentDailog>
                <Button>
                  <Plus className="mr-2 h-4 w-4" /> Add Department
                </Button>
              </AddDepartmentDailog>
            </CaslCan>
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
