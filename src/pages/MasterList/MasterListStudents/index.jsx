import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const MasterListStudents = () => {
  return (
    <div>
      <Table className="border w-full">
        <TableHeader>
          <TableRow>
            <TableHead>Batch</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="cursor-pointer  h-12">
            <TableCell className="font-medium">2022</TableCell>
          </TableRow>
          <TableRow className="cursor-pointer  h-12">
            <TableCell className="font-medium">2022</TableCell>
          </TableRow>
          <TableRow className="cursor-pointer  h-12">
            <TableCell className="font-medium">2022</TableCell>
          </TableRow>
          <TableRow className="cursor-pointer  h-12">
            <TableCell className="font-medium">2022</TableCell>
          </TableRow>
          <TableRow className="cursor-pointer  h-12">
            <TableCell className="font-medium">2022</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};
export default MasterListStudents;
