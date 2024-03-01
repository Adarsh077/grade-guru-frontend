import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Breadcrumb from "@/components/Breadcrumb";
import FetchData from "@/components/FetchData";
import { getMarksBySubjectId } from "@/store/marks-by-subject/marks-by-subject.actions";
import { marksBySubjectIdErrorSelector } from "@/store/marks-by-subject/marks-by-subject.selectors";

import MarksBySubject from "./MarksBySubject";

const MarksBySubjectRoot = () => {
  const { subjectId } = useParams();
  const studentsBySemesterError = useSelector(marksBySubjectIdErrorSelector);

  return (
    <div>
      <div className="mb-4 grid grid-cols-12 justify-between">
        <div className="md:col-span-7 xl:col-span-8">
          <Breadcrumb className="-translate-x-4" />
        </div>
      </div>
      <FetchData
        loadFirstThenRender
        error={studentsBySemesterError}
        shouldNotFetch={!subjectId}
        dispatchFunction={getMarksBySubjectId({ subjectId })}
        dependencies={[subjectId]}
      >
        <MarksBySubject subjectId={subjectId} />
      </FetchData>
    </div>
  );
};
export default MarksBySubjectRoot;
