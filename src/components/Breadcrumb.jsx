import { cn } from "@/utils";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Breadcrumb = (props) => {
  return (
    <div
      className={cn(
        "flex items-center [&>svg]:text-gray-400 text-gray-500 text-lg",
        props.className
      )}
    >
      <Link className="hover:bg-gray-100 px-4 py-1 rounded-full">Home</Link>
      <ChevronRight className="w-5 h-5 " />
      <Link className="hover:bg-gray-100 text-lg text-gray-950 px-4 py-1 rounded-full">
        Information Technology
      </Link>
    </div>
  );
};
export default Breadcrumb;
