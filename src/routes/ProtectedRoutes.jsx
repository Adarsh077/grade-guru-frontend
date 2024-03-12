import { Navigate, Route, Routes } from "react-router-dom";

import CaslCan from "@/components/CaslCan";
import caslEnum from "@/constants/casl.enum";
import { DashbordLayout, MySubjectsLayout, MasterListLayout } from "@/layouts";
import {
  BatchList,
  DepartmentsScreen,
  MarksBySubject,
  MasterDepartments,
  MasterSemesters,
  MasterSubjects,
  MySubjectsScreen,
  SelectDepartments,
  SemestersScreen,
  StudentsByBatch,
  SubjectGroups,
} from "@/pages";

import Redirect from "./Redirect";

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
        <Route path=":semesterId/subject-groups" element={<SubjectGroups />} />
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

      <Route path="/master-list" element={<MasterListLayout />}>
        <Route path="batches" element={<BatchList />} />

        <Route
          path="batches/:batchYear/departments"
          element={<SelectDepartments />}
        />
        <Route
          path="batches/:batchYear/departments/:departmentId/students"
          element={<StudentsByBatch />}
        />

        <Route path="departments" element={<MasterDepartments />} />
        <Route
          path="departments/:departmentId/semesters"
          element={<MasterSemesters />}
        />
        <Route
          path="semesters/:semesterId/subjects"
          element={<MasterSubjects />}
        />

        <Route
          path=""
          element={<Navigate to="/master-list/batches" replace />}
        />
      </Route>
      <Route path="*" element={<Redirect />} />
    </Routes>
  );
};
export default ProtectedRoutes;
