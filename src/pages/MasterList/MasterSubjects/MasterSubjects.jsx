import { MoreHorizontal } from "lucide-react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

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
import { masterSubjectSelector } from "@/store/master-list/subject/subject.selectors";

const MasterSubjects = () => {
  const { subjectGroupId } = useParams();

  const masterSubjects = useSelector(masterSubjectSelector(subjectGroupId));

  const handleSubjectClick = () => {};

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
        {masterSubjects.map((subjects) => {
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

export default MasterSubjects;
