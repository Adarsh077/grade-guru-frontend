import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  breadcrumbs: [
    {
      label: "Home",
      link: "/",
    },
  ],
};

export const breadcrumbSlice = createSlice({
  name: "breadcrumbSlice",
  initialState,
  reducers: {
    reset: () => initialState,
    addBreadcrumbItem: (state, action) => {
      const { label, link } = action.payload;
      state.breadcrumbs.push({
        label,
        link,
      });
    },
    popBreadcrumbItemUntil: (state, action) => {
      const { index } = action.payload;
      state.breadcrumbs = state.breadcrumbs.slice(0, index + 1);
    },
  },
});

export const { addBreadcrumbItem, popBreadcrumbItemUntil, reset } =
  breadcrumbSlice.actions;

export default breadcrumbSlice.reducer;
