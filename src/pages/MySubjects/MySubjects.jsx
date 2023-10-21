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
import { MoreHorizontal } from "lucide-react";
import { useSelector } from "react-redux";
import { mySubjectsSelector } from "@/store/subject/subject.selectors";

const MySubjects = () => {
  const subjects = useSelector(mySubjectsSelector);
  // const navigate = useNavigate();

  const handleSubjectClick = (subject) => {
    if (!subject) return;
    // navigate(`/subjects/${subjec._id}/subjects`);
  };

  return (
    <div>
      <div className="mb-4 grid grid-cols-12 justify-between">
        <div className="col-span-4">
          <h2 className="text-2xl font-medium">My Subjects</h2>
        </div>
      </div>
      <Table className="border">
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Staff</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {subjects.map((subjects) => {
            return (
              <TableRow
                className="cursor-pointer"
                onClick={() => handleSubjectClick(subjects)}
                key={subjects._id}
              >
                <TableCell className="font-medium">{subjects.name}</TableCell>
                <TableCell>{subjects.staff?.name}</TableCell>
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
export default MySubjects;
