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
import { UpdateSemester, DeleteSemester } from "@/features";
import { useQueryString } from "@/hooks";
import { pushBreadcrumbItem } from "@/store/breadcrumb/breadcrumb.actions";
import { semestersSelector } from "@/store/semester/semester.selectors";

const Semesters = () => {
  const { departmentId } = useParams();
  const { queryString, parsedQueryString } = useQueryString();

  const semesters = useSelector(semestersSelector(departmentId));
  const [editSemester, setEditSemester] = useState(null);
  const [deleteSemester, setDeleteSemester] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSemesterClick = (semester) => {
    if (!semester) return;
    dispatch(
      pushBreadcrumbItem({
        label: semester.name,
        link: `/semesters/${semester._id}/subject-groups`,
      })
    );
    navigate({
      pathname: `/semesters/${semester._id}/subject-groups`,
      search: queryString.stringify(parsedQueryString),
    });
  };

  const handleGenerateResult = (semesterId) => {
    // toast.promise(ResultService.generateResult({ semesterId }), {
    //   loading: "Generating result...",
    //   success: () => {
    //     var link = document.createElement("a");
    //     link.href = "http://localhost:3001/result.pdf";
    //     link.target = "_blank";
    //     link.dispatchEvent(new MouseEvent("click"));
    //     return `Result generated!`;
    //   },
    //   error: "Error",
    // });
  };

  return (
    <>
      {editSemester && (
        <UpdateSemester
          semester={editSemester}
          open
          handleClose={() => setEditSemester(null)}
        />
      )}

      {deleteSemester && (
        <DeleteSemester
          semester={deleteSemester}
          open
          handleClose={() => setDeleteSemester(null)}
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
                    <DropdownMenuContent className="w-40" align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem
                        onClick={(e) => {
                          e.stopPropagation();
                          handleGenerateResult(semester._id);
                        }}
                      >
                        Generate Result
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={(event) => {
                          event.stopPropagation();
                          setEditSemester(semester);
                        }}
                      >
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={(event) => {
                          event.stopPropagation();
                          setDeleteSemester(semester);
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
export default Semesters;
