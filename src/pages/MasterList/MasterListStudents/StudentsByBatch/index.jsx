import { useState } from "react";

import { ArrowLeft, Download, FileUp } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import readXlsxFile from "read-excel-file";
import { toast } from "sonner";

import FetchData from "@/components/FetchData";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { singleBatchSelector } from "@/store/batch/batch.selectors";
import {
  addStudent,
  getAllStudentsByBatch,
} from "@/store/students/students.actions";
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
  const [selectedTab, setSelectedTab] = useState("regular");
  const dispatch = useDispatch();

  const handleImport = async (e) => {
    let toastId = toast.loading("Reading Excel File...");

    const students = await readXlsxFile(e.target.files[0]);
    students.shift();

    if (toastId) toast.dismiss(toastId);
    toastId = toast("Importing Student list in database...", {
      dismissible: false,
    });

    for (const student of students) {
      await dispatch(
        addStudent({
          admissionYear: +batchYear,
          email: student[1],
          name: student[0],
          studentType: selectedTab === "dse" ? "DSE" : "REGULAR",
        })
      );
    }

    if (toastId) toast.dismiss(toastId);
  };

  const downloadFormat = async () => {
    const fileUrl = "http://127.0.0.1:5173/students_list.xlsx";
    const fileName = fileUrl.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = fileUrl;
    aTag.setAttribute("download", fileName);
    aTag.click();
    aTag.remove();
  };

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
        <Tabs
          onValueChange={(value) => setSelectedTab(value)}
          value={selectedTab}
        >
          <div className="flex items-center justify-between w-full">
            <TabsList className="grid w-[400px] grid-cols-2">
              <TabsTrigger value="regular">REGULAR</TabsTrigger>
              <TabsTrigger value="dse">DSE</TabsTrigger>
            </TabsList>
            <div className="flex justify-end">
              <div className="relative">
                <input
                  type="file"
                  className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                  onChange={handleImport}
                />
                <Button variant="ghost">
                  <FileUp className="mr-2 h-4 w-4" /> Import
                </Button>
              </div>
              <Button variant="ghost" onClick={downloadFormat}>
                <Download className="mr-2 h-4 w-4" /> Download
              </Button>
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
