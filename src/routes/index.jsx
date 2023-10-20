import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { checkIsAuthenticated } from "@/store/auth/auth.actions";

import PublicRoutes from "./PublicRoutes";
import ProtectedRoutes from "./ProtectedRoutes";
import { isAutenticatedSelector } from "@/store/auth/auth.selectors";
import FetchData from "@/components/FetchData";
import { getUserDetails } from "@/store/user/user.actions";
import { userErrorSelector } from "@/store/user/user.selectors";

const AppRoutes = () => {
  const dispatch = useDispatch();

  const isAuthenticated = useSelector(isAutenticatedSelector);
  const isAuthenticating = useSelector(
    (state) => state.authReducer.isAuthenticating
  );
  const userError = useSelector(userErrorSelector);

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
      <ProtectedRoutes />
    </FetchData>
  ) : (
    <PublicRoutes />
  );
};

export default AppRoutes;
