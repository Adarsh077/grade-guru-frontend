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
  addSubjectErrorSelector,
  isCallingAddSubjectApiSelector,
} from "@/store/subject/subject.selectors";
import { addSubject } from "@/store/subject/subject.actions";
import UserAutocomplete from "@/components/UserAutocomplete";

const addSubjectSchema = z.object({
  name: z.string().min(1, "Name is required!"),
  staff: z
    .object(
      {
        label: z.string(),
        value: z.string(),
      },
      { invalid_type_error: "Staff is requried!" }
    )
    .required("Staff is required!"),
});

const AddSubjectForm = ({ semesterId, handleClose }) => {
  const dispatch = useDispatch();

  const isCallingAddSubjectApi = useSelector(isCallingAddSubjectApiSelector);
  const addSubjectError = useSelector(addSubjectErrorSelector);

  const form = useForm({
    resolver: zodResolver(addSubjectSchema),
    defaultValues: {
      name: "",
      staff: null,
    },
  });

  useEffect(() => {
    if (!addSubjectError) return;
    if (addSubjectError.errors) {
      if (addSubjectError.errors.name) {
        form.setError("name", { message: addSubjectError.errors.name });
      }
      if (addSubjectError.errors.hod) {
        form.setError("hod", { message: addSubjectError.errors.hod });
      }
    }
    if (addSubjectError.message) {
      form.setError("root", { message: addSubjectError.message });
    }
  }, [addSubjectError, form]);

  const onSubmit = async (values) => {
    const isAdded = await dispatch(
      addSubject({
        name: values.name,
        staffId: values.staff.value,
        semesterId,
      })
    );
    if (isAdded) {
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
                    <Input placeholder="Enter Subject name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="staff"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Staff</FormLabel>
                  <FormControl>
                    <UserAutocomplete
                      {...field}
                      onChange={(newValue) => form.setValue("staff", newValue)}
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
              isLoading={isCallingAddSubjectApi}
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
export default AddSubjectForm;
