import { useRef } from "react";
import "react-data-grid/lib/styles.css";

import DataGrid, { textEditor } from "react-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { studentsBySemesterSelector } from "@/store/students-by-semester/students-by-semester.selectors";
import {
  addStudentsBySemester,
  updateStudentsBySemester,
} from "@/store/students-by-semester/students-by-semester.actions";
import { AddMoreRows } from "@/features";

const columns = [
  { key: "name", name: "Name", renderEditCell: textEditor, editable: true },
];

const StudentsBySemester = ({ semesterId }) => {
  const gridRef = useRef(null);
  const dispatch = useDispatch();
  const studentsBySemester = useSelector(
    studentsBySemesterSelector(semesterId)
  );

  const handleChange = (updatedRows, data) => {
    const updatedRow = updatedRows[data.indexes[0]];

    dispatch(updateStudentsBySemester({ semesterId, students: [updatedRow] }));
  };

  const handleKeyDown = (data, event) => {
    if (event.key === "Enter" && gridRef.current) {
      gridRef.current.selectCell(
        {
          rowIdx: data.rowIdx + 1,
          idx: data.column.idx,
        },
        true
      );
    }
  };

  const handleAddMoreRows = (rowsCount) => {
    dispatch(
      addStudentsBySemester({
        semesterId,
        students: Array(rowsCount)
          .fill(0)
          .map(() => ({ name: "" })),
      })
    );
  };

  return (
    <div className="border-t border-slate-300">
      <DataGrid
        ref={gridRef}
        className="rdg-light fill-grid"
        style={{ height: "auto" }}
        headerRowHeight={50}
        columns={columns}
        rows={studentsBySemester}
        onRowsChange={handleChange}
        onCellKeyDown={handleKeyDown}
        rowKeyGetter={(student) => student._id}
      />
      <AddMoreRows handleAddMoreRows={handleAddMoreRows} />
    </div>
  );
};
export default StudentsBySemester;
