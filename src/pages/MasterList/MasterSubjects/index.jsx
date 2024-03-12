import { Plus } from "lucide-react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Breadcrumb from "@/components/Breadcrumb";
import FetchData from "@/components/FetchData";
import { Button } from "@/components/ui/button";
import AddMasterSubjectDailog from "@/features/MasterList/Subject/AddSubject";
import { getAllMasterSubjects } from "@/store/master-list/subject/subject.actions";
import { masterSubjectErrorSelector } from "@/store/master-list/subject/subject.selectors";

import MasterSubjects from "./MasterSubjects";

const MasterSubjectsRoot = () => {
  const { subjectGroupId } = useParams();
  const masterSubjectError = useSelector(masterSubjectErrorSelector);

  return (
    <div>
      <div className="mb-4 grid grid-cols-12 justify-between">
        <div className="md:col-span-7 xl:col-span-8">
          <Breadcrumb className="-translate-x-4" />
        </div>
        <div className="md:col-span-5 xl:col-span-4">
          <div className="flex justify-end gap-x-2">
            <AddMasterSubjectDailog subjectGroupId={subjectGroupId}>
              <Button>
                <Plus className="mr-2 h-4 w-4" /> Add Subject
              </Button>
            </AddMasterSubjectDailog>
          </div>
        </div>
      </div>
      <FetchData
        loadFirstThenRender
        error={masterSubjectError}
        shouldNotFetch={!subjectGroupId}
        dispatchFunction={getAllMasterSubjects({ subjectGroupId })}
        dependencies={[subjectGroupId]}
      >
        <MasterSubjects />
      </FetchData>
    </div>
  );
};
export default MasterSubjectsRoot;
