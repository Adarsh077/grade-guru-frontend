import FetchData from "@/components/FetchData";
import Departments from "./Departments";
import { useSelector } from "react-redux";
import { departmentErrorSelector } from "@/store/department/department.selectors";
import { getAllDepartments } from "@/store/department/department.actions";

const DepartmentRoot = () => {
  const departmentError = useSelector(departmentErrorSelector);

  return (
    <FetchData
      loadFirstThenRender
      error={departmentError}
      dispatchFunction={getAllDepartments()}
    >
      <Departments />
    </FetchData>
  );
};
export default DepartmentRoot;
