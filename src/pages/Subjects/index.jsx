import { Plus } from "lucide-react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Breadcrumb from "@/components/Breadcrumb";
import FetchData from "@/components/FetchData";
import { Button } from "@/components/ui/button";
import { AddSubjectDailog } from "@/features";
import { getAllSubjects } from "@/store/subject/subject.actions";
import { subjectErrorSelector } from "@/store/subject/subject.selectors";

import Subjects from "./Subjects";

const SubjectsRoot = () => {
  const { subjectGroupId } = useParams();
  const subjectError = useSelector(subjectErrorSelector);

  return (
    <div>
      <div className="mb-4 grid grid-cols-12 justify-between">
        <div className="md:col-span-7 xl:col-span-8">
          <Breadcrumb className="-translate-x-4" />
        </div>
        <div className="md:col-span-5 xl:col-span-4">
          <div className="flex justify-end gap-x-2">
            <AddSubjectDailog subjectGroupId={subjectGroupId}>
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
