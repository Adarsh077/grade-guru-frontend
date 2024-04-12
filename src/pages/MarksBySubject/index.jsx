import { useRef, useState } from "react";

import { MoreHorizontal } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import readXlsxFile from "read-excel-file";
import { toast } from "sonner";
import writeXlsxFile from "write-excel-file";

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
import { SubjectService } from "@/services";
import { getMarksBySubjectId } from "@/store/marks-by-subject/marks-by-subject.actions";
import { marksBySubjectIdErrorSelector } from "@/store/marks-by-subject/marks-by-subject.selectors";
import {
  enrollStudents,
  getSingleSubject,
} from "@/store/subject/subject.actions";
import {
  subjectByIdErrorSelector,
  subjectByIdSelector,
} from "@/store/subject/subject.selectors";

import ATKTFormDate from "./ATKTFormDate";
import MarksBySubject from "./MarksBySubject";

const MarksBySubjectRoot = () => {
  const { subjectId } = useParams();
  const marksBySubjectIdError = useSelector(marksBySubjectIdErrorSelector);
  const dispatch = useDispatch();
  const subject = useSelector(subjectByIdSelector(subjectId));
  const subjectByIdError = useSelector(subjectByIdErrorSelector);
  const [isATKTSDailogOpen, setIsATKTDailogOpen] = useState(false);

  const inputFile = useRef(null);

  const handleDownloadStudents = async (e) => {
    e.stopPropagation();

    toast.promise(SubjectService.getAtktStudents(subjectId), {
      loading: "Downloading Students list",
      success: ({ students }) => {
        if (!students || !students.length) {
          throw new Error("No students added yet!");
        }

        const schema = [
          {
            column: "Name",
            type: String,
            width: 20,
            value: (student) => {
              return student.name;
            },
          },
        ];

        writeXlsxFile(students, {
          schema,
          fileName: "students.xlsx",
          sheet: "Students",
          stickyRowsCount: 1,
        });

        return "Downloaded Students list";
      },
      error: (error) => error.message || "Something went wrong",
    });
  };
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
        subjectId,
        students: students.map((student) => student[0]),
      })
    );

    if (toastId) toast.dismiss(toastId);
  };

  return (
    <div>
      <ATKTFormDate
        open={isATKTSDailogOpen}
        handleClose={() => {
          setIsATKTDailogOpen(false);
        }}
        subjectId={subjectId}
      />

      <div className="mb-4 grid grid-cols-12 justify-between">
        <div className="md:col-span-8 xl:col-span-8">
          <AppBreadcrumb className="-translate-x-4" />
        </div>
        <div className="md:col-span-5 xl:col-span-4">
          {subject?.isATKTSubject && (
            <div className="flex justify-end gap-x-2">
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
                  <DropdownMenuItem onClick={(e) => handleDownloadStudents(e)}>
                    Download ATKT Students
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setIsATKTDailogOpen(false)}>
                    Send ATKT Form Reminder
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
          )}
        </div>
      </div>
      <FetchData
        loadFirstThenRender
        error={subjectByIdError}
        shouldNotFetch={!subjectId}
        dispatchFunction={getSingleSubject({ subjectId })}
        dependencies={[subjectId]}
      >
        <FetchData
          loadFirstThenRender
          error={marksBySubjectIdError}
          shouldNotFetch={!subjectId}
          dispatchFunction={getMarksBySubjectId({ subjectId })}
          dependencies={[subjectId]}
        >
          <MarksBySubject subjectId={subjectId} />
        </FetchData>
      </FetchData>
    </div>
  );
};
export default MarksBySubjectRoot;
