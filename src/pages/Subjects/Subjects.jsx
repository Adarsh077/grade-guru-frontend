import { MoreHorizontal } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

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
import { subjectSelector } from "@/store/subject/subject.selectors";

const Subjects = () => {
  const { subjectGroupId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { queryString, parsedQueryString } = useQueryString();

  const subjects = useSelector(subjectSelector(subjectGroupId));

  const handleSubjectClick = (subject) => {
    if (!subject) return;

    dispatch(
      pushBreadcrumbItem({
        label: subject.name,
        link: `/subjects/${subject._id}/marks`,
      })
    );

    navigate({
      pathname: `/subjects/${subject._id}/marks`,
      search: queryString.stringify(parsedQueryString),
    });
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
                    <DropdownMenuItem
                      onClick={(event) => event.stopPropagation()}
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
  );
};
export default Subjects;
