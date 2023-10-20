import { DepartmentService } from "@/services";
import { gracelyHandleError } from "@/utils";
import { setDepartments, setError } from "./department.slice";

export const getAllDepartments = () => async (dispatch) => {
  try {
    dispatch(
      setError({
        error: null,
      })
    );

    const { departments } = await DepartmentService.getAllDepartments();

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
