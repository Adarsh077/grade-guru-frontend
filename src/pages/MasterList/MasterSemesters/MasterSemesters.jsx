import { useState } from "react";

import { MoreHorizontal } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
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
import { DeleteMasterSemester } from "@/features";
import { useQueryString } from "@/hooks";
import { pushBreadcrumbItem } from "@/store/breadcrumb/breadcrumb.actions";
import { masterSemestersSelector } from "@/store/master-list/semester/semester.selectors";

const MasterSemesters = () => {
  const { departmentId } = useParams();
  const { queryString, parsedQueryString } = useQueryString();

  const masterSemesters = useSelector(masterSemestersSelector(departmentId));

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [deleteMasterSemester, setDeleteMasterSemester] = useState(null);

  const handleSemesterClick = (semester) => {
    if (!semester) return;
    dispatch(
      pushBreadcrumbItem({
        label: semester.name,
        link: `/master-list/semesters/${semester._id}/subject-groups`,
      })
    );
    navigate({
      pathname: `/master-list/semesters/${semester._id}/subject-groups`,
      search: queryString.stringify(parsedQueryString),
    });
  };

  return (
    <>
      {deleteMasterSemester && (
        <DeleteMasterSemester
          semester={deleteMasterSemester}
          open
          handleClose={() => setDeleteMasterSemester(null)}
        />
      )}
      <Table className="border">
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {masterSemesters.map((semester) => {
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
                    <DropdownMenuContent className="w-40" align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem
                        onClick={(event) => event.stopPropagation()}
                      >
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={(event) => {
                          event.stopPropagation();
                          setDeleteMasterSemester(semester);
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
export default MasterSemesters;
