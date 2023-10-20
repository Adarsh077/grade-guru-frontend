import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import UserService from "@/services/user.service";

const SelectUserCombobox = (props) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    if (!open) {
      setUsers([]);
    }
  }, [open]);

  const handleSearch = async (query) => {
    try {
      const { users: results } = await UserService.search(query);

      if (results && Array.isArray(results)) {
        setUsers(results);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn("w-full justify-between", props.className)}
        >
          {value
            ? users.find((user) => user._id === value)?.label
            : "Select User..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0">
        <Command>
          <CommandInput
            onValueChange={handleSearch}
            placeholder="Search user..."
          />
          <CommandEmpty>No user found.</CommandEmpty>
          <CommandGroup>
            {users.map((user) => (
              <CommandItem
                key={user._id}
                onSelect={(currentValue) => {
                  setValue(currentValue._id === value ? "" : currentValue._id);
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === user._id ? "opacity-100" : "opacity-0"
                  )}
                />
                {user.email}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
export default SelectUserCombobox;
