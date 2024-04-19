import queryString from "query-string";
import { useNavigate, useLocation } from "react-router";

const useQueryString = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const parsedQueryString = queryString.parse(location.search);
  const parsedQueryHash = queryString.parse(location.hash);

  const changeQueryHash = (key, value) => {
    const newQueryHash = {
      ...parsedQueryHash,
      [key]: value,
    };

    const queryHashString = queryString.stringify(newQueryHash);

    navigate(`${location.pathname}${location.search}#${queryHashString}`, {
      replace: true,
    });
  };

  const changeQueryString = (queries, options = {}) => {
    const { replace } = options;
    if (replace) {
      queryString.stringify(queries);
      return;
    }

    for (const key in queries) {
      if (queries[key] === false) {
        delete parsedQueryString[key];
        delete queries[key];
      }
    }

    const newQueryString = queryString.stringify({
      ...parsedQueryString,
      ...queries,
    });

    const queryHashString = queryString.stringify(parsedQueryHash);

    navigate(`${location.pathname}?${newQueryString}#${queryHashString}`, {
      replace: true,
    });
  };

  const removeQueryString = (keys) => {
    const newParsed = { ...parsedQueryString };
    if (Array.isArray(keys)) {
      for (const key of keys) {
        delete newParsed[key];
      }
    } else {
      delete newParsed[keys];
    }

    const newQueryString = queryString.stringify(newParsed);
    navigate(`${location.pathname}?${newQueryString}`, { replace: true });
  };

  return {
    parsedQueryString,
    changeQueryString,
    changeQueryHash,
    removeQueryString,
    parsedQueryHash,
    queryString,
  };
};

export default useQueryString;
