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
import { subjectGroupsSelector } from "@/store/subject-group/subject-group.selectors";

const SubjectGroups = () => {
  const { semesterId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { queryString, parsedQueryString } = useQueryString();

  const subjectGroups = useSelector(subjectGroupsSelector(semesterId));

  const handleSubjectGroupClick = (subjectGroup) => {
    if (!subjectGroup) return;

    dispatch(
      pushBreadcrumbItem({
        label: subjectGroup.name,
        link: `/subject-groups/${subjectGroup._id}/subjects`,
      })
    );

    navigate({
      pathname: `/subject-groups/${subjectGroup._id}/subjects`,
      search: queryString.stringify(parsedQueryString),
    });
  };

  return (
    <Table className="border">
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {subjectGroups.map((subjectGroup) => {
          return (
            <TableRow
              className="cursor-pointer"
              onClick={() => handleSubjectGroupClick(subjectGroup)}
              key={subjectGroup._id}
            >
              <TableCell className="font-medium">{subjectGroup.name}</TableCell>
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
export default SubjectGroups;
