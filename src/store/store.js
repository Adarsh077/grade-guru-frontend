import { combineReducers, configureStore } from "@reduxjs/toolkit";

import authSlice from "./auth/auth.slice";
import batchSlice from "./batch/batch.slice";
import breadcrumbSlice from "./breadcrumb/breadcrumb.slice";
import departmentSlice from "./department/department.slice";
import marksBySubjectSlice from "./marks-by-subject/marks-by-subject.slice";
import masterDepartmentSlice from "./master-list/department/department.slice";
import masterSemesterSlice from "./master-list/semester/semester.slice";
import masterSubjectSlice from "./master-list/subject/subject.slice";
import semesterSlice from "./semester/semester.slice";
import studentSlice from "./students/students.slice";
import subjectSlice from "./subject/subject.slice";
import subjectGroupSlice from "./subject-group/subject-group.slice";
import userSlice from "./user/user.slice";

const rootReducer = combineReducers({
  authReducer: authSlice,
  userReducer: userSlice,
  batchReducer: batchSlice,
  departmentReducer: departmentSlice,
  semesterReducer: semesterSlice,
  subjectReducer: subjectSlice,
  breadcrumbReducer: breadcrumbSlice,
  marksBySubjectReducer: marksBySubjectSlice,
  studentReducer: studentSlice,
  masterDepartmentReducer: masterDepartmentSlice,
  masterSemesterReducer: masterSemesterSlice,
  masterSubjectReducer: masterSubjectSlice,
  subjectGroupReducer: subjectGroupSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: import.meta.env.DEV,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
