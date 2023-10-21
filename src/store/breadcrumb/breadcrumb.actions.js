import { addBreadcrumbItem, popBreadcrumbItemUntil } from "./breadcrumb.slice";

export const pushBreadcrumbItem =
  ({ label, link }) =>
  async (dispatch) => {
    dispatch(addBreadcrumbItem({ label, link }));
  };

export const removeBreadcrumbItemUntil =
  ({ index }) =>
  async (dispatch) => {
    dispatch(popBreadcrumbItemUntil({ index }));
  };
