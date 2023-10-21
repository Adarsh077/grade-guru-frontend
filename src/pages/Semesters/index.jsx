import FetchData from "@/components/FetchData";
import Semesters from "./Semesters";
import { useSelector } from "react-redux";
import { semesterErrorSelector } from "@/store/semester/semester.selectors";
import { getAllSemesters } from "@/store/semester/semester.actions";
import { useParams } from "react-router-dom";

const SemestersRoot = () => {
  const { departmentId } = useParams();
  const semesterError = useSelector(semesterErrorSelector);

  return (
    <FetchData
      loadFirstThenRender
      error={semesterError}
      shouldNotFetch={!departmentId}
      dispatchFunction={getAllSemesters({ departmentId })}
      dependencies={[departmentId]}
    >
      <Semesters />
    </FetchData>
  );
};
export default SemestersRoot;
