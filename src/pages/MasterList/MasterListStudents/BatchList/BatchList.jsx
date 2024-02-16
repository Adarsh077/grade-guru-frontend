import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { batchesSelector } from "@/store/batch/batch.selectors";

const BatchList = () => {
  const batches = useSelector(batchesSelector);

  return (
    <div>
      <Table className="border w-full">
        <TableHeader>
          <TableRow>
            <TableHead>Batch</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {batches.map((batch) => {
            return (
              <TableRow key={batch._id} className="cursor-pointer">
                <Link
                  className="h-full w-full block"
                  to={`/master-list/batches/${batch.year}/students`}
                >
                  <TableCell className="w-full font-medium">
                    {batch.name}
                  </TableCell>
                </Link>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};
export default BatchList;
