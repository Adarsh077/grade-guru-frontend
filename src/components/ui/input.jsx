import * as React from "react";

import { cn } from "@/utils";
import { useFormField } from "./form";

const Input = React.forwardRef(
  ({ className, type, children, ...props }, ref) => {
    let formFields = useFormField();

    let body = children;

    if (formFields) {
      body = formFields.error ? String(formFields.error.message) : children;
    }

    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className,
          body &&
            "focus-visible:ring-destructive border-destructive placeholder:text-destructive text-destructive"
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
