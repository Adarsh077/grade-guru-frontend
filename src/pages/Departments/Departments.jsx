import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useQueryString } from "@/hooks";
import { pushBreadcrumbItem } from "@/store/breadcrumb/breadcrumb.actions";
import { departmentSelector } from "@/store/department/department.selectors";
import { MoreHorizontal } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Departments = () => {
  const departments = useSelector(departmentSelector);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { queryString, parsedQueryString } = useQueryString();

  const handleDepartmentClick = (department) => {
    if (!department) return;
    dispatch(
      pushBreadcrumbItem({
        label: department.name,
        link: `/departments/${department._id}/semesters`,
      })
    );
    navigate({
      pathname: `/departments/${department._id}/semesters`,
      search: queryString.stringify(parsedQueryString),
    });
  };

  return (
    <Table className="border">
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>HOD</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {departments.map((department) => {
          return (
            <TableRow
              className="cursor-pointer"
              onClick={() => handleDepartmentClick(department)}
              key={department._id}
            >
              <TableCell className="font-medium">{department.name}</TableCell>
              <TableCell>{department.hod?.name}</TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <span className="sr-only">Open menu</span>
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem
                      onClick={(event) => event.stopPropagation()}
                    >
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem>Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};
export default Departments;
