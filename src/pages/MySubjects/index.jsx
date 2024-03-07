import { useSelector } from "react-redux";

import FetchData from "@/components/FetchData";
import { useQueryString } from "@/hooks";
import { getMySubjects } from "@/store/subject/subject.actions";
import { mySubjectsErrorSelector } from "@/store/subject/subject.selectors";

import MySubjects from "./MySubjects";

const MySubjectsRoot = () => {
  const mySubjectsError = useSelector(mySubjectsErrorSelector);
  const { parsedQueryString } = useQueryString();

  return (
    <FetchData
      loadFirstThenRender
      error={mySubjectsError}
      shouldNotFetch={!parsedQueryString.batch}
      dispatchFunction={getMySubjects({ batch: parsedQueryString.batch })}
      dependencies={[parsedQueryString.batch]}
    >
      <MySubjects />
    </FetchData>
  );
};
export default MySubjectsRoot;
