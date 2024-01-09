import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  studentsBySemester: {},
  error: null,

  isCallingUpdateStudentsBySemesterApi: false,
  updateStudentsBySemesterError: null,

  isCallingAddStudentsBySemesterApi: false,
  addStudentsBySemesterError: null,
};

export const studentsBySemesterSlice = createSlice({
  name: "studentsBySemesterSlice",
  initialState,
  reducers: {
    reset: () => initialState,
    addStudentsBySemesterId: (state, action) => {
      const { students, semesterId } = action.payload;

      if (!state.studentsBySemester[semesterId]) {
        state.studentsBySemester[semesterId] = [];
      }

      state.studentsBySemester[semesterId] = students;
    },
    setStudentsBySemester: (state, action) => {
      const { students, semesterId } = action.payload;

      state.studentsBySemester = {
        ...state.studentsBySemester,
        [semesterId]: students,
      };
    },
    updateStudentsBySemesterId: (state, action) => {
      const { students, semesterId } = action.payload;

      if (!state.studentsBySemester[semesterId]) {
        state.studentsBySemester[semesterId] = [];
      }

      for (const student of students) {
        const index = state.studentsBySemester[semesterId].findIndex(
          (studentRecord) => studentRecord._id === student._id
        );
        if (index === -1) continue;
        state.studentsBySemester[semesterId][index] = student;
      }
    },
    setError: (state, action) => {
      state.error = action.payload.error;
    },
    setIsCallingUpdateStudentsBySemesterApi: (state, action) => {
      const { isLoading } = action.payload;
      state.isCallingUpdateStudentsBySemesterApi = isLoading;
    },
    setIsCallingAddStudentsBySemesterApi: (state, action) => {
      const { isLoading } = action.payload;
      state.isCallingAddStudentsBySemesterApi = isLoading;
    },
    setUpdateStudentsBySemesterError: (state, action) => {
      state.updateStudentsBySemesterError = action.payload.error;
    },
    setAddStudentsBySemesterError: (state, action) => {
      state.addStudentsBySemesterError = action.payload.error;
    },
  },
});

export const {
  setStudentsBySemester,
  reset,
  setError,
  setIsCallingUpdateStudentsBySemesterApi,
  setUpdateStudentsBySemesterError,
  updateStudentsBySemesterId,
  addStudentsBySemesterId,
  setAddStudentsBySemesterError,
  setIsCallingAddStudentsBySemesterApi,
} = studentsBySemesterSlice.actions;

export default studentsBySemesterSlice.reducer;
