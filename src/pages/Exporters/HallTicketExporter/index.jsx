import { useEffect, useState } from "react";

import { DateTime } from "luxon";
import { useLocation, useParams, useNavigate } from "react-router-dom";

import {
  DepartmentService,
  SemesterService,
  SubjectGroupService,
} from "@/services";

import HallTicket from "./HallTicket";

const shortYearBySemester = {
  1: "F.E.",
  2: "F.E.",
  3: "S.E.",
  4: "S.E.",
  5: "T.E.",
  6: "T.E.",
  7: "B.E.",
  8: "B.E.",
};

const shortSemesterByNumber = {
  1: "SEM-I",
  2: "SEM-II",
  3: "SEM-III",
  4: "SEM-IV",
  5: "SEM-V",
  6: "SEM-VI",
  7: "SEM-VII",
  8: "SEM-VIII",
};

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
  console.log(subjectsWithDates);
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
