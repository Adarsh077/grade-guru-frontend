import { MasterDepartmentService } from "@/services";
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

export const getAllMasterDepartments = () => async (dispatch) => {
  try {
    dispatch(
      setError({
        error: null,
      })
    );

    const { departments } = await MasterDepartmentService.getAllDepartments();

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

export const addMasterDepartment =
  (data = {}) =>
  async (dispatch) => {
    try {
      const { name, hod } = data;
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

      const { department } = await MasterDepartmentService.addDepartment({
        name,
        hod,
      });

      if (department) {
        await dispatch(getAllMasterDepartments());
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

export const updateMasterDepartment =
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

      const { department } = await MasterDepartmentService.updateDepartment({
        name,
        hod,
        departmentId,
      });

      if (department) {
        await dispatch(getAllMasterDepartments({ batch: department.batch }));
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

export const deleteMasterDepartment =
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

      const { department } = await MasterDepartmentService.deleteDepartment({
        departmentId,
      });

      if (department) {
        await dispatch(getAllMasterDepartments());
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
