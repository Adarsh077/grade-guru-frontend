import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { SemesterService } from "@/services";

function NSSForm(props) {
  const { open, handleClose, semesterId } = props;
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchStudents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchStudents = async () => {
    const { students } = await SemesterService.getEnrolledStudentsBySemester({
      semesterId,
    });

    setStudents(
      students.map((student) => ({
        name: student.name,
        hasParticipatedInNss: student.hasParticipatedInNss,
        studentId: student.studentId,
      }))
    );
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    await SemesterService.enrollStudentsInNss({ semesterId, students });
    setIsLoading(false);
    handleClose(false);
  };

  return (
    <Dialog open={open} onOpenChange={() => handleClose()}>
      <DialogContent className="sm:max-w-[50vw] overflow-y-scroll max-h-screen">
        <DialogHeader>
          <DialogTitle>NSS</DialogTitle>
          <DialogDescription>
            Please tick mark all the students who have opted for NSS
          </DialogDescription>
        </DialogHeader>
        {students.map((student, index) => {
          return (
            <div key={student.studentId} className="grid gap-4 pb-4">
              <div className="grid grid-cols-8 items-center gap-4">
                <Label htmlFor="name" className="col-span-4 text-right">
                  {student.name}
                </Label>
                <Checkbox
                  checked={student.hasParticipatedInNss}
                  onCheckedChange={(isChecked) => {
                    const newStudents = [...students];
                    newStudents[index].hasParticipatedInNss = isChecked;
                    setStudents(newStudents);
                  }}
                />
              </div>
            </div>
          );
        })}

        <DialogFooter>
          <Button isLoading={isLoading} onClick={handleSubmit} type="submit">
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default NSSForm;
