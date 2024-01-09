import { DashbordLayout, MySubjectsLayout } from "@/layouts";
import {
  DepartmentsScreen,
  MarksBySubject,
  MySubjectsScreen,
  SemestersScreen,
  StudentsBySemester,
  SubjectsScreen,
} from "@/pages";
import { Route, Routes } from "react-router-dom";
import Redirect from "./Redirect";
import CaslCan from "@/components/CaslCan";
import caslEnum from "@/constants/casl.enum";

const ProtectedRoutes = () => {
  return (
    <Routes>
      <Route path="/departments" element={<DashbordLayout />}>
        <Route
          path=""
          element={
            <CaslCan
              requiredAbilities={[
                {
                  action: caslEnum.actions.read,
                  subject: caslEnum.subjects.departments,
                },
              ]}
            >
              <DepartmentsScreen />
            </CaslCan>
          }
        />
        <Route
          path=":departmentId/semesters"
          element={
            <CaslCan
              requiredAbilities={[
                {
                  action: caslEnum.actions.read,
                  subject: caslEnum.subjects.semesters,
                },
              ]}
            >
              <SemestersScreen />
            </CaslCan>
          }
        />
      </Route>
      <Route path="/semesters" element={<DashbordLayout />}>
        <Route
          path=":semesterId/subjects"
          element={
            <CaslCan
              requiredAbilities={[
                {
                  action: caslEnum.actions.read,
                  subject: caslEnum.subjects.subjects,
                },
              ]}
            >
              <SubjectsScreen />
            </CaslCan>
          }
        />
        <Route
          path=":semesterId/students"
          element={
            <CaslCan
              requiredAbilities={[
                {
                  action: caslEnum.actions.read,
                  subject: caslEnum.subjects.semesters,
                },
              ]}
            >
              <StudentsBySemester />
            </CaslCan>
          }
        />
      </Route>
      <Route path="/subjects" element={<MySubjectsLayout />}>
        <Route
          path="my"
          element={
            <CaslCan
              requiredAbilities={[
                {
                  action: caslEnum.actions.read,
                  subject: caslEnum.subjects.subjects,
                },
              ]}
            >
              <MySubjectsScreen />
            </CaslCan>
          }
        />
        <Route path=":subjectId/marks" element={<MarksBySubject />} />
      </Route>
      <Route path="*" element={<Redirect />} />
    </Routes>
  );
};
export default ProtectedRoutes;
