import { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { Loader2, XCircleIcon } from "lucide-react";

/**
dispatchFunction: (dispatch: Dispatch<AnyAction>) => Promise<void>;
dependencies?: any[];
loadFirstThenRender?: boolean;
disableLoading?: boolean;
shouldNotFetch?: boolean;
error: AppError | null;
*/
const FetchData = (props) => {
  const {
    children,
    dispatchFunction,

    disableLoading = false,
    shouldNotFetch = false,
    loadFirstThenRender = false,
    dependencies = [],
    error,
  } = props;

  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, [...dependencies]);

  const fetchData = async () => {
    if (shouldNotFetch) return setIsLoading(false);
    await dispatch(dispatchFunction);
    setIsLoading(false);
  };

  if (error?.message) {
    return (
      <p className="bg-red-100 rounded flex items-center space-x-3 w-full py-3 px-5 text-red-600">
        <XCircleIcon className="w-5 h-5" />
        <span>{error?.message}</span>
      </p>
    );
  }

  if (isLoading && loadFirstThenRender) {
    return (
      <div className="relative w-full h-full">
        {isLoading && (
          <div className="absolute flex items-center w-full h-full z-10">
            <div className="h-4">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="relative">
      {!disableLoading && isLoading && (
        <div className="absolute flex items-center w-full h-full z-10">
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        </div>
      )}
      <div className="z-0">{children}</div>
    </div>
  );
};

export default FetchData;
