import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
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
import { addMasterSubjectGroups } from "@/store/master-list/subject-group/subject-group.actions";

const addMasterSubjectGroupSchema = z.object({
  name: z.string().min(1, "Name is required!"),
  isATKTSubjectGroup: z.boolean(),
});

const AddMasterSubjectForm = ({ semesterId, handleClose }) => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(addMasterSubjectGroupSchema),
    defaultValues: {
      name: "",
      isATKTSubjectGroup: false,
    },
  });

  const onSubmit = async (values) => {
    setIsLoading(true);
    const isAdded = await dispatch(
      addMasterSubjectGroups({
        name: values.name,
        isATKTSubjectGroup: values.isATKTSubjectGroup,
        semesterId,
      })
    );
    if (isAdded) {
      handleClose();
    }
    setIsLoading(false);
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
            name="isATKTSubjectGroup"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>ATKT</FormLabel>
                </div>
              </FormItem>
            )}
          />

          <div className="h-1"></div>
          <DialogFooter>
            <Button isLoading={isLoading} className="w-full" type="submit">
              Submit
            </Button>
          </DialogFooter>
        </form>
      </Form>
    </div>
  );
};
export default AddMasterSubjectForm;
