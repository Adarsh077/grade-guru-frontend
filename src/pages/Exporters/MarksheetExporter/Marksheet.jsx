import {
  ExamNamesEnum,
  ExamsWithMarksBySubjectType,
  SubjectTypeEnum,
} from "@/constants/enum";
import "./index.css";

const gradePointByGrade = (grade) => {
  const gradePointsByGrade = {
    O: 10,
    A: 9,
    B: 8,
    C: 7,
    D: 6,
    E: 5,
    P: 4,
    F: 0,
  };

  return gradePointsByGrade[grade];
};

const roundUpToTwoDecimals = (num) => {
  return Math.round(num * 100) / 100;
};
const Marksheet = (props) => {
  const {
    studentResult,
    subjects,
    maxTotal,
    department,
    semester,
    year,
    isATKTSubjectGroup,
  } = props;

  return (
    <div className="ritz grid-container" dir="ltr">
      <table className="waffle" cellSpacing={0} cellPadding={0}>
        <thead>
          <tr>
            <th className="row-header freezebar-origin-ltr" />
            <th
              id="855677289C0"
              style={{ width: 1 }}
              className="column-headers-background"
            />
            <th
              id="855677289C1"
              style={{ width: 112 }}
              className="column-headers-background"
            />
            <th
              id="855677289C2"
              style={{ width: 150 }}
              className="column-headers-background"
            />
            <th
              id="855677289C3"
              style={{ width: 44 }}
              className="column-headers-background"
            />
            <th
              id="855677289C4"
              style={{ width: 60 }}
              className="column-headers-background"
            />
            <th
              id="855677289C5"
              style={{ width: 60 }}
              className="column-headers-background"
            />
            <th
              id="855677289C6"
              style={{ width: 60 }}
              className="column-headers-background"
            />
            <th
              id="855677289C7"
              style={{ width: 60 }}
              className="column-headers-background"
            />
            <th
              id="855677289C8"
              style={{ width: 60 }}
              className="column-headers-background"
            />
            <th
              id="855677289C9"
              style={{ width: 60 }}
              className="column-headers-background"
            />
            <th
              id="855677289C10"
              style={{ width: 60 }}
              className="column-headers-background"
            />
            <th
              id="855677289C11"
              style={{ width: 60 }}
              className="column-headers-background"
            />
            <th
              id="855677289C12"
              style={{ width: 60 }}
              className="column-headers-background"
            />
            <th
              id="855677289C13"
              style={{ width: 60 }}
              className="column-headers-background"
            />
            <th
              id="855677289C14"
              style={{ width: 60 }}
              className="column-headers-background"
            />
            <th
              id="855677289C15"
              style={{ width: 60 }}
              className="column-headers-background"
            />
            <th
              id="855677289C16"
              style={{ width: 60 }}
              className="column-headers-background"
            />
            <th
              id="855677289C17"
              style={{ width: 60 }}
              className="column-headers-background"
            />
          </tr>
        </thead>
        <tbody>
          <tr style={{ height: 0 }}>
            <th
              id="855677289R0"
              style={{ height: 0 }}
              className="row-headers-background"
            />
            <td className="s0" />
            <td className="s0" />
            <td className="s0" />
            <td className="s0" />
            <td className="s0" />
            <td className="s0" />
            <td className="s0" />
            <td className="s0" />
            <td className="s0" />
            <td className="s0" />
            <td className="s0" />
            <td className="s0" />
            <td className="s0" />
            <td className="s0" />
            <td className="s0" />
            <td className="s0" />
            <td className="s0" />
            <td className="s0" />
          </tr>
          <tr style={{ height: 20 }}>
            <th
              id="855677289R1"
              style={{ height: 20 }}
              className="row-headers-background"
            />
            <td className="s0" />
            <td className="s1" dir="ltr" colSpan={17} rowSpan={2}>
              Grade Card
            </td>
          </tr>
          <tr style={{ height: 20 }}>
            <th
              id="855677289R2"
              style={{ height: 20 }}
              className="row-headers-background"
            />
            <td className="s0" />
          </tr>
          <tr style={{ height: 20 }}>
            <th
              id="855677289R3"
              style={{ height: 20 }}
              className="row-headers-background"
            />
            <td className="s0" />
            <td className="s2" dir="ltr">
              NAME
            </td>
            <td className="s3" dir="ltr" colSpan={9}>
              : {studentResult.name}
            </td>
            <td />
            <td className="s4" />
            <td className="s4" />
            <td className="s4" />
            <td className="s4" />
            <td className="s4" />
            <td className="s4" />
          </tr>
          <tr style={{ height: 20 }}>
            <th
              id="855677289R4"
              style={{ height: 20 }}
              className="row-headers-background"
            />
            <td className="s0" />
            <td className="s2" dir="ltr">
              EXAMINATION
            </td>
            <td className="s3" dir="ltr" colSpan={9}>
              : {year} ENGINEERING ({semester})(C SCHEME)
            </td>
            <td />
            <td className="s4" />
            <td className="s4" />
            <td className="s4" />
            <td className="s4" />
            <td className="s4" />
            <td className="s4" />
          </tr>
          <tr style={{ height: 20 }}>
            <th
              id="855677289R5"
              style={{ height: 20 }}
              className="row-headers-background"
            />
            <td className="s0" />
            <td className="s2" dir="ltr">
              BRANCH
            </td>
            <td className="s2" dir="ltr" colSpan={9}>
              : {department?.name}
            </td>
            <td />
            <td className="s5" dir="ltr" />
            <td className="s4" />
            <td className="s4" />
            <td className="s4" />
            <td className="s4" />
            <td className="s4" />
          </tr>
          <tr style={{ height: 20 }}>
            <th
              id="855677289R6"
              style={{ height: 20 }}
              className="row-headers-background"
            />
            <td className="s0" />
            <td className="s2" dir="ltr">
              HELD IN
            </td>
            <td className="s5" dir="ltr" colSpan={9}>
              : MAY 2023 ({isATKTSubjectGroup ? "ATKT" : "Regular"})
            </td>
            <td />
            <td className="s6" dir="ltr" />
            <td className="s6" dir="ltr" />
            <td className="s6" dir="ltr" />
            <td className="s6" dir="ltr" />
            <td className="s4" />
            <td className="s4" />
          </tr>
          <tr style={{ height: 20 }}>
            <th
              id="855677289R7"
              style={{ height: 20 }}
              className="row-headers-background"
            />
            <td className="s0" />
            <td className="s7" dir="ltr">
              SEAT NUMBER
            </td>
            <td className="s7" dir="ltr">
              : {studentResult?.seatNo}
            </td>
            <td className="s7" dir="ltr" />
            <td className="s7" dir="ltr" />
            <td className="s7" dir="ltr" />
            <td className="s8" />
            <td className="s8" />
            <td className="s8" />
            <td className="s8" />
            <td className="s8" />
            <td className="s9" />
            <td className="s9" />
            <td className="s9" />
            <td className="s9" />
            <td className="s9" />
            <td className="s9" />
            <td className="s9" />
          </tr>
          <tr style={{ height: 20 }}>
            <th
              id="855677289R8"
              style={{ height: 20 }}
              className="row-headers-background"
            />
            <td className="s10" />
            <td className="s11" dir="ltr" rowSpan={2}>
              COURSE CODE
            </td>
            <td className="s11" rowSpan={2}>
              <span
                style={{
                  fontSize: "11pt",
                  fontFamily: "Times New Roman",
                  fontWeight: "bold",
                }}
              >
                COURSE TITLE
              </span>
            </td>
            <td className="s11" rowSpan={2}>
              <span
                style={{
                  fontSize: "11pt",
                  fontFamily: "Times New Roman",
                  fontWeight: "bold",
                }}
              >
                CC
              </span>
            </td>
            <td className="s11" rowSpan={2}>
              <span
                style={{
                  fontSize: "11pt",
                  fontFamily: "Times New Roman",
                  fontWeight: "bold",
                }}
              >
                AM
              </span>
            </td>
            <td className="s11" colSpan={3}>
              <span
                style={{
                  fontSize: "11pt",
                  fontFamily: "Times New Roman",
                  fontWeight: "bold",
                }}
              >
                ESE/PR/OR
              </span>
            </td>
            <td className="s11" colSpan={3}>
              <span
                style={{
                  fontSize: "11pt",
                  fontFamily: "Times New Roman",
                  fontWeight: "bold",
                }}
              >
                IA/TW
              </span>
            </td>
            <td className="s11" colSpan={2}>
              <span
                style={{
                  fontSize: "11pt",
                  fontFamily: "Times New Roman",
                  fontWeight: "bold",
                }}
              >
                TOTAL
              </span>
            </td>
            <td className="s11" rowSpan={2}>
              <span
                style={{
                  fontSize: "11pt",
                  fontFamily: "Times New Roman",
                  fontWeight: "bold",
                }}
              >
                CE
              </span>
            </td>
            <td className="s11" rowSpan={2}>
              <span
                style={{
                  fontSize: "11pt",
                  fontFamily: "Times New Roman",
                  fontWeight: "bold",
                }}
              >
                GR
              </span>
            </td>
            <td className="s11" rowSpan={2}>
              <span
                style={{
                  fontSize: "11pt",
                  fontFamily: "Times New Roman",
                  fontWeight: "bold",
                }}
              >
                GP
              </span>
            </td>
            <td className="s11" rowSpan={2}>
              <span
                style={{
                  fontSize: "11pt",
                  fontFamily: "Times New Roman",
                  fontWeight: "bold",
                }}
              >
                CE X GP
              </span>
            </td>
            <td className="s11" rowSpan={2}>
              <span
                style={{
                  fontSize: "11pt",
                  fontFamily: "Times New Roman",
                  fontWeight: "bold",
                }}
              >
                Rmk
              </span>
            </td>
          </tr>
          <tr style={{ height: 20 }}>
            <th
              id="855677289R9"
              style={{ height: 20 }}
              className="row-headers-background"
            />
            <td className="s10" />
            <td className="s11">
              <span
                style={{
                  fontSize: "11pt",
                  fontFamily: "Times New Roman",
                  fontWeight: "bold",
                }}
              >
                MIN/ MAX
              </span>
            </td>
            <td className="s11">
              <span
                style={{
                  fontSize: "11pt",
                  fontFamily: "Times New Roman",
                  fontWeight: "bold",
                }}
              >
                OBT
              </span>
            </td>
            <td className="s11">
              <span
                style={{
                  fontSize: "11pt",
                  fontFamily: "Times New Roman",
                  fontWeight: "bold",
                }}
              >
                Exm
              </span>
            </td>
            <td className="s11">
              <span
                style={{
                  fontSize: "11pt",
                  fontFamily: "Times New Roman",
                  fontWeight: "bold",
                }}
              >
                MIN/ MAX
              </span>
            </td>
            <td className="s11">
              <span
                style={{
                  fontSize: "11pt",
                  fontFamily: "Times New Roman",
                  fontWeight: "bold",
                }}
              >
                OBT
              </span>
            </td>
            <td className="s11">
              <span
                style={{
                  fontSize: "11pt",
                  fontFamily: "Times New Roman",
                  fontWeight: "bold",
                }}
              >
                Exm
              </span>
            </td>
            <td className="s11">
              <span
                style={{
                  fontSize: "11pt",
                  fontFamily: "Times New Roman",
                  fontWeight: "bold",
                }}
              >
                MAX
              </span>
            </td>
            <td className="s11">
              <span
                style={{
                  fontSize: "11pt",
                  fontFamily: "Times New Roman",
                  fontWeight: "bold",
                }}
              >
                OBT
              </span>
            </td>
          </tr>
          {subjects.map((subject) => {
            const eseMarksObtained = studentResult.marks.MarksO.find(
              (MarksOSubject) => MarksOSubject.subjectCode === subject.code
            )?.exams.find((exam) => exam.name === ExamNamesEnum.ESE);

            const iaMarksObtained = studentResult.marks.MarksO.find(
              (MarksOSubject) => MarksOSubject.subjectCode === subject.code
            )?.exams.find((exam) => exam.name === ExamNamesEnum.IA);

            const maxMarks =
              ExamsWithMarksBySubjectType[subject.subjectType][0].maxMarks +
              ExamsWithMarksBySubjectType[subject.subjectType][1].maxMarks;
            const obtained =
              eseMarksObtained.marks +
              eseMarksObtained.graceMarks +
              iaMarksObtained.marks +
              iaMarksObtained.graceMarks;

            const grade = studentResult.marks.Grade.find(
              (GradeSubject) => GradeSubject.subjectCode === subject.code
            )?.exams.find((exam) => exam.name === ExamNamesEnum.TOT);

            const gpc = studentResult.marks.GPC.find(
              (GPCSubject) => GPCSubject.subjectCode === subject.code
            )?.exams.find((exam) => exam.name === ExamNamesEnum.TOT);

            const gradePoint = gradePointByGrade(grade.marks);

            return (
              <tr key={subject.code} style={{ height: 20 }}>
                <th
                  id="855677289R10"
                  style={{ height: 20 }}
                  className="row-headers-background"
                />
                <td className="s12" />
                <td className="s13">
                  <span
                    style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}
                  >
                    {subject.code}
                  </span>
                </td>
                <td className="s14">
                  <span
                    style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}
                  >
                    {subject.name}
                  </span>
                </td>
                <td className="s15">3</td>
                <td className="s16">
                  <span
                    style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}
                  >
                    {subject.subjectType === SubjectTypeEnum.WRITTEN
                      ? "ESE"
                      : "PR OR"}
                  </span>
                </td>
                <td className="s16">
                  <span
                    style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}
                  >
                    {
                      ExamsWithMarksBySubjectType[subject.subjectType][0]
                        .minMarks
                    }
                    /
                    {
                      ExamsWithMarksBySubjectType[subject.subjectType][0]
                        .maxMarks
                    }
                  </span>
                </td>
                <td className="s15">{eseMarksObtained.marks}</td>
                <td className="s16">
                  <span
                    style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}
                  >
                    {eseMarksObtained.symbols.includes("F") ? "N" : "E"}
                  </span>
                </td>
                <td className="s16">
                  <span
                    style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}
                  >
                    {`0${
                      ExamsWithMarksBySubjectType[subject.subjectType][1]
                        .minMarks
                    }`.slice(-2)}
                    /
                    {
                      ExamsWithMarksBySubjectType[subject.subjectType][1]
                        .maxMarks
                    }
                  </span>
                </td>
                <td className="s15">{iaMarksObtained.marks}</td>
                <td className="s16">
                  <span
                    style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}
                  >
                    {iaMarksObtained.symbols.includes("F") ? "N" : "E"}
                  </span>
                </td>
                <td className="s15">{maxMarks}</td>
                <td className="s15">{obtained}</td>
                <td className="s15">{subject.credits}</td>
                <td className="s16">
                  <span
                    style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}
                  >
                    {grade.marks}
                  </span>
                </td>
                <td className="s15">{gradePoint}</td>
                <td className="s15">{gpc.marks}</td>
                <td className="s16">
                  <span
                    style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}
                  >
                    {grade.marks === "F" ? "N" : "E"},C
                  </span>
                </td>
              </tr>
            );
          })}

          <tr style={{ height: 20 }}>
            <th
              id="855677289R20"
              style={{ height: 20 }}
              className="row-headers-background"
            />
            <td className="s12" />
            <td className="s17" colSpan={3}>
              <span style={{ fontSize: "12pt", fontFamily: "Times New Roman" }}>
                Credit : {studentResult.marks.CTotal}
              </span>
            </td>
            <td className="s17" dir="ltr" colSpan={7}>
              CG : {studentResult.marks.GPCTotal}
            </td>
            <td className="s17" dir="ltr" colSpan={7}>
              SGPI : {studentResult.sgpi}
            </td>
          </tr>
          <tr style={{ height: 20 }}>
            <th
              id="855677289R21"
              style={{ height: 20 }}
              className="row-headers-background"
            />
            <td className="s12" />
            <td className="s17" colSpan={3}>
              <span style={{ fontSize: "12pt", fontFamily: "Times New Roman" }}>
                Grand Total : {studentResult.marks.MarksOTotal}/{maxTotal}
              </span>
            </td>
            <td className="s17" dir="ltr" colSpan={7}>
              Percentage :{" "}
              {roundUpToTwoDecimals(
                studentResult.marks.MarksOTotal / maxTotal
              ) * 100}
            </td>
            <td className="s17" dir="ltr" colSpan={7}>
              Status :{" "}
              {studentResult.result === "F" ? "UNSUCCESSFUL" : "SUCCESSFUL"}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Marksheet;
