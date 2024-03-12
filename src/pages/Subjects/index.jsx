import { MoreHorizontal, Plus } from "lucide-react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import writeXlsxFile from "write-excel-file";

import Breadcrumb from "@/components/Breadcrumb";
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
import { SemesterService } from "@/services";
import { getAllSubjects } from "@/store/subject/subject.actions";
import { subjectErrorSelector } from "@/store/subject/subject.selectors";

import Subjects from "./Subjects";

const SubjectsRoot = () => {
  const { semesterId } = useParams();
  const subjectError = useSelector(subjectErrorSelector);

  const handleDownloadStudents = async (e) => {
    e.stopPropagation();

    toast.promise(
      SemesterService.getStudentsBySemesterId({
        semesterId,
      }),
      {
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
                console.log(student);
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
      }
    );
  };

  const handleDownloadEnrolledStudents = async (e) => {
    e.stopPropagation();

    toast.promise(
      SemesterService.getEnrolledStudentsBySemester({
        semesterId,
      }),
      {
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
            {
              column: "IAT Seat No",
              type: String,
              width: 20,
              value: (student) => {
                return student.iatSeatNo;
              },
            },
            {
              column: "ESE Seat No",
              type: String,
              width: 20,
              value: (student) => {
                return student.eseSeatNo;
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
      }
    );
  };

  return (
    <div>
      <div className="mb-4 grid grid-cols-12 justify-between">
        <div className="md:col-span-7 xl:col-span-8">
          <Breadcrumb className="-translate-x-4" />
        </div>
        <div className="md:col-span-5 xl:col-span-4">
          <div className="flex justify-end gap-x-2">
            <AddSubjectDailog semesterId={semesterId}>
              <Button>
                <Plus className="mr-2 h-4 w-4" /> Add Subject
              </Button>
            </AddSubjectDailog>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-10 w-10 p-0">
                  <span className="sr-only">Open menu</span>
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem onClick={handleDownloadStudents}>
                  Download Students List
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleDownloadEnrolledStudents}>
                  Download Student Seat No
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
      <FetchData
        loadFirstThenRender
        error={subjectError}
        shouldNotFetch={!semesterId}
        dispatchFunction={getAllSubjects({ semesterId })}
        dependencies={[semesterId]}
      >
        <Subjects />
      </FetchData>
    </div>
  );
};
export default SubjectsRoot;
