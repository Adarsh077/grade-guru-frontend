import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useQueryString } from "@/hooks";
import { masterDepartmentSelector } from "@/store/master-list/department/department.selectors";

const SelectDepartments = () => {
  const masterDepartments = useSelector(masterDepartmentSelector);
  const navigate = useNavigate();
  const { queryString, parsedQueryString } = useQueryString();
  const { batchYear } = useParams();

  const handleDepartmentClick = (department) => {
    if (!department) return;

    navigate({
      pathname: `/master-list/batches/${batchYear}/departments/${department._id}/students`,
      search: queryString.stringify(parsedQueryString),
    });
  };

  return (
    <div>
      <Table className="border">
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>HOD</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {masterDepartments.map((department) => {
            return (
              <TableRow
                key={department._id}
                className="cursor-pointer"
                onClick={() => handleDepartmentClick(department)}
              >
                <TableCell className="font-medium">{department.name}</TableCell>
                <TableCell>{department.hod?.name}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};
export default SelectDepartments;
