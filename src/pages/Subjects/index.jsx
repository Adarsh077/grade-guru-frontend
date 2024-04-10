import { useRef, useState } from "react";

import { MoreHorizontal, Plus } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import readXlsxFile from "read-excel-file";
import { toast } from "sonner";

import AppBreadcrumb from "@/components/Breadcrumb";
import FetchData from "@/components/FetchData";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AddSubjectDailog } from "@/features";
import { getAllSubjects } from "@/store/subject/subject.actions";
import { subjectErrorSelector } from "@/store/subject/subject.selectors";
import { enrollStudents } from "@/store/subject-group/subject-group.actions";

import ExamTimeForm from "./ExamTimeForm";
import Subjects from "./Subjects";

const SubjectsRoot = () => {
  const { subjectGroupId } = useParams();
  const subjectError = useSelector(subjectErrorSelector);
  const dispatch = useDispatch();
  const inputFile = useRef(null);
  const [isHallTicketDailogOpen, setIsHallTicketDailogOpen] = useState(false);

  const handleImportStudents = async (e) => {
    let toastId = toast.loading("Reading Excel File...");

    const students = await readXlsxFile(e.target.files[0]);
    students.shift();

    if (toastId) toast.dismiss(toastId);
    toastId = toast("Importing Student list in database...", {
      dismissible: false,
    });

    await dispatch(
      enrollStudents({
        subjectGroupId,
        enrolledStudents: students.map((student) => student[0]),
      })
    );

    if (toastId) toast.dismiss(toastId);
  };

  return (
    <div>
      <ExamTimeForm
        open={isHallTicketDailogOpen}
        handleClose={() => setIsHallTicketDailogOpen(false)}
        subjectGroupId={subjectGroupId}
      />
      <div className="mb-4 grid grid-cols-12 justify-between">
        <div className="md:col-span-7 xl:col-span-8">
          <AppBreadcrumb className="-translate-x-4" />
        </div>
        <div className="md:col-span-5 xl:col-span-4">
          <div className="flex justify-end gap-x-2">
            <AddSubjectDailog subjectGroupId={subjectGroupId}>
              <Button>
                <Plus className="mr-2 h-4 w-4" /> Add Subject
              </Button>
            </AddSubjectDailog>
            <input
              type="file"
              className="opacity-0 h-0 w-0"
              onChange={handleImportStudents}
              ref={inputFile}
            />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-10 w-10 p-0">
                  <span className="sr-only">Open menu</span>
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem
                  onClick={() => setIsHallTicketDailogOpen(true)}
                >
                  Generate HallTickets
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    inputFile.current.click();
                  }}
                >
                  Import Students
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
      <FetchData
        loadFirstThenRender
        error={subjectError}
        shouldNotFetch={!subjectGroupId}
        dispatchFunction={getAllSubjects({ subjectGroupId })}
        dependencies={[subjectGroupId]}
      >
        <Subjects />
      </FetchData>
    </div>
  );
};
export default SubjectsRoot;
