import { useEffect, useState } from "react";

import { Plus } from "lucide-react";
import { useDispatch } from "react-redux";

import { Button } from "@/components/ui/button";
import AddUserDailog from "@/features/AddUser";
import UserService from "@/services/user.service";
import { reset } from "@/store/breadcrumb/breadcrumb.slice";

import Users from "./Users";

const UsersRoot = () => {
  const dispatch = useDispatch();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    dispatch(reset());
    UserService.getAllUsers().then(({ users }) => setUsers(users));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div className="mb-4 grid grid-cols-12 justify-between">
        <div className="md:col-span-9 xl:col-span-9">
          <h1>Users</h1>
        </div>
        <div className="md:col-span-3 xl:col-span-3">
          <div className="flex justify-end">
            <AddUserDailog>
              <Button>
                <Plus className="mr-2 h-4 w-4" /> Add User
              </Button>
            </AddUserDailog>
          </div>
        </div>
      </div>
      <Users users={users} />
    </div>
  );
};
export default UsersRoot;
