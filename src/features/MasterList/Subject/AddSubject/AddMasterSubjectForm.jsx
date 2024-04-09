import { useEffect } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
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
import UserAutocomplete from "@/components/UserAutocomplete";
import { SubjectTypeEnum } from "@/constants/enum";
import { addMasterSubject } from "@/store/master-list/subject/subject.actions";
import {
  addMasterSubjectErrorSelector,
  isCallingAddMasterSubjectApiSelector,
} from "@/store/master-list/subject/subject.selectors";

import SubjectExamsSelector from "../SubjectExamsSelector";

const addMasterSubjectSchema = z.object({
  name: z.string().min(1, "Name is required!"),
  code: z.string().min(2, "Code is required!"),
  isATKTSubject: z.boolean(),
  credits: z.string().min(1, "Credits is required!"),
  subjectType: z
    .enum(Object.values(SubjectTypeEnum))
    .default(SubjectTypeEnum.WRITTEN),
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

const AddMasterSubjectForm = ({ subjectGroupId, handleClose }) => {
  const dispatch = useDispatch();

  const isCallingAddMasterSubjectApi = useSelector(
    isCallingAddMasterSubjectApiSelector
  );
  const addMasterSubjectError = useSelector(addMasterSubjectErrorSelector);

  const form = useForm({
    resolver: zodResolver(addMasterSubjectSchema),
    defaultValues: {
      name: "",
      staff: null,
      code: "",
      credits: 0,
      subjectType: SubjectTypeEnum.WRITTEN,
      isATKTSubject: false,
    },
  });

  useEffect(() => {
    if (!addMasterSubjectError) return;
    if (addMasterSubjectError.errors) {
      if (addMasterSubjectError.errors.name) {
        form.setError("name", { message: addMasterSubjectError.errors.name });
      }
      if (addMasterSubjectError.errors.hod) {
        form.setError("hod", { message: addMasterSubjectError.errors.hod });
      }
      if (addMasterSubjectError.errors.code) {
        form.setError("code", { message: addMasterSubjectError.errors.code });
      }
      if (addMasterSubjectError.errors.subjectType) {
        form.setError("subjectType", {
          message: addMasterSubjectError.errors.subjectType,
        });
      }
    }
    if (addMasterSubjectError.message) {
      form.setError("root", { message: addMasterSubjectError.message });
    }
  }, [addMasterSubjectError, form]);

  const onSubmit = async (values) => {
    const isAdded = await dispatch(
      addMasterSubject({
        name: values.name,
        staffId: values.staff.value,
        code: values.code,
        subjectGroupId,
        subjectType: values.subjectType,
        credits: values.credits,
        isATKTSubject: values.isATKTSubject,
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
            name="code"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Subject Code</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Subject code" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />

          <FormField
            control={form.control}
            name="credits"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>credits</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter Credits"
                      type="number"
                      {...field}
                    />
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

          <FormField
            control={form.control}
            name="subjectType"
            render={({ field }) => {
              const { value, ...rest } = field;

              return (
                <FormItem>
                  <FormLabel>Subject Type</FormLabel>
                  <FormControl>
                    <div {...rest}>
                      <SubjectExamsSelector
                        value={value}
                        onChange={(newValue) =>
                          form.setValue("subjectType", newValue)
                        }
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />

          <FormField
            control={form.control}
            name="isATKTSubject"
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
            <Button
              isLoading={isCallingAddMasterSubjectApi}
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
export default AddMasterSubjectForm;
