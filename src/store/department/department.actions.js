import { DepartmentService } from "@/services";
import { gracelyHandleError } from "@/utils";
import {
  setAddDepartmentError,
  setDeleteDepartmentError,
  setDepartments,
  setError,
  setIsCallingAddDepartmentApi,
  setIsCallingDeleteDepartmentApi,
  setIsCallingUpdateDepartmentApi,
  setUpdateDepartmentError,
} from "./department.slice";

export const getAllDepartments =
  ({ batch }) =>
  async (dispatch) => {
    try {
      dispatch(
        setError({
          error: null,
        })
      );

      const { departments } = await DepartmentService.getAllDepartments({
        batch,
      });

      dispatch(setDepartments({ departments }));
    } catch (err) {
      const appError = gracelyHandleError(err);
      dispatch(
        setError({
          error: appError,
        })
      );
    }
  };

export const addDepartment =
  (data = {}) =>
  async (dispatch) => {
    try {
      const { name, hod, batch } = data;
      dispatch(
        setAddDepartmentError({
          error: null,
        })
      );
      dispatch(
        setIsCallingAddDepartmentApi({
          isLoading: true,
        })
      );

      const { department } = await DepartmentService.addDepartment({
        name,
        hod,
        batch,
      });

      if (department) {
        await dispatch(getAllDepartments({ batch }));
      }
      return true;
    } catch (err) {
      const appError = gracelyHandleError(err);
      dispatch(
        setAddDepartmentError({
          error: appError,
        })
      );
      return false;
    } finally {
      dispatch(
        setIsCallingAddDepartmentApi({
          isLoading: false,
        })
      );
    }
  };

export const updateDepartment =
  (data = {}) =>
  async (dispatch) => {
    try {
      const { name, hod, departmentId } = data;
      dispatch(
        setUpdateDepartmentError({
          error: null,
        })
      );
      dispatch(
        setIsCallingUpdateDepartmentApi({
          isLoading: true,
        })
      );

      const { department } = await DepartmentService.updateDepartment({
        name,
        hod,
        departmentId,
      });

      if (department) {
        await dispatch(getAllDepartments({ batch: department.batch }));
      }
      return true;
    } catch (err) {
      const appError = gracelyHandleError(err);
      dispatch(
        setUpdateDepartmentError({
          error: appError,
        })
      );
      return false;
    } finally {
      dispatch(
        setIsCallingUpdateDepartmentApi({
          isLoading: false,
        })
      );
    }
  };

export const deleteDepartment =
  (data = {}) =>
  async (dispatch) => {
    try {
      const { departmentId } = data;
      dispatch(
        setDeleteDepartmentError({
          error: null,
        })
      );
      dispatch(
        setIsCallingDeleteDepartmentApi({
          isLoading: true,
        })
      );

      const { department } = await DepartmentService.deleteDepartment({
        departmentId,
      });

      if (department) {
        await dispatch(getAllDepartments({ batch: department.batch }));
      }
      return true;
    } catch (err) {
      const appError = gracelyHandleError(err);
      dispatch(
        setDeleteDepartmentError({
          error: appError,
        })
      );
      return false;
    } finally {
      dispatch(
        setIsCallingDeleteDepartmentApi({
          isLoading: false,
        })
      );
    }
  };
