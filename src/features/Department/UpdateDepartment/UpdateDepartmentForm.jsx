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
  isCallingUpdateDepartmentApiSelector,
  updateDepartmentErrorSelector,
} from "@/store/department/department.selectors";
import { updateDepartment } from "@/store/department/department.actions";
import { useEffect } from "react";

const updateDepartmentSchema = z.object({
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

const UpdateDepartmentForm = ({ handleClose, department }) => {
  const dispatch = useDispatch();

  const isCallingUpdateDepartmentApi = useSelector(
    isCallingUpdateDepartmentApiSelector
  );
  const updateDepartmentError = useSelector(updateDepartmentErrorSelector);

  const form = useForm({
    resolver: zodResolver(updateDepartmentSchema),
    defaultValues: {
      name: department.name,
      hod: {
        label: department.hod.name,
        value: department.hod._id,
      },
    },
  });

  useEffect(() => {
    if (!updateDepartmentError) return;
    if (updateDepartmentError.errors) {
      if (updateDepartmentError.errors.name) {
        form.setError("name", { message: updateDepartmentError.errors.name });
      }
      if (updateDepartmentError.errors.hod) {
        form.setError("hod", { message: updateDepartmentError.errors.hod });
      }
    }
    if (updateDepartmentError.message) {
      form.setError("root", { message: updateDepartmentError.message });
    }
  }, [updateDepartmentError, form]);

  const onSubmit = async (values) => {
    const isCompletedWithoutError = await dispatch(
      updateDepartment({
        name: values.name,
        hod: values.hod.value,
        departmentId: department._id,
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
              isLoading={isCallingUpdateDepartmentApi}
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
export default UpdateDepartmentForm;
