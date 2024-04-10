import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useQueryString } from "@/hooks";
import { removeBreadcrumbItemUntil } from "@/store/breadcrumb/breadcrumb.actions";
import { breadcrumbsSelector } from "@/store/breadcrumb/breadcrumb.selectors";

const AppBreadcrumb = () => {
  const breadcrumbs = useSelector(breadcrumbsSelector);
  const { parsedQueryString } = useQueryString();
  const dispatch = useDispatch();

  const handleBreadcrumbClick = (index) => {
    dispatch(
      removeBreadcrumbItemUntil({
        index,
      })
    );
  };

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbs.map((breadcrumb, index) => {
          if (index === breadcrumbs.length - 1) {
            return (
              <BreadcrumbItem key={`breadcrumb-${index}`}>
                <BreadcrumbPage>{breadcrumb.label}</BreadcrumbPage>
              </BreadcrumbItem>
            );
          }

          return [
            <BreadcrumbItem key={`breadcrumb-${index}`}>
              <Link
                onClick={() => handleBreadcrumbClick(index)}
                to={`${breadcrumb.link}?batch=${parsedQueryString.batch}`}
              >
                {breadcrumb.label}
              </Link>
            </BreadcrumbItem>,
            <BreadcrumbSeparator key={`breadcrumb-${index}-arrow`} />,
          ];
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
export default AppBreadcrumb;
