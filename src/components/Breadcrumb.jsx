import { ChevronRight } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { removeBreadcrumbItemUntil } from "@/store/breadcrumb/breadcrumb.actions";
import { breadcrumbsSelector } from "@/store/breadcrumb/breadcrumb.selectors";
import { cn } from "@/utils";

const Breadcrumb = (props) => {
  const breadcrumbs = useSelector(breadcrumbsSelector);
  const dispatch = useDispatch();

  const handleBreadcrumbClick = (index) => {
    dispatch(
      removeBreadcrumbItemUntil({
        index,
      })
    );
  };

  return (
    <div
      className={cn(
        "flex items-center [&>svg]:text-gray-400 text-gray-500 text-lg",
        props.className
      )}
    >
      {breadcrumbs.map((breadcrumb, index) => {
        if (index === breadcrumbs.length - 1) {
          return (
            <p
              key={`breadcrumb-${index}`}
              className="text-lg text-gray-950 px-4 py-1 rounded-full"
            >
              {breadcrumb.label}
            </p>
          );
        }

        return [
          <Link
            key={`breadcrumb-${index}`}
            to={breadcrumb.link}
            className="hover:bg-gray-100 px-4 py-1 rounded-full"
            onClick={() => handleBreadcrumbClick(index)}
          >
            {breadcrumb.label}
          </Link>,
          <ChevronRight
            key={`breadcrumb-${index}-arrow`}
            className="w-5 h-5 "
          />,
        ];
      })}
    </div>
  );
};
export default Breadcrumb;
