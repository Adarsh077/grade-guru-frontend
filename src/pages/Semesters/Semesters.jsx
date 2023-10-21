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
import { MoreHorizontal, Plus } from "lucide-react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { semestersSelector } from "@/store/semester/semester.selectors";

const Semesters = () => {
  const { departmentId } = useParams();

  const semesters = useSelector(semestersSelector(departmentId));
  const navigate = useNavigate();

  const handleSemesterClick = (semester) => {
    if (!semester) return;
    navigate(`/semesters/${semester._id}/subjects`);
  };

  return (
    <div>
      <div className="mb-4 grid grid-cols-12 justify-between">
        <div className="col-span-4">
          <Input type="text" placeholder="Filter" />
        </div>
        <div className="md:col-span-5 xl:col-span-6"></div>
        <div className="md:col-span-3 xl:col-span-2">
          <div className="flex justify-end">
            <Button>
              <Plus className="mr-2 h-4 w-4" /> Add Semester
            </Button>
          </div>
        </div>
      </div>
      <Table className="border">
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {semesters.map((semester) => {
            return (
              <TableRow
                className="cursor-pointer"
                onClick={() => handleSemesterClick(semester)}
                key={semester._id}
              >
                <TableCell className="font-medium">{semester.name}</TableCell>
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
    </div>
  );
};
export default Semesters;
