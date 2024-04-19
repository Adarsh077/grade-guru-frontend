import { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import FetchData from "@/components/FetchData";
import {
  shortYearBySemester,
  readableSemesterByNumber,
  longYearBySemester,
} from "@/constants/enum";
import {
  DepartmentService,
  SemesterService,
  SubjectGroupService,
} from "@/services";
import { getResult } from "@/store/result/result.actions";
import { resultsErrorSelector } from "@/store/result/result.selectors";
import { getAllSubjects } from "@/store/subject/subject.actions";
import { subjectErrorSelector } from "@/store/subject/subject.selectors";

import MarksheetExporter from "./MarksheetExporter";

const MarksheetExporterRoot = () => {
  const resultError = useSelector(resultsErrorSelector);
  const subjectError = useSelector(subjectErrorSelector);
  const params = useParams();
  const [examName, setExamName] = useState("");
  const [department, setDepartment] = useState("");
  const [semester, setSemester] = useState("");
  const [year, setYear] = useState("");
  const [heldIn, setHeldIn] = useState("");

  useEffect(() => {
    generateExamName();
  }, []);

  const generateExamName = async () => {
    const { subjectGroup } = await SubjectGroupService.getSubjectGroup(
      params.subjectGroupId
    );

    if (!subjectGroup) return;

    const { semester } = await SemesterService.getSemester(
      subjectGroup.semester
    );
    const { department } = await DepartmentService.getDepartment(
      semester.department
    );
    setDepartment(department);

    const examName = `Result Sheet for ${
      shortYearBySemester[semester.number]
    } ${department.name}, (${
      readableSemesterByNumber[semester.number]
    }), C SCHEME , Exam : May 2023 (${
      subjectGroup.isATKTSubjectGroup ? "ATKT" : "Regular"
    })`;
    setSemester(readableSemesterByNumber[semester.number]);
    setYear(longYearBySemester[semester.number]);
    setExamName(examName);
  };
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
        <MarksheetExporter examName={examName} />
      </FetchData>
    </FetchData>
  );
};

export default MarksheetExporterRoot;
