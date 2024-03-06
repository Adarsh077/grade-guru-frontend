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
import { updateSemesters } from "@/store/semester/semester.actions";
import {
  isCallingUpdateSemesterApiSelector,
  updateSemesterErrorSelector,
} from "@/store/semester/semester.selectors";

const updateSemesterSchema = z.object({
  name: z.string().min(1, "Name is required!"),
});

const UpdateDepartmentForm = ({ handleClose, semester }) => {
  const dispatch = useDispatch();

  const isCallingUpdateSemesterApi = useSelector(
    isCallingUpdateSemesterApiSelector
  );
  const updateSemesterError = useSelector(updateSemesterErrorSelector);

  const form = useForm({
    resolver: zodResolver(updateSemesterSchema),
    defaultValues: {
      name: semester.name,
    },
  });

  useEffect(() => {
    if (!updateSemesterError) return;
    if (updateSemesterError.errors) {
      if (updateSemesterError.errors.name) {
        form.setError("name", { message: updateSemesterError.errors.name });
      }
    }
    if (updateSemesterError.message) {
      form.setError("root", { message: updateSemesterError.message });
    }
  }, [updateSemesterError, form]);

  const onSubmit = async (values) => {
    const isCompletedWithoutError = await dispatch(
      updateSemesters({
        name: values.name,
        semesterId: semester._id,
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
          <div className="h-1"></div>
          <DialogFooter>
            <Button
              isLoading={isCallingUpdateSemesterApi}
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
