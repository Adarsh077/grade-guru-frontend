import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";

const MasterListSidebarItem = (props) => {
  const { startIcon, isSelected, to, children } = props;

  return (
    <Link className="block h-full" to={to}>
      <Button
        variant={isSelected ? "secondary" : "ghost"}
        className="w-full justify-start"
      >
        <span className="mr-2">{startIcon}</span>
        {children}
      </Button>
    </Link>
  );
};

export default MasterListSidebarItem;
