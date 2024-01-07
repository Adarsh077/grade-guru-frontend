import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { subjectErrorSelector } from "@/store/subject/subject.selectors";
import { getAllSubjects } from "@/store/subject/subject.actions";
import FetchData from "@/components/FetchData";
import Subjects from "./Subjects";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { AddSubjectDailog } from "@/features";
import { pushBreadcrumbItem } from "@/store/breadcrumb/breadcrumb.actions";
import { useQueryString } from "@/hooks";

const SubjectsRoot = () => {
  const { semesterId } = useParams();
  const { queryString, parsedQueryString } = useQueryString();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const subjectError = useSelector(subjectErrorSelector);

  const handleViewStudentsClick = () => {
    dispatch(
      pushBreadcrumbItem({
        label: "Students",
        link: `/semesters/${semesterId}/students`,
      })
    );
    navigate({
      pathname: `/semesters/${semesterId}/students`,
      search: queryString.stringify(parsedQueryString),
    });
  };

  return (
    <div>
      <div className="mb-4 grid grid-cols-12 justify-between">
        <div className="md:col-span-7 xl:col-span-8">
          <Breadcrumb className="-translate-x-4" />
        </div>
        <div className="md:col-span-5 xl:col-span-4">
          <div className="flex justify-end gap-x-2">
            <Button onClick={handleViewStudentsClick} variant="ghost">
              View Students
            </Button>
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
