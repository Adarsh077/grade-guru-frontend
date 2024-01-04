import "react-data-grid/lib/styles.css";

import Breadcrumb from "@/components/Breadcrumb";
import { Link, useParams } from "react-router-dom";
import StudentsBySemester from "./StudentsBySemester";
import FetchData from "@/components/FetchData";
import { useSelector } from "react-redux";
import { studentsBySemesterErrorSelector } from "@/store/students-by-semester/students-by-semester.selectors";
import { getStudentsBySemester } from "@/store/students-by-semester/students-by-semester.actions";
import { Button, buttonVariants } from "@/components/ui/button";
import { Plus } from "lucide-react";

const StudentsBySemesterRoot = () => {
  const { semesterId } = useParams();
  const studentsBySemesterError = useSelector(studentsBySemesterErrorSelector);

  return (
    <div>
      <div className="mb-4 grid grid-cols-12 justify-between">
        <div className="md:col-span-7 xl:col-span-8">
          <Breadcrumb className="-translate-x-4" />
        </div>
        <div className="md:col-span-5 xl:col-span-4">
          <div className="flex justify-end gap-x-2">
            <Link
              className={buttonVariants({ variant: "ghost" })}
              to={`/semesters/${semesterId}/subjects`}
            >
              View Subjects
            </Link>
            <Button variant="secondary">
              <Plus className="mr-2 h-4 w-4" /> Import
            </Button>
          </div>
        </div>
      </div>

      <FetchData
        loadFirstThenRender
        error={studentsBySemesterError}
        shouldNotFetch={!semesterId}
        dispatchFunction={getStudentsBySemester({ semesterId })}
        dependencies={[semesterId]}
      >
        <StudentsBySemester semesterId={semesterId} />
      </FetchData>
    </div>
  );
};

export default StudentsBySemesterRoot;
