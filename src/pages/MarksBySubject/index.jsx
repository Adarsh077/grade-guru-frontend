import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Breadcrumb from "@/components/Breadcrumb";
import FetchData from "@/components/FetchData";
import { getMarksBySubjectId } from "@/store/marks-by-subject/marks-by-subject.actions";
import { marksBySubjectIdErrorSelector } from "@/store/marks-by-subject/marks-by-subject.selectors";
import { getSingleSubject } from "@/store/subject/subject.actions";
import { subjectByIdErrorSelector } from "@/store/subject/subject.selectors";

import MarksBySubject from "./MarksBySubject";

const MarksBySubjectRoot = () => {
  const { subjectId } = useParams();
  const marksBySubjectIdError = useSelector(marksBySubjectIdErrorSelector);
  const subjectByIdError = useSelector(subjectByIdErrorSelector);

  return (
    <div>
      <div className="mb-4 grid grid-cols-12 justify-between">
        <div className="md:col-span-8 xl:col-span-8">
          <Breadcrumb className="-translate-x-4" />
        </div>
      </div>
      <FetchData
        loadFirstThenRender
        error={subjectByIdError}
        shouldNotFetch={!subjectId}
        dispatchFunction={getSingleSubject({ subjectId })}
        dependencies={[subjectId]}
      >
        <FetchData
          loadFirstThenRender
          error={marksBySubjectIdError}
          shouldNotFetch={!subjectId}
          dispatchFunction={getMarksBySubjectId({ subjectId })}
          dependencies={[subjectId]}
        >
          <MarksBySubject subjectId={subjectId} />
        </FetchData>
      </FetchData>
    </div>
  );
};
export default MarksBySubjectRoot;
