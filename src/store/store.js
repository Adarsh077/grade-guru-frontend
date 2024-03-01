import { combineReducers, configureStore } from "@reduxjs/toolkit";

import authSlice from "./auth/auth.slice";
import batchSlice from "./batch/batch.slice";
import breadcrumbSlice from "./breadcrumb/breadcrumb.slice";
import departmentSlice from "./department/department.slice";
import marksBySubjectSlice from "./marks-by-subject/marks-by-subject.slice";
import masterDepartmentSlice from "./master-list/department/department.slice";
import semesterSlice from "./semester/semester.slice";
import studentSlice from "./students/students.slice";
import studentsBySemesterSlice from "./students-by-semester/students-by-semester.slice";
import subjectSlice from "./subject/subject.slice";
import userSlice from "./user/user.slice";

const rootReducer = combineReducers({
  authReducer: authSlice,
  userReducer: userSlice,
  batchReducer: batchSlice,
  departmentReducer: departmentSlice,
  semesterReducer: semesterSlice,
  subjectReducer: subjectSlice,
  breadcrumbReducer: breadcrumbSlice,
  studentsBySemesterReducer: studentsBySemesterSlice,
  marksBySubjectReducer: marksBySubjectSlice,
  studentReducer: studentSlice,
  masterDepartmentReducer: masterDepartmentSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: import.meta.env.DEV,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
