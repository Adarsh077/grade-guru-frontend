import FetchData from "@/components/FetchData";
import Departments from "./Departments";
import { useSelector } from "react-redux";
import { departmentErrorSelector } from "@/store/department/department.selectors";
import { getAllDepartments } from "@/store/department/department.actions";
import { useQueryString } from "@/hooks";

const DepartmentRoot = () => {
  const departmentError = useSelector(departmentErrorSelector);
  const { parsedQueryString } = useQueryString();

  return (
    <FetchData
      loadFirstThenRender
      error={departmentError}
      shouldNotFetch={!parsedQueryString.batch}
      dispatchFunction={getAllDepartments({ batch: parsedQueryString.batch })}
      dependencies={[parsedQueryString.batch]}
    >
      <Departments />
    </FetchData>
  );
};
export default DepartmentRoot;
