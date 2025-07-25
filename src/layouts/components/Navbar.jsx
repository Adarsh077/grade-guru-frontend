import { Link, useLocation } from "react-router-dom";

import caslEnum from "@/constants/casl.enum";
import { BatchSelector } from "@/features";
import { useCaslCan, useQueryString } from "@/hooks";
import { cn } from "@/utils";

import UserProfile from "./UserProfile";

const Navbar = (props) => {
  const { disableBatchSelector = false } = props;

  const { parsedQueryString } = useQueryString();
  const location = useLocation();

  const isNotStaff = useCaslCan([
    { action: caslEnum.actions.manage, subject: caslEnum.subjects.subjects },
  ]);

  const isDashboardSelected =
    ["/departments", "/semesters", "/subjects"].find((path) =>
      location.pathname.startsWith(path)
    ) && location.pathname !== "/subjects/my";

  return (
    <div className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center">
          <img src="/logo.png" className="h-8 mr-2" alt="UCOE" />
        </Link>
        {isNotStaff && (
          <nav
            className={cn(
              "flex items-center justify-center space-x-4 lg:space-x-6"
            )}
          >
            <Link
              to={`/?batch=${parsedQueryString.batch || ""}`}
              className={cn(
                "text-sm text-muted-foreground font-medium transition-colors hover:text-primary",
                isDashboardSelected && "text-primary"
              )}
            >
              Dashboard
            </Link>
            <Link
              to={`/subjects/my?batch=${parsedQueryString.batch || ""}`}
              className={cn(
                "text-sm text-muted-foreground font-medium transition-colors hover:text-primary",
                location.pathname === "/subjects/my" && "text-primary"
              )}
            >
              My Subjects
            </Link>
          </nav>
        )}
        <div className="flex items-center space-x-4">
          <BatchSelector disabled={disableBatchSelector} />
          <UserProfile />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
