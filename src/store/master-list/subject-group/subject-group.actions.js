import { MasterSubjectGroupService } from "@/services";
import { gracelyHandleError } from "@/utils";

import { setError, setSubjectGroups } from "./subject-group.slice";

export const getAllMasterSubjectGroups =
  ({ semesterId }) =>
  async (dispatch) => {
    try {
      dispatch(
        setError({
          error: null,
        })
      );

      const { subjectGroups } =
        await MasterSubjectGroupService.getAllSubjectGroups({
          semesterId,
        });

      dispatch(setSubjectGroups({ subjectGroups, semesterId }));
    } catch (err) {
      const appError = gracelyHandleError(err);
      dispatch(
        setError({
          error: appError,
        })
      );
    }
  };

export const addMasterSubjectGroups =
  ({ semesterId, name, isATKTSubjectGroup }) =>
  async (dispatch) => {
    try {
      dispatch(
        setError({
          error: null,
        })
      );

      const { subjectGroup } = await MasterSubjectGroupService.addSubjectGroups(
        {
          semesterId,
          name,
          isATKTSubjectGroup,
        }
      );

      if (subjectGroup) {
        await dispatch(getAllMasterSubjectGroups({ semesterId }));
        return true;
      }
    } catch (err) {
      const appError = gracelyHandleError(err);
      dispatch(
        setError({
          error: appError,
        })
      );
    }
  };
