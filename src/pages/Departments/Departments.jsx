import { useState } from "react";

import { MoreHorizontal } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

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
import {
  DeleteDepartmentAlertDailog,
  UpdateDepartmentDailog,
} from "@/features";
import { useQueryString } from "@/hooks";
import { pushBreadcrumbItem } from "@/store/breadcrumb/breadcrumb.actions";
import { departmentSelector } from "@/store/department/department.selectors";

const Departments = () => {
  const departments = useSelector(departmentSelector);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [editDepartment, setEditDepartment] = useState(null);
  const [deleteDepartment, setDeleteDepartment] = useState(null);

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
    <>
      {Boolean(editDepartment) && (
        <UpdateDepartmentDailog
          department={editDepartment}
          open={Boolean(editDepartment)}
          handleClose={() => setEditDepartment(null)}
        />
      )}
      {Boolean(deleteDepartment) && (
        <DeleteDepartmentAlertDailog
          handleClose={() => setDeleteDepartment(null)}
          department={deleteDepartment}
        />
      )}
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
                key={department._id}
                className="cursor-pointer"
                onClick={() => handleDepartmentClick(department)}
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
                        onClick={(event) => {
                          event.stopPropagation();
                          setEditDepartment(department);
                        }}
                      >
                        <p>Edit</p>
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={(event) => {
                          event.stopPropagation();
                          setDeleteDepartment(department);
                        }}
                      >
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
};
export default Departments;
