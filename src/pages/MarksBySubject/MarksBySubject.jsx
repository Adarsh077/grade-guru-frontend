import "react-data-grid/lib/styles.css";

import { useRef } from "react";

import DataGrid, { textEditor } from "react-data-grid";
import { useDispatch, useSelector } from "react-redux";

import caslEnum from "@/constants/casl.enum";
import {
  ExamNamesEnum,
  ExamsBySubjectType,
  ReadableExamNamesEnum,
} from "@/constants/enum";
import { useCaslCan } from "@/hooks";
import { updateMarksBySubjectId } from "@/store/marks-by-subject/marks-by-subject.actions";
import { marksBySubjectIdSelector } from "@/store/marks-by-subject/marks-by-subject.selectors";
import { subjectByIdSelector } from "@/store/subject/subject.selectors";
// const columns = [{ key: "name", name: "Name", renderEditCell: textEditor }];

const MarksBySubject = ({ subjectId }) => {
  const dispatch = useDispatch();
  const gridRef = useRef(null);

  const marksBySubject = useSelector(marksBySubjectIdSelector(subjectId));
  const subject = useSelector(subjectByIdSelector(subjectId));

  const isAdmin = useCaslCan([
    { action: caslEnum.actions.manage, subject: caslEnum.subjects.all },
  ]);

  const isEditingRef = useRef(false);

  const columns = [
    { key: "eseSeatNo", name: "ESE Seat No" },
    { key: "iatSeatNo", name: "IAT Seat No" },
    
    { key: "student", name: "Student Name" },
    ...ExamsBySubjectType[subject.subjectType]
      .filter((exam) => (isAdmin ? true : exam !== ExamNamesEnum.ESE))
      .map((exam) => ({
        key: exam,
        name: ReadableExamNamesEnum[exam],
        renderEditCell: textEditor,
      })),
  ];

  const rows = (marksBySubject?.marks || []).map((marks) => {
    const row = {
      iatSeatNo: marks.iatSeatNo,
      eseSeatNo: marks.eseSeatNo,
      student: marks.student.name,
      studentId: marks.student._id,
    };
    ExamsBySubjectType[subject.subjectType].forEach((exam) => {
      row[exam] =
        marks.exams.find(
          (marksOfStudentByExamRecord) =>
            marksOfStudentByExamRecord.examName === exam
        )?.marksScored ?? "";
    });
    return row;
  });

  const handleChange = (updatedRows, data) => {
    const updatedRow = updatedRows[data.indexes[0]];

    const examName = data.column.key;
    const marksScored = updatedRow[examName];
    const studentId = updatedRow.studentId;

    dispatch(
      updateMarksBySubjectId({ subjectId, studentId, examName, marksScored })
    );
  };

  const handleKeyDown = (data, event) => {
    if (event.key === "Enter" && gridRef.current) {
      gridRef.current.selectCell(
        {
          rowIdx: isEditingRef.current ? data.rowIdx + 1 : data.rowIdx,
          idx: data.column.idx,
        },
        true
      );
      isEditingRef.current = !isEditingRef.current;
    }
    if ("qwertyuiopasdfghjklzxcvbnm1234567890 ".split("").includes(event.key)) {
      isEditingRef.current = true;
    }
  };

  return (
    <div className="border-t border-slate-300">
      <DataGrid
        ref={gridRef}
        className="rdg-light fill-grid"
        style={{ height: "auto", resize: "both" }}
        headerRowHeight={50}
        columns={columns}
        rows={rows}
        onRowsChange={handleChange}
        onCellKeyDown={handleKeyDown}
        rowKeyGetter={(student) => student.studentId}
      />
    </div>
  );
};
export default MarksBySubject;
