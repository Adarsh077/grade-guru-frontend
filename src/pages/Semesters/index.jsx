import FetchData from "@/components/FetchData";
import Semesters from "./Semesters";
import { useSelector } from "react-redux";
import { semesterErrorSelector } from "@/store/semester/semester.selectors";
import { getAllSemesters } from "@/store/semester/semester.actions";
import { useParams } from "react-router-dom";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const SemestersRoot = () => {
  const { departmentId } = useParams();
  const semesterError = useSelector(semesterErrorSelector);

  return (
    <div>
      <div className="mb-4 grid grid-cols-12 justify-between">
        <div className="md:col-span-9 xl:col-span-10">
          <Breadcrumb className="-translate-x-4" />
        </div>
        <div className="md:col-span-3 xl:col-span-2">
          <div className="flex justify-end">
            <Button>
              <Plus className="mr-2 h-4 w-4" /> Add Semester
            </Button>
          </div>
        </div>
      </div>
      <FetchData
        loadFirstThenRender
        error={semesterError}
        shouldNotFetch={!departmentId}
        dispatchFunction={getAllSemesters({ departmentId })}
        dependencies={[departmentId]}
      >
        <Semesters />
      </FetchData>
    </div>
  );
};
export default SemestersRoot;
