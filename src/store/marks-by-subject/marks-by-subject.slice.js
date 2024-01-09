import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  marksBySubjectId: {},
  error: null,

  isCallingUpdateMarksBySubjectIdApi: false,
  updateMarksBySubjectIdError: null,
};

export const marksBySubjectSlice = createSlice({
  name: "marksBySubjectSlice",
  initialState,
  reducers: {
    reset: () => initialState,
    setMarksBySubjectId: (state, action) => {
      const { subjectId, marksBySubject } = action.payload;
      state.marksBySubjectId[subjectId] = marksBySubject;
    },
    updateMarksForStudent: (state, action) => {
      const { subjectId, marksOfStudent } = action.payload;
      const currentStudentMarksIndex = state.marksBySubjectId[
        subjectId
      ].marksOfStudents.findIndex(
        (marksOfStudentRecord) =>
          marksOfStudentRecord.student._id === marksOfStudent.student
      );
      if (currentStudentMarksIndex === -1) return state;

      state.marksBySubjectId[subjectId].marksOfStudents[
        currentStudentMarksIndex
      ].marksOfStudentByExam = marksOfStudent.marksOfStudentByExam;
    },
    setError: (state, action) => {
      state.error = action.payload.error;
    },

    setIsCallingUpdateMarksBySubjectIdApi: (state, action) => {
      const { isLoading } = action.payload;
      state.isCallingUpdateMarksBySubjectIdApi = isLoading;
    },
    setUpdateMarksBySubjectIdError: (state, action) => {
      state.updateMarksBySubjectIdError = action.payload.error;
    },
  },
});

export const {
  setMarksBySubjectId,
  reset,
  setError,
  setIsCallingUpdateMarksBySubjectIdApi,
  setUpdateMarksBySubjectIdError,
  updateMarksForStudent,
} = marksBySubjectSlice.actions;

export default marksBySubjectSlice.reducer;
