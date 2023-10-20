import { combineReducers, configureStore } from "@reduxjs/toolkit";

import authSlice from "./auth/auth.slice";
import userSlice from "./user/user.slice";
import departmentSlice from "./department/department.slice";

const rootReducer = combineReducers({
  authReducer: authSlice,
  userReducer: userSlice,
  departmentReducer: departmentSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: import.meta.env.DEV,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
