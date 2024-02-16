import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import FetchData from "@/components/FetchData";
import { checkIsAuthenticated } from "@/store/auth/auth.actions";
import { isAutenticatedSelector } from "@/store/auth/auth.selectors";
import { getAllBatches } from "@/store/batch/batch.actions";
import { batchErrorSelector } from "@/store/batch/batch.selectors";
import {
  getUserDetails,
  getUserAbilityStatements,
} from "@/store/user/user.actions";
import {
  userAbilityStatementsErrorSelector,
  userErrorSelector,
} from "@/store/user/user.selectors";

import ProtectedRoutes from "./ProtectedRoutes";
import PublicRoutes from "./PublicRoutes";

const AppRoutes = () => {
  const dispatch = useDispatch();

  const isAuthenticated = useSelector(isAutenticatedSelector);
  const isAuthenticating = useSelector(
    (state) => state.authReducer.isAuthenticating
  );
  const userError = useSelector(userErrorSelector);
  const batchError = useSelector(batchErrorSelector);
  const userAbilityStatementsError = useSelector(
    userAbilityStatementsErrorSelector
  );

  useEffect(() => {
    if (!isAuthenticated) dispatch(checkIsAuthenticated());
    // eslint-disable-next-line
  }, []);

  if (isAuthenticating || isAuthenticated === null)
    return <div>Loading...</div>;

  return isAuthenticated ? (
    <FetchData
      loadFirstThenRender
      error={userError}
      dispatchFunction={getUserDetails()}
    >
      <FetchData
        loadFirstThenRender
        error={userAbilityStatementsError}
        dispatchFunction={getUserAbilityStatements()}
      >
        <FetchData
          loadFirstThenRender
          error={batchError}
          dispatchFunction={getAllBatches()}
        >
          <ProtectedRoutes />
        </FetchData>
      </FetchData>
    </FetchData>
  ) : (
    <PublicRoutes />
  );
};

export default AppRoutes;
