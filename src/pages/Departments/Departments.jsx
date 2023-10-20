import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AddDepartmentDailog } from "@/features";
import { departmentSelector } from "@/store/department/department.selectors";
import { MoreHorizontal, Plus } from "lucide-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Departments = () => {
  const departments = useSelector(departmentSelector);
  const navigate = useNavigate();

  const handleDepartmentClick = (department) => {
    if (!department) return;
    navigate(`/departments/${department._id}`);
  };

  return (
    <div>
      <div className="mb-4 grid grid-cols-12 justify-between">
        <div className="col-span-4">
          <Input type="text" placeholder="Filter" />
        </div>
        <div className="col-span-6"></div>
        <div className="col-span-2">
          <div className="flex justify-end">
            <AddDepartmentDailog>
              <Button>
                <Plus className="mr-2 h-4 w-4" /> Add Department
              </Button>
            </AddDepartmentDailog>
          </div>
        </div>
      </div>
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
                      <DropdownMenuItem onClick={() => {}}>
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
    </div>
  );
};
export default Departments;
