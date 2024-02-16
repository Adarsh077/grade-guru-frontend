import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const StudentsByBatch = (props) => {
  const { students } = props;

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
