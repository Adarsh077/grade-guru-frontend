import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import FetchData from "@/components/FetchData";
import { getResult } from "@/store/result/result.actions";
import { resultsErrorSelector } from "@/store/result/result.selectors";
import { getAllSubjects } from "@/store/subject/subject.actions";
import { subjectErrorSelector } from "@/store/subject/subject.selectors";

import GazzetExporter from "./Gazzet";

const GazzetExporterRoot = () => {
  const resultError = useSelector(resultsErrorSelector);
  const subjectError = useSelector(subjectErrorSelector);
  const params = useParams();

  return (
    <FetchData
      loadFirstThenRender
      error={resultError}
      dispatchFunction={getResult({
        subjectGroupId: params.subjectGroupId,
      })}
    >
      <FetchData
        loadFirstThenRender
        error={subjectError}
        dispatchFunction={getAllSubjects({
          subjectGroupId: params.subjectGroupId,
        })}
      >
        <GazzetExporter />
      </FetchData>
    </FetchData>
  );
};

export default GazzetExporterRoot;
