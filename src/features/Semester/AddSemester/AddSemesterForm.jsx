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
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  addSemesterErrorSelector,
  isCallingAddSemesterApiSelector,
} from "@/store/semester/semester.selectors";
import { addSemesters } from "@/store/semester/semester.actions";

const addSemesterSchema = z.object({
  name: z.string().min(1, "Name is required!"),
});

const AddSemesterForm = ({ departmentId, handleClose }) => {
  const dispatch = useDispatch();

  const isCallingAddSemesterApi = useSelector(isCallingAddSemesterApiSelector);
  const addSemesterError = useSelector(addSemesterErrorSelector);

  const form = useForm({
    resolver: zodResolver(addSemesterSchema),
    defaultValues: {
      name: "",
    },
  });

  useEffect(() => {
    if (!addSemesterError) return;
    if (addSemesterError.errors) {
      if (addSemesterError.errors.name) {
        form.setError("name", { message: addSemesterError.errors.name });
      }
      if (addSemesterError.errors.hod) {
        form.setError("hod", { message: addSemesterError.errors.hod });
      }
    }
    if (addSemesterError.message) {
      form.setError("root", { message: addSemesterError.message });
    }
  }, [addSemesterError, form]);

  const onSubmit = async (values) => {
    const isCompletedWithoutError = await dispatch(
      addSemesters({
        name: values.name,
        departmentId,
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
                    <Input placeholder="Enter Semester name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <div className="h-1"></div>
          <DialogFooter>
            <Button
              isLoading={isCallingAddSemesterApi}
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
export default AddSemesterForm;
