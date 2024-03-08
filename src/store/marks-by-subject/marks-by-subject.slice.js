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

    updateMarksOfStudent: (state, action) => {
      const { subjectId, studentId, examName, marksScored } = action.payload;

      const marksBySubjectId = state.marksBySubjectId[subjectId];

      if (!marksBySubjectId) return state;

      const marksIndex = marksBySubjectId.marks.findIndex(
        (marks) => marks.student._id === studentId
      );

      if (marksIndex === -1) return state;

      const examIndex = marksBySubjectId.marks[marksIndex].exams.findIndex(
        (exam) => exam.examName === examName
      );

      if (examIndex > -1) {
        marksBySubjectId.marks[marksIndex].exams[examIndex].marksScored =
          marksScored;
      } else {
        marksBySubjectId.marks[marksIndex].exams.push({
          examName,
          marksScored,
        });
      }
    },
  },
});

export const {
  setMarksBySubjectId,
  reset,
  setError,
  setIsCallingUpdateMarksBySubjectIdApi,
  setUpdateMarksBySubjectIdError,
  updateMarksOfStudent,
} = marksBySubjectSlice.actions;

export default marksBySubjectSlice.reducer;
