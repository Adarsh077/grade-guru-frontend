import { useState } from "react";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import FetchData from "@/components/FetchData";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SubjectTypeEnum } from "@/constants/enum";
import { getAllSubjects } from "@/store/subject/subject.actions";
import {
  subjectErrorSelector,
  subjectSelector,
} from "@/store/subject/subject.selectors";

function ExamTimeForm(props) {
  const { open, handleClose, subjectGroupId } = props;
  const subjectError = useSelector(subjectErrorSelector);
  const subjects = useSelector(subjectSelector(subjectGroupId));
  const [datesBySubjects, setDatesBySubjects] = useState({});
  const navigate = useNavigate();

  const handleSubmit = () => {
    // [] { code, name, date, startTime, endTime }

    const subjectsWithDates = Object.keys(datesBySubjects).map((subjectId) => {
      const subject = subjects.find((s) => s._id === subjectId);
      if (!subject) return {};
      return {
        code: subject.code,
        name: subject.name,
        date: datesBySubjects[subjectId].date,
        startTime: datesBySubjects[subjectId].startTime,
        endTime: datesBySubjects[subjectId].endTime,
      };
    });

    navigate(`/exporters/hallticket/${subjectGroupId}`, {
      state: { subjectsWithDates },
    });
  };

  return (
    <Dialog open={open} onOpenChange={() => handleClose()}>
      <DialogContent className="sm:max-w-[50vw]">
        <FetchData
          loadFirstThenRender
          error={subjectError}
          shouldNotFetch={!subjectGroupId}
          dispatchFunction={getAllSubjects({ subjectGroupId })}
          dependencies={[subjectGroupId]}
        >
          <DialogHeader>
            <DialogTitle>Generate Hall Tickets</DialogTitle>
            <DialogDescription>
              Please enter date and time for all the subjects listed below
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-x-4 py-4">
            <div className="grid grid-cols-8 items-center gap-4">
              <Label htmlFor="name" className="col-span-2 text-right">
                Subject
              </Label>
              <Label className="col-span-2">Date</Label>
              <Label className="col-span-2">Start Time</Label>
              <Label className="col-span-2">End Time</Label>
            </div>
          </div>
          {subjects
            .filter(
              (subject) => subject.subjectType === SubjectTypeEnum.WRITTEN
            )
            .map((subject) => {
              return (
                <div key={subject._id} className="grid gap-4 pb-4">
                  <div className="grid grid-cols-8 items-center gap-4">
                    <Label htmlFor="name" className="col-span-2 text-right">
                      {subject.name}
                    </Label>
                    <Input
                      id="date"
                      value={
                        datesBySubjects[subject._id] &&
                        datesBySubjects[subject._id].date
                          ? datesBySubjects[subject._id].date
                          : ""
                      }
                      onOpenChange
                      className="col-span-2"
                      type="date"
                      onChange={(e) =>
                        setDatesBySubjects({
                          ...datesBySubjects,
                          [subject._id]: {
                            ...datesBySubjects[subject._id],
                            date: e.target.value,
                          },
                        })
                      }
                    />
                    <Input
                      id="stat-time"
                      value={
                        datesBySubjects[subject._id] &&
                        datesBySubjects[subject._id].startTime
                          ? datesBySubjects[subject._id].startTime
                          : ""
                      }
                      onChange={(e) =>
                        setDatesBySubjects({
                          ...datesBySubjects,
                          [subject._id]: {
                            ...datesBySubjects[subject._id],
                            startTime: e.target.value,
                          },
                        })
                      }
                      className="col-span-2"
                      type="time"
                    />
                    <Input
                      id="end-time"
                      value={
                        datesBySubjects[subject._id] &&
                        datesBySubjects[subject._id].endTime
                          ? datesBySubjects[subject._id].endTime
                          : ""
                      }
                      onChange={(e) =>
                        setDatesBySubjects({
                          ...datesBySubjects,
                          [subject._id]: {
                            ...datesBySubjects[subject._id],
                            endTime: e.target.value,
                          },
                        })
                      }
                      className="col-span-2"
                      type="time"
                    />
                  </div>
                </div>
              );
            })}

          <DialogFooter>
            <Button onClick={handleSubmit} type="submit">
              Generate
            </Button>
          </DialogFooter>
        </FetchData>
      </DialogContent>
    </Dialog>
  );
}

export default ExamTimeForm;
