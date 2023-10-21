import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { subjectErrorSelector } from "@/store/subject/subject.selectors";
import { getAllSubjects } from "@/store/subject/subject.actions";
import FetchData from "@/components/FetchData";
import Subjects from "./Subjects";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const SubjectsRoot = () => {
  const { semesterId } = useParams();
  const subjectError = useSelector(subjectErrorSelector);

  return (
    <div>
      <div className="mb-4 grid grid-cols-12 justify-between">
        <div className="md:col-span-9 xl:col-span-10">
          <Breadcrumb className="-translate-x-4" />
        </div>
        <div className="md:col-span-3 xl:col-span-2">
          <div className="flex justify-end">
            <Button>
              <Plus className="mr-2 h-4 w-4" /> Add Semester
            </Button>
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
