import { ArrowLeft } from "lucide-react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

import FetchData from "@/components/FetchData";
import { Button } from "@/components/ui/button";
import { singleBatchSelector } from "@/store/batch/batch.selectors";
import { getAllMasterDepartments } from "@/store/master-list/department/department.actions";
import { masterDepartmentErrorSelector } from "@/store/master-list/department/department.selectors";

const SelectDepartmentRoot = () => {
  const { batchYear } = useParams();
  const batch = useSelector(singleBatchSelector(batchYear));

  return (
    <div>
      <div className="mb-4 grid grid-cols-12 justify-between">
        <div className="md:col-span-9 xl:col-span-10">
          <div className="flex items-center space-x-2">
            <Link to={-1}>
              <Button variant="ghost" size="icon">
                <ArrowLeft />
              </Button>
            </Link>
            <h2 className="text-lg font-medium">{batch.name}</h2>
          </div>
        </div>
        <div className="md:col-span-3 xl:col-span-2"></div>
      </div>

      <FetchData
        loadFirstThenRender
        error={masterDepartmentErrorSelector}
        dispatchFunction={getAllMasterDepartments()}
      ></FetchData>
    </div>
  );
};
export default SelectDepartmentRoot;
