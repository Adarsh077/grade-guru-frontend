import { Navigate } from "react-router-dom";

import caslEnum from "@/constants/casl.enum";
import { useCaslCan, useQueryString } from "@/hooks";

const Redirect = () => {
  const { parsedQueryString } = useQueryString();
  const batch = parsedQueryString.batch;

  const getPathWithBatch = (path) => {
    if (!path) return "";
    if (!batch) return path;

    return `${path}?batch=${batch}`;
  };

  const canNotManageSubjects = !useCaslCan([
    { action: caslEnum.actions.manage, subject: caslEnum.subjects.subjects },
  ]);

  if (canNotManageSubjects) {
    return <Navigate to={getPathWithBatch("/subjects/my")} />;
  }

  return <Navigate to={getPathWithBatch("/departments")} />;
};
export default Redirect;
