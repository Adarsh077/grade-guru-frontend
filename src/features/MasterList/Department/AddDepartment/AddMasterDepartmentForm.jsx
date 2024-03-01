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
import { useQueryString } from "@/hooks";
import { addMasterDepartment } from "@/store/master-list/department/department.actions";
import {
  addMasterDepartmentErrorSelector,
  isCallingAddMasterDepartmentApiSelector,
} from "@/store/master-list/department/department.selectors";

const addMasterDepartmentSchema = z.object({
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

const AddMasterDepartmentForm = ({ handleClose }) => {
  const dispatch = useDispatch();
  const { parsedQueryString } = useQueryString();

  const isCallingAddMasterDepartmentApi = useSelector(
    isCallingAddMasterDepartmentApiSelector
  );
  const addMasterDepartmentError = useSelector(
    addMasterDepartmentErrorSelector
  );

  const form = useForm({
    resolver: zodResolver(addMasterDepartmentSchema),
    defaultValues: {
      name: "",
      hod: null,
    },
  });

  useEffect(() => {
    if (!addMasterDepartmentError) return;
    if (addMasterDepartmentError.errors) {
      if (addMasterDepartmentError.errors.name) {
        form.setError("name", {
          message: addMasterDepartmentError.errors.name,
        });
      }
      if (addMasterDepartmentError.errors.hod) {
        form.setError("hod", { message: addMasterDepartmentError.errors.hod });
      }
    }
    if (addMasterDepartmentError.message) {
      form.setError("root", { message: addMasterDepartmentError.message });
    }
  }, [addMasterDepartmentError, form]);

  const onSubmit = async (values) => {
    if (!parsedQueryString.batch) {
      form.setError("root", { message: "Please select batch from navbar." });
    }
    const isCompletedWithoutError = await dispatch(
      addMasterDepartment({
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
              isLoading={isCallingAddMasterDepartmentApi}
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
export default AddMasterDepartmentForm;
