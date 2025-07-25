import { useRef, useState } from "react";

import { Lock, MoreHorizontal } from "lucide-react";
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
import { ResultService } from "@/services";
import { getAllSubjects } from "@/store/subject/subject.actions";
import {
  subjectErrorSelector,
  subjectSelector,
} from "@/store/subject/subject.selectors";
import { enrollStudents } from "@/store/subject-group/subject-group.actions";

import ATKTFormDate from "./ATKTFormDate";
import ExamTimeForm from "./ExamTimeForm";
import LockConfirm from "./LockConfirm";
import Subjects from "./Subjects";

const SubjectsRoot = () => {
  const { subjectGroupId } = useParams();
  const subjectError = useSelector(subjectErrorSelector);
  const dispatch = useDispatch();
  const inputFile = useRef(null);
  const [isHallTicketDailogOpen, setIsHallTicketDailogOpen] = useState(false);
  const [isATKTSDailogOpen, setIsATKTDailogOpen] = useState(false);
  const [isMarksEntryLocked, setIsMarksEntryLocked] = useState(false);
  const subjects = useSelector(subjectSelector(subjectGroupId));

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

  const generateResult = async (e) => {
    e.stopPropagation();

    toast.promise(
      ResultService.generateResult({
        subjectGroupId,
      }),
      {
        loading: "Generating result...",
        success: () => {
          window.open(`/exporters/gazzet/${subjectGroupId}`, "_blank");
          return "Result generated!";
        },
        error: (error) => error.message || "Something went wrong",
      }
    );
  };

  const generateMarksheet = async (e) => {
    e.stopPropagation();

    toast.promise(
      ResultService.generateResult({
        subjectGroupId,
      }),
      {
        loading: "Generating marksheet...",
        success: () => {
          window.open(`/exporters/marksheet/${subjectGroupId}`, "_blank");
          return "Result generated!";
        },
        error: (error) => error.message || "Something went wrong",
      }
    );
  };

  const isMarksEntryLockedForSubjects = (subjects || []).find(
    (subject) => subject.isMarksEntryLocked
  );

  return (
    <div>
      <ExamTimeForm
        open={isHallTicketDailogOpen}
        handleClose={() => setIsHallTicketDailogOpen(false)}
        subjectGroupId={subjectGroupId}
      />
      <ATKTFormDate
        open={isATKTSDailogOpen}
        handleClose={() => {
          setIsATKTDailogOpen(false);
        }}
        subjectGroupId={subjectGroupId}
      />
      <LockConfirm
        open={isMarksEntryLocked}
        handleClose={() => {
          setIsMarksEntryLocked(false);
        }}
        subjectGroupId={subjectGroupId}
      />
      <div className="mb-4 grid grid-cols-12  align-middle justify-between">
        <div className="md:col-span-7 xl:col-span-8">
          <AppBreadcrumb />
        </div>
        <div className="md:col-span-5 xl:col-span-4">
          <div className="flex justify-end gap-x-2">
            <input
              type="file"
              className="opacity-0 h-0 w-0"
              onChange={handleImportStudents}
              ref={inputFile}
            />
            {!isMarksEntryLockedForSubjects && (
              <Button
                onClick={() => setIsMarksEntryLocked(true)}
                variant="ghost"
                type="submit"
              >
                <span className="mr-2">
                  <Lock className="w-4 h-4" />
                </span>
                Lock
              </Button>
            )}
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
                  onClick={() => {
                    inputFile.current.click();
                  }}
                >
                  Import Students
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setIsHallTicketDailogOpen(true)}
                >
                  Generate HallTickets
                </DropdownMenuItem>
                <DropdownMenuItem onClick={(e) => generateResult(e)}>
                  Generate Result
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setIsATKTDailogOpen(true)}>
                  Send Revalution Reminder
                </DropdownMenuItem>
                <DropdownMenuItem onClick={(e) => generateMarksheet(e)}>
                  Generate Marksheet
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
