import { ArrowLeft, FileUp } from "lucide-react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

import FetchData from "@/components/FetchData";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { singleBatchSelector } from "@/store/batch/batch.selectors";
import { getAllStudentsByBatch } from "@/store/students/students.actions";
import {
  studentErrorSelector,
  studentSelector,
} from "@/store/students/students.selectors";

import StudentsByBatch from "./StudentsByBatch";

const StudentsByBatchRoot = () => {
  const { batchYear } = useParams();
  const studentsError = useSelector(studentErrorSelector);
  const batch = useSelector(singleBatchSelector(batchYear));
  const studentsByBatch = useSelector(studentSelector(batchYear));

  return (
    <div>
      <div className="mb-4 grid grid-cols-12 justify-between">
        <div className="md:col-span-9 xl:col-span-10">
          <div className="flex items-center space-x-2">
            <Link to={-1}>
              <Button variant="ghost" size="icon">
                <ArrowLeft />
              </Button>
            </Link>
            <h2 className="text-lg font-medium">{batch.name}</h2>
          </div>
        </div>
        <div className="md:col-span-3 xl:col-span-2"></div>
      </div>
      <FetchData
        loadFirstThenRender
        error={studentsError}
        dispatchFunction={getAllStudentsByBatch({ batch: batchYear })}
        dependencies={[batchYear]}
      >
        <Tabs defaultValue="regular">
          <div className="flex items-center justify-between w-full">
            <TabsList className="grid w-[400px] grid-cols-2">
              <TabsTrigger value="regular">REGULAR</TabsTrigger>
              <TabsTrigger value="dse">DSE</TabsTrigger>
            </TabsList>
            <div className="flex justify-end">
              {/* <AddDepartmentDailog> */}
              <Button variant="ghost">
                <FileUp className="mr-2 h-4 w-4" /> Import
              </Button>
              {/* </AddDepartmentDailog> */}
            </div>
          </div>
          <TabsContent value="regular">
            <StudentsByBatch
              students={(studentsByBatch || []).filter(
                (student) => student.studentType === "REGULAR"
              )}
            />
          </TabsContent>
          <TabsContent value="dse">
            <StudentsByBatch
              students={(studentsByBatch || []).filter(
                (student) => student.studentType === "DSE"
              )}
            />
          </TabsContent>
        </Tabs>
      </FetchData>
    </div>
  );
};
export default StudentsByBatchRoot;
