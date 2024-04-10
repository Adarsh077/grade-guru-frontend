import { Plus } from "lucide-react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import AppBreadcrumb from "@/components/Breadcrumb";
import FetchData from "@/components/FetchData";
import { Button } from "@/components/ui/button";
import { AddMasterSubjectGroup } from "@/features";
import { getAllMasterSubjectGroups } from "@/store/master-list/subject-group/subject-group.actions";
import { masterSubjectGroupErrorSelector } from "@/store/master-list/subject-group/subject-group.selectors";

import SubjectGroups from "./SubjectGroups";

const SubjectGroupsRoot = () => {
  const { semesterId } = useParams();
  const subjectGroupError = useSelector(masterSubjectGroupErrorSelector);

  return (
    <div>
      <div className="mb-4 grid grid-cols-12 justify-between">
        <div className="md:col-span-7 xl:col-span-8">
          <AppBreadcrumb className="-translate-x-4" />
        </div>
        <div className="md:col-span-5 xl:col-span-4">
          <div className="flex justify-end gap-x-2">
            <AddMasterSubjectGroup semesterId={semesterId}>
              <Button>
                <Plus className="mr-2 h-4 w-4" /> Add Subject Group
              </Button>
            </AddMasterSubjectGroup>
          </div>
        </div>
      </div>
      <FetchData
        loadFirstThenRender
        error={subjectGroupError}
        shouldNotFetch={!semesterId}
        dispatchFunction={getAllMasterSubjectGroups({ semesterId })}
        dependencies={[semesterId]}
      >
        <SubjectGroups />
      </FetchData>
    </div>
  );
};
export default SubjectGroupsRoot;
