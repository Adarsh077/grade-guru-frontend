import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormRootError,
} from "@/components/ui/form";
import { DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import UserAutocomplete from "@/components/UserAutocomplete";
import { useDispatch, useSelector } from "react-redux";
import {
  addDepartmentErrorSelector,
  isCallingAddDepartmentApiSelector,
} from "@/store/department/department.selectors";
import { addDepartment } from "@/store/department/department.actions";
import { useQueryString } from "@/hooks";
import { useEffect } from "react";

const addDepartmentSchema = z.object({
  name: z.string().min(1, "Name is required!"),
  hod: z
    .object(
      {
        label: z.string(),
        value: z.string(),
      },
      { invalid_type_error: "HOD is requried!" }
    )
    .required("HOD is required!"),
});

const AddDepartmentForm = ({ handleClose }) => {
  const dispatch = useDispatch();
  const { parsedQueryString } = useQueryString();

  const isCallingAddDepartmentApi = useSelector(
    isCallingAddDepartmentApiSelector
  );
  const addDepartmentError = useSelector(addDepartmentErrorSelector);

  const form = useForm({
    resolver: zodResolver(addDepartmentSchema),
    defaultValues: {
      name: "",
      hod: null,
    },
  });

  useEffect(() => {
    if (!addDepartmentError) return;
    if (addDepartmentError.errors) {
      if (addDepartmentError.errors.name) {
        form.setError("name", { message: addDepartmentError.errors.name });
      }
      if (addDepartmentError.errors.hod) {
        form.setError("hod", { message: addDepartmentError.errors.hod });
      }
    }
    if (addDepartmentError.message) {
      form.setError("root", { message: addDepartmentError.message });
    }
  }, [addDepartmentError, form]);

  const onSubmit = async (values) => {
    if (!parsedQueryString.batch) {
      form.setError("root", { message: "Please select batch from navbar." });
    }
    const isCompletedWithoutError = await dispatch(
      addDepartment({
        name: values.name,
        hod: values.hod.value,
        batch: parsedQueryString.batch,
      })
    );
    if (isCompletedWithoutError) {
      handleClose();
    }
  };

  return (
    <div>
      <Form {...form}>
        <form className="space-y-2" onSubmit={form.handleSubmit(onSubmit)}>
          <FormRootError />
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Department name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="hod"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>HOD</FormLabel>
                  <FormControl>
                    <UserAutocomplete
                      {...field}
                      onChange={(newValue) => form.setValue("hod", newValue)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <div className="h-1"></div>
          <DialogFooter>
            <Button
              isLoading={isCallingAddDepartmentApi}
              className="w-full"
              type="submit"
            >
              Submit
            </Button>
          </DialogFooter>
        </form>
      </Form>
    </div>
  );
};
export default AddDepartmentForm;
