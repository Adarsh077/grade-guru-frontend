import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const AddMoreRows = (props) => {
  const [rowsCount, setRowsCount] = useState(50);
  const { handleAddMoreRows } = props;

  return (
    <div className="mt-3 flex items-center gap-x-4">
      <Button
        onClick={() => handleAddMoreRows(+rowsCount)}
        variant="ghost"
        className="text-primary"
      >
        Add
      </Button>
      <Input
        value={rowsCount}
        onChange={(e) => setRowsCount(e.target.value)}
        className="h-9 w-20 focus-visible:ring-offset-0"
      />
      <p className="text-gray-700">more rows at the bottom</p>
    </div>
  );
};
export default AddMoreRows;