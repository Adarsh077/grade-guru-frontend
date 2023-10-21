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
import { useParams } from "react-router-dom";
import { subjectSelector } from "@/store/subject/subject.selectors";

const Subjects = () => {
  const { semesterId } = useParams();

  const subjects = useSelector(subjectSelector(semesterId));
  // const navigate = useNavigate();

  const handleSubjectClick = (subject) => {
    if (!subject) return;
    // navigate(`/subjects/${subjec._id}/subjects`);
  };

  return (
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
  );
};
export default Subjects;
