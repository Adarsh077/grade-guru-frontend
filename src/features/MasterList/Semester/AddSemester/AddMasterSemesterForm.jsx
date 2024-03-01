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
import { addMasterSemesters } from "@/store/master-list/semester/semester.actions";
import {
  addMasterSemesterErrorSelector,
  isCallingAddMasterSemesterApiSelector,
} from "@/store/master-list/semester/semester.selectors";

const addMasterSemesterSchema = z.object({
  name: z.string().min(1, "Name is required!"),
  number: z.string().min(1, "Number is required!"),
});

const AddMasterSemesterForm = ({ departmentId, handleClose }) => {
  const dispatch = useDispatch();

  const isCallingAddMasterSemesterApi = useSelector(
    isCallingAddMasterSemesterApiSelector
  );
  const addMasterSemesterError = useSelector(addMasterSemesterErrorSelector);

  const form = useForm({
    resolver: zodResolver(addMasterSemesterSchema),
    defaultValues: {
      name: "",
      number: "1",
    },
  });

  useEffect(() => {
    if (!addMasterSemesterError) return;
    if (addMasterSemesterError.errors) {
      if (addMasterSemesterError.errors.name) {
        form.setError("name", { message: addMasterSemesterError.errors.name });
      }
      if (addMasterSemesterError.errors.number) {
        form.setError("number", {
          message: addMasterSemesterError.errors.number,
        });
      }
    }
    if (addMasterSemesterError.message) {
      form.setError("root", { message: addMasterSemesterError.message });
    }
  }, [addMasterSemesterError, form]);

  const onSubmit = async (values) => {
    const isCompletedWithoutError = await dispatch(
      addMasterSemesters({
        name: values.name,
        number: values.number,
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
          <FormField
            control={form.control}
            name="number"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Semester Number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <div className="h-1"></div>
          <DialogFooter>
            <Button
              isLoading={isCallingAddMasterSemesterApi}
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
export default AddMasterSemesterForm;
