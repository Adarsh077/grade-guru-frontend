import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { ExamNamesEnum, ExamsWithMarksBySubjectType } from "@/constants/enum";
import { resultsSelector } from "@/store/result/result.selectors";
import { subjectSelector } from "@/store/subject/subject.selectors";

import Marksheet from "./Marksheet";

const GazzetExporter = () => {
  const params = useParams();

  let subjects = useSelector(subjectSelector(params.subjectGroupId));
  const result = useSelector(resultsSelector(params.subjectGroupId));

  const studentsResult = result.students.map((studentResult) => {
    let marksOTotal = 0;
    let creditsTotal = 0;
    let gpcTotal = 0;
    return {
      seatNo: studentResult.seatNo,
      name: studentResult.student.name,
      sgpi: studentResult.sgpi,
      result: studentResult.finalResult,
      cgpi: studentResult.cgpi,
      marks: {
        MarksO: studentResult.marks.map((marks) => ({
          subjectCode: marks.subjectCode,
          exams: marks.exams.map((exam) => {
            if (exam.examName === ExamNamesEnum.TOT) {
              marksOTotal += exam.marksO;
            }

            return {
              name: exam.examName,
              marks: exam.marksO,
            };
          }),
        })),
        MarksOTotal: marksOTotal,
        Grade: studentResult.marks.map((marks) => ({
          subjectCode: marks.subjectCode,
          exams: marks.exams.map((exam) => {
            return {
              name: exam.examName,
              marks: exam.grade,
            };
          }),
        })),
        GradeTotal: "",
        C: studentResult.marks.map((marks) => ({
          subjectCode: marks.subjectCode,
          exams: marks.exams.map((exam) => {
            if (exam.examName === ExamNamesEnum.TOT) {
              creditsTotal += marks.credits;
              return {
                name: exam.examName,
                marks: marks.credits,
              };
            }
            return {
              name: exam.examName,
              marks: "",
            };
          }),
        })),
        CTotal: creditsTotal,
        GPC: studentResult.marks.map((marks) => ({
          subjectCode: marks.subjectCode,
          exams: marks.exams.map((exam) => {
            if (exam.examName === ExamNamesEnum.TOT) {
              gpcTotal += marks.gpc;
              return {
                name: exam.examName,
                marks: marks.gpc,
              };
            }
            return {
              name: exam.examName,
              marks: "",
            };
          }),
        })),
        GPCTotal: gpcTotal,
      },
    };
  });
  subjects = subjects.map((subject) => ({
    ...subject,
    exams: ExamsWithMarksBySubjectType[subject.subjectType],
  }));

  const sortedSubjects = subjects.sort((a, b) => a.code.localeCompare(b.code));

  const maxTotal = sortedSubjects.reduce((total, subject) => {
    return (total +=
      subject.exams.find((exam) => exam.name === ExamNamesEnum.TOT)?.maxMarks ||
      0);
  }, 0);

  const minMarks = sortedSubjects.reduce((total, subject) => {
    return (total +=
      subject.exams.find((exam) => exam.name === ExamNamesEnum.TOT)?.minMarks ||
      0);
  }, 0);

  return (
    <div className="h-screen">
      <div className="flex items-center justify-center break-after-page">
        <Marksheet
          studentRecords={studentsResult}
          subjects={sortedSubjects}
          maxTotal={maxTotal}
          minMarks={minMarks}
        />
      </div>
    </div>
  );
};

export default GazzetExporter;
