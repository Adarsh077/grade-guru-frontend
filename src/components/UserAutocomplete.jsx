import * as React from "react";
import UserService from "@/services/user.service";
import AutocompleteComponent from "./Autocomplete";

const UserAutocompleteComponent = (props, ref) => {
  const [value, setValue] = React.useState(null);
  const [users, setUsers] = React.useState([]);

  const handleSearch = async (query) => {
    try {
      if (!query) {
        setUsers([]);
        return;
      }

      const { users: results } = await UserService.search(query);

      if (results && Array.isArray(results)) {
        setUsers(
          results.map((user) => ({
            label: `${user.name} (${user.email})`,
            value: user._id,
          }))
        );
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <AutocompleteComponent
      onInputChange={handleSearch}
      options={users}
      onChange={(newValue) => setValue(newValue)}
      value={value}
      placeholder="Select User"
      onNewItemCreate={(inputValue) => console.log({ inputValue })}
      creatable
      id="select-user"
      ref={ref}
      {...props}
    />
  );
};

const UserAutocomplete = React.forwardRef(UserAutocompleteComponent);

export default UserAutocomplete;
