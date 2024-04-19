import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import AppBreadcrumb from "@/components/Breadcrumb";
import FetchData from "@/components/FetchData";
import { getAllSemesters } from "@/store/semester/semester.actions";
import { semesterErrorSelector } from "@/store/semester/semester.selectors";

import Semesters from "./Semesters";

const SemestersRoot = () => {
  const { departmentId } = useParams();
  const semesterError = useSelector(semesterErrorSelector);

  return (
    <div>
      <div className="mb-4 grid grid-cols-12 justify-between">
        <div className="md:col-span-9 xl:col-span-10">
          <AppBreadcrumb className="-translate-x-4" />
        </div>
        <div className="md:col-span-3 xl:col-span-2"></div>
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
