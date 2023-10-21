import { Link } from "react-router-dom";
import UserProfile from "./UserProfile";
import { BatchSelector } from "@/features";

const Navbar = () => {
  return (
    <div className="border-b">
      <div className="md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto flex h-16 items-center px-4">
        <Link to="/" className="flex items-center">
          <img src="/logo.png" className="h-8 mr-2" alt="UCOE" />
        </Link>
        <div className="ml-auto flex items-center space-x-4">
          <BatchSelector />
          <UserProfile />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
