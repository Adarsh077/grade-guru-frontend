import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

import { subjectErrorSelector } from "@/store/subject/subject.selectors";
import { getAllSubjects } from "@/store/subject/subject.actions";
import FetchData from "@/components/FetchData";
import Subjects from "./Subjects";
import Breadcrumb from "@/components/Breadcrumb";
import { Button, buttonVariants } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { AddSubjectDailog } from "@/features";

const SubjectsRoot = () => {
  const { semesterId } = useParams();
  const subjectError = useSelector(subjectErrorSelector);

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
              to={`/semesters/${semesterId}/students`}
            >
              View Students
            </Link>
            <AddSubjectDailog semesterId={semesterId}>
              <Button>
                <Plus className="mr-2 h-4 w-4" /> Add Subject
              </Button>
            </AddSubjectDailog>
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
