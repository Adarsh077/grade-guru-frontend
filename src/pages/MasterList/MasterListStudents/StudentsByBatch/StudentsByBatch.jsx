import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

const StudentsByBatch = (props) => {
  const { students } = props;

  if (students.length === 0) {
    return (
      <div className="flex justify-center items-center h-40">
        <Alert>
          <AlertCircle />
          <AlertTitle>No students added</AlertTitle>
          <AlertDescription>
            Add students to the list
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  return (
    <Table className="border w-full">
      <TableHeader>
        <TableRow>
          <TableHead>Students</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {students.map((student) => {
          return (
            <TableRow key={student._id} className="cursor-pointer">
              <TableCell className="w-full font-medium">
                {student.name}
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};
export default StudentsByBatch;
