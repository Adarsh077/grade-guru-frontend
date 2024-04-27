import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { v4 as uuid } from "uuid";

import {
  ExamNamesEnum,
  ExamsWithMarksBySubjectType,
  SubjectTypeEnum,
} from "@/constants/enum";
import { resultsSelector } from "@/store/result/result.selectors";
import { subjectSelector } from "@/store/subject/subject.selectors";

import Marksheet from "./Marksheet";

const MarksheetExporter = (props) => {
  const { examName, department, semester, year, isATKTSubjectGroup } = props;
  const params = useParams();
  let subjects = useSelector(subjectSelector(params.subjectGroupId));
  const result = useSelector(resultsSelector(params.subjectGroupId));

  const studentsResult = result.students.map((studentResult) => {
    let marksOTotal = 0;
    let marksOTotalGrace = 0;
    let creditsTotal = 0;
    let gpcTotal = 0;
    return {
      seatNo: studentResult.seatNo,
      name: studentResult.student.name,
      gender: studentResult.student.gender,
      sgpi: studentResult.sgpi,
      result: studentResult.finalResult,
      cgpi: studentResult.cgpi,
      marks: {
        MarksO: studentResult.marks.map((marks) => ({
          subjectCode: marks.subjectCode,
          exams: marks.exams.map((exam) => {
            if (exam.examName === ExamNamesEnum.TOT) {
              marksOTotal += exam.marksO;
            } else if (exam.graceMarks) {
              marksOTotalGrace += exam.graceMarks;
            }

            if (
              exam.examName === ExamNamesEnum.TW &&
              marks.subject.subjectType === SubjectTypeEnum.WRITTEN_TW
            ) {
              marksOTotal += exam.marksO;
            }

            return {
              name: exam.examName,
              marks: exam.marksO,
              graceMarks: exam.graceMarks,
              symbols: exam.symbols,
            };
          }),
        })),
        MarksOTotal: marksOTotal,
        MarksOTotalGrace: marksOTotalGrace,
        Grade: studentResult.marks.map((marks) => ({
          subjectCode: marks.subjectCode,
          exams: marks.exams.map((exam) => {
            return {
              name: exam.examName,
              marks: exam.grade,
              graceMarks: exam.graceMarks,
              symbols: exam.symbols,
            };
          }),
        })),
        GradeTotal: "",
        C: studentResult.marks.map((marks) => ({
          subjectCode: marks.subjectCode,
          exams: marks.exams.map((exam) => {
            if (exam.examName === ExamNamesEnum.TOT) {
              creditsTotal += exam.credits;
              return {
                name: exam.examName,
                marks: exam.credits,
                graceMarks: exam.graceMarks,
                symbols: exam.symbols,
              };
            }

            if (
              exam.examName === ExamNamesEnum.TW &&
              marks.subject.subjectType === SubjectTypeEnum.WRITTEN_TW
            ) {
              creditsTotal += exam.credits;
              return {
                name: exam.examName,
                marks: exam.credits,
                graceMarks: exam.graceMarks,
                symbols: exam.symbols,
              };
            }
            return {
              name: exam.examName,
              marks: "",
              graceMarks: exam.graceMarks,
              symbols: exam.symbols,
            };
          }),
        })),
        CTotal: creditsTotal,
        GPC: studentResult.marks.map((marks) => ({
          subjectCode: marks.subjectCode,
          exams: marks.exams.map((exam) => {
            if (exam.examName === ExamNamesEnum.TOT) {
              gpcTotal += exam.gpc;
              return {
                name: exam.examName,
                marks: exam.gpc,
                graceMarks: exam.graceMarks,
                symbols: exam.symbols,
              };
            }

            if (
              exam.examName === ExamNamesEnum.TW &&
              marks.subject.subjectType === SubjectTypeEnum.WRITTEN_TW
            ) {
              gpcTotal += exam.gpc;
              return {
                name: exam.examName,
                marks: exam.gpc,
                graceMarks: exam.graceMarks,
                symbols: exam.symbols,
              };
            }

            return {
              name: exam.examName,
              marks: "",
              graceMarks: exam.graceMarks,
              symbols: exam.symbols,
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
      {studentsResult.map((studentResult) => {
        return (
          <div key={uuid()} className="marksheet break-after-page">
            <Marksheet
              examName={examName}
              studentResult={studentResult}
              subjects={sortedSubjects}
              maxTotal={maxTotal}
              minMarks={minMarks}
              department={department}
              semester={semester}
              year={year}
              isATKTSubjectGroup={isATKTSubjectGroup}
            />
          </div>
        );
      })}
    </div>
  );
};

export default MarksheetExporter;
