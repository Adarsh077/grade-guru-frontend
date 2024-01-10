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
import { MoreHorizontal } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { semestersSelector } from "@/store/semester/semester.selectors";
import { useQueryString } from "@/hooks";
import { pushBreadcrumbItem } from "@/store/breadcrumb/breadcrumb.actions";
import { toast } from "sonner";

const Semesters = () => {
  const { departmentId } = useParams();
  const { queryString, parsedQueryString } = useQueryString();

  const semesters = useSelector(semestersSelector(departmentId));
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSemesterClick = (semester) => {
    if (!semester) return;
    dispatch(
      pushBreadcrumbItem({
        label: semester.name,
        link: `/semesters/${semester._id}/subjects`,
      })
    );
    navigate({
      pathname: `/semesters/${semester._id}/subjects`,
      search: queryString.stringify(parsedQueryString),
    });
  };

  const handleGenerateResult = (e) => {
    e.stopPropagation();

    const promise = () =>
      new Promise((resolve) => setTimeout(() => resolve(), 2000));
    toast.promise(promise, {
      loading: "Generating result...",
      success: () => {
        var link = document.createElement("a");
        link.href = "/result.pdf";
        link.download = "result.pdf";
        link.dispatchEvent(new MouseEvent("click"));
        return `Result generated!`;
      },
      error: "Error",
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
                    <DropdownMenuItem onClick={handleGenerateResult}>
                      Generate Result
                    </DropdownMenuItem>
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
export default Semesters;
