import { useEffect, useState } from "react";

import { DateTime } from "luxon";
import { useLocation, useParams, useNavigate } from "react-router-dom";

import { shortSemesterByNumber, shortYearBySemester } from "@/constants/enum";
import {
  DepartmentService,
  SemesterService,
  SubjectGroupService,
} from "@/services";

import HallTicket from "./HallTicket";

const HallTicketExporter = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [examName, setExamName] = useState("");
  const [students, setStudents] = useState([]);
  const { subjectGroupId } = useParams();

  useEffect(() => {
    generateExamName();
    getStudents();
  }, []);

  const generateExamName = async () => {
    if (!location.state.subjectsWithDates) {
      navigate(`/subject-groups/${subjectGroupId}/subjects`, { replace: true });
    }
    const subjectsWithDates = location.state.subjectsWithDates;
    const { subjectGroup } = await SubjectGroupService.getSubjectGroup(
      subjectGroupId
    );

    if (!subjectGroup) return;

    const { semester } = await SemesterService.getSemester(
      subjectGroup.semester
    );
    const { department } = await DepartmentService.getDepartment(
      semester.department
    );

    const firstSubject = subjectsWithDates[0];
    const firstSubjectDate = new Date(firstSubject.date);
    const readableMonth =
      DateTime.fromJSDate(firstSubjectDate).toFormat("LLLL y");

    const examName = `UNIVERSITY EXAMINATION OF ${
      shortYearBySemester[semester.number]
    } : ${department.name} (C SCHEME) HELD IN ${readableMonth} FOR ${
      shortSemesterByNumber[semester.number]
    }`;
    setExamName(examName);
  };

  const getStudents = async () => {
    const { students } = await SubjectGroupService.getEnrollStudents(
      subjectGroupId
    );
    if (students) {
      setStudents(students);
    }
  };

  const subjectsWithDates = location?.state?.subjectsWithDates;
  if (!subjectsWithDates) return null;
  return (
    <div className="hallticket">
      {students.map((student) => {
        return (
          <div key={student._id} className="break-after-page">
            <HallTicket
              subjectsWithDates={subjectsWithDates}
              student={student}
              examName={examName}
            />
          </div>
        );
      })}
    </div>
  );
};

export default HallTicketExporter;
