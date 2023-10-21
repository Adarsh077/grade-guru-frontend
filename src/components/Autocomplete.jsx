import {
  useAutocomplete,
  createFilterOptions,
} from "@mui/base/useAutocomplete";
import { Input } from "./ui/input";
import React from "react";

const filter = createFilterOptions();

const AutocompleteComponent = (props, ref) => {
  const {
    options = [],
    onChange,
    value,
    placeholder,
    onNewItemCreate,
    creatable,
    id,
    onInputChange,
    name,
    onBlur,
  } = props;
  const filterOptions = (options, params) => {
    var filtered = [];
    filtered = filter(options, params);

    if (creatable) {
      const { inputValue } = params;

      if (inputValue !== "" && !filtered.length) {
        filtered.push({
          inputValue,
          label: `Add "${inputValue}"`,
          isNew: true,
        });
      }
    }

    return filtered;
  };

  const getOptionLabel = (option) => {
    if (typeof option === "string") {
      return option;
    }
    // Add "xxx" option created dynamically
    if (option.inputValue) {
      return option.inputValue;
    }
    // Regular option
    return option.label;
  };

  const handleChange = (e, newValue) => {
    if (newValue && newValue.inputValue) {
      onNewItemCreate(newValue.inputValue);
    } else {
      if (newValue == null) {
        onChange(null);
      } else {
        onChange(newValue);
      }
    }
  };

  const {
    getRootProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
  } = useAutocomplete({
    options,
    getOptionLabel,
    isOptionEqualToValue: (option, value) => option.value === value?.value,
    onChange: handleChange,
    value,
    id,
    filterOptions,
    onInputChange: (_, value) => {
      onInputChange(value);
    },
  });
  return (
    <div className="relative">
      <div {...getRootProps()}>
        <Input
          ref={ref}
          className="w-full"
          placeholder={placeholder || ""}
          {...getInputProps()}
          name={name}
          onBlur={onBlur}
        />
      </div>
      {groupedOptions.length > 0 ? (
        <div
          className="w-full rounded-lg top-11 z-10 absolute bg-popover text-popover-foreground shadow-md outline-none overflow-auto max-h-52 border border-gray-200 [&>li.Mui-focused]:bg-accent p-1 list-none animate-in fade-in-0 zoom-in-95 slide-in-from-top-2"
          {...getListboxProps()}
        >
          {groupedOptions.map((option, index) => (
            <li
              title={option.label}
              className="w-full cursor-default select-none rounded-sm px-2 py-1.5 outline-none whitespace-nowrap overflow-hidden text-ellipsis"
              key={`autocomplete-${index}`}
              {...getOptionProps({ option, index })}
            >
              {option.label}
            </li>
          ))}
        </div>
      ) : null}
    </div>
  );
};

const AutoComplete = React.forwardRef(AutocompleteComponent);

export default AutoComplete;
