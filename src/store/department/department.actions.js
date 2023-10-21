import { DepartmentService } from "@/services";
import { gracelyHandleError } from "@/utils";
import {
  setAddDepartmentError,
  setDepartments,
  setError,
  setIsCallingAddDepartmentApi,
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
