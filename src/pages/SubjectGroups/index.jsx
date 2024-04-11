// import { useState } from "react";

import { MoreHorizontal } from "lucide-react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
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
import { useQueryString } from "@/hooks";
import { SemesterService } from "@/services";
import { getAllSubjectGroups } from "@/store/subject-group/subject-group.actions";
import { subjectGroupErrorSelector } from "@/store/subject-group/subject-group.selectors";

import SubjectGroups from "./SubjectGroups";

const SubjectGroupsRoot = () => {
  const { semesterId } = useParams();
  const { parsedQueryString } = useQueryString();
  const subjectGroupError = useSelector(subjectGroupErrorSelector);

  const handleDownloadStudents = async (e) => {
    e.stopPropagation();

    toast.promise(
      SemesterService.getStudentsBySemesterId({
        semesterId,
        batch: parsedQueryString.batch,
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
          <AppBreadcrumb className="-translate-x-4" />
        </div>
        <div className="md:col-span-5 xl:col-span-4">
          <div className="flex justify-end gap-x-2">
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
        error={subjectGroupError}
        shouldNotFetch={!semesterId}
        dispatchFunction={getAllSubjectGroups({ semesterId })}
        dependencies={[semesterId]}
      >
        <SubjectGroups />
      </FetchData>
    </div>
  );
};
export default SubjectGroupsRoot;
