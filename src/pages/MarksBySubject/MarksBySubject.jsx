import "react-data-grid/lib/styles.css";

import DataGrid, { textEditor } from "react-data-grid";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { marksBySubjectIdSelector } from "@/store/marks-by-subject/marks-by-subject.selectors";
import { updateMarksBySubjectId } from "@/store/marks-by-subject/marks-by-subject.actions";
// const columns = [{ key: "name", name: "Name", renderEditCell: textEditor }];

const MarksBySubject = ({ subjectId }) => {
  const dispatch = useDispatch();
  const gridRef = useRef(null);

  const marksBySubject = useSelector(marksBySubjectIdSelector(subjectId));
  const isEditingRef = useRef(false);

  const columns = [
    { key: "student", name: "Student Name" },
    ...marksBySubject.exams.map((exam) => ({
      key: exam.name,
      name: exam.name,
      renderEditCell: textEditor,
    })),
  ];

  const rows = marksBySubject.marksOfStudents.map((marksOfStudent) => {
    const row = {
      student: marksOfStudent.student.name,
      studentId: marksOfStudent.student._id,
    };
    marksBySubject.exams.forEach((exam) => {
      row[exam.name] =
        marksOfStudent.marksOfStudentByExam.find(
          (marksOfStudentByExamRecord) =>
            marksOfStudentByExamRecord.examName === exam.name
        )?.marksScored ?? "";
    });
    return row;
  });

  const handleChange = (updatedRows, data) => {
    const updatedRow = updatedRows[data.indexes[0]];

    const body = {
      student: updatedRow.studentId,
      marksOfStudentByExam: [],
    };

    marksBySubject.exams.forEach((exam) => {
      body.marksOfStudentByExam.push({
        examName: exam.name,
        marksScored: updatedRow[exam.name],
      });
    });

    dispatch(updateMarksBySubjectId({ subjectId, marksOfStudent: body }));
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
        style={{ height: "auto" }}
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
