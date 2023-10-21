import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { subjectErrorSelector } from "@/store/subject/subject.selectors";
import { getAllSubjects } from "@/store/subject/subject.actions";
import FetchData from "@/components/FetchData";
import Subjects from "./Subjects";

const SubjectsRoot = () => {
  const { semesterId } = useParams();
  const subjectError = useSelector(subjectErrorSelector);

  return (
    <FetchData
      loadFirstThenRender
      error={subjectError}
      shouldNotFetch={!semesterId}
      dispatchFunction={getAllSubjects({ semesterId })}
      dependencies={[semesterId]}
    >
      <Subjects />
    </FetchData>
  );
};
export default SubjectsRoot;
