import { combineReducers, configureStore } from "@reduxjs/toolkit";

import authSlice from "./auth/auth.slice";
import userSlice from "./user/user.slice";
import batchSlice from "./batch/batch.slice";
import departmentSlice from "./department/department.slice";
import semesterSlice from "./semester/semester.slice";
import subjectSlice from "./subject/subject.slice";
import breadcrumbSlice from "./breadcrumb/breadcrumb.slice";

const rootReducer = combineReducers({
  authReducer: authSlice,
  userReducer: userSlice,
  batchReducer: batchSlice,
  departmentReducer: departmentSlice,
  semesterReducer: semesterSlice,
  subjectReducer: subjectSlice,
  breadcrumbReducer: breadcrumbSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: import.meta.env.DEV,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
