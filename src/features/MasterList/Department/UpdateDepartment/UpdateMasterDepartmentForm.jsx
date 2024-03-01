import { useEffect } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { DialogFooter } from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormRootError,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import UserAutocomplete from "@/components/UserAutocomplete";
import { updateMasterDepartment } from "@/store/master-list/department/department.actions";
import {
  isCallingUpdateMasterDepartmentApiSelector,
  updateMasterDepartmentErrorSelector,
} from "@/store/master-list/department/department.selectors";

const updateMasterDepartmentSchema = z.object({
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

const UpdateMasterDepartmentForm = ({ handleClose, department }) => {
  const dispatch = useDispatch();

  const isCallingUpdateMasterDepartmentApi = useSelector(
    isCallingUpdateMasterDepartmentApiSelector
  );
  const updateMasterDepartmentError = useSelector(
    updateMasterDepartmentErrorSelector
  );

  const form = useForm({
    resolver: zodResolver(updateMasterDepartmentSchema),
    defaultValues: {
      name: department.name,
      hod: {
        label: department.hod.name,
        value: department.hod._id,
      },
    },
  });

  useEffect(() => {
    if (!updateMasterDepartmentError) return;
    if (updateMasterDepartmentError.errors) {
      if (updateMasterDepartmentError.errors.name) {
        form.setError("name", {
          message: updateMasterDepartmentError.errors.name,
        });
      }
      if (updateMasterDepartmentError.errors.hod) {
        form.setError("hod", {
          message: updateMasterDepartmentError.errors.hod,
        });
      }
    }
    if (updateMasterDepartmentError.message) {
      form.setError("root", { message: updateMasterDepartmentError.message });
    }
  }, [updateMasterDepartmentError, form]);

  const onSubmit = async (values) => {
    const isCompletedWithoutError = await dispatch(
      updateMasterDepartment({
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
              isLoading={isCallingUpdateMasterDepartmentApi}
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
export default UpdateMasterDepartmentForm;
