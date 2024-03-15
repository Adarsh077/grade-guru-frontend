import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { Button } from "@/components/ui/button";
import { DialogFooter } from "@/components/ui/dialog";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { addMasterSemesters } from "@/store/master-list/semester/semester.actions";
import {
  addMasterSemesterErrorSelector,
  isCallingAddMasterSemesterApiSelector,
} from "@/store/master-list/semester/semester.selectors";

const AddMasterSemesterForm = ({ departmentId, handleClose }) => {
  const dispatch = useDispatch();

  const isCallingAddMasterSemesterApi = useSelector(
    isCallingAddMasterSemesterApiSelector
  );

  const addMasterSemesterError = useSelector(addMasterSemesterErrorSelector);

  const [selectedSemester, setSelectedSemester] = useState("3");

  useEffect(() => {
    if (addMasterSemesterError) {
      // Handle errors if needed
    }
  }, [addMasterSemesterError]);

  const handleToggle = (value) => {
    setSelectedSemester(value);
  };

  const onSubmit = async () => {
    const isCompletedWithoutError = await dispatch(
      addMasterSemesters({
        name : `Semester ${selectedSemester}`,
        departmentId : departmentId,
        number : selectedSemester
      })
    );
    if (isCompletedWithoutError) {
      handleClose();
    }
  };

  return (
    <div>      
          <ToggleGroup type="single" className="mb-6" value={selectedSemester} onChange={handleToggle}>
            <ToggleGroupItem value="3" onClick={() => handleToggle("3")}>Semester 3</ToggleGroupItem>
            <ToggleGroupItem value="4" onClick={() => handleToggle("4")}>Semester 4</ToggleGroupItem>
            <ToggleGroupItem value="5" onClick={() => handleToggle("5")}>Semester 5</ToggleGroupItem>
            <ToggleGroupItem value="6" onClick={() => handleToggle("6")}>Semester 6</ToggleGroupItem>
          </ToggleGroup>

          <div className="h-1"></div>
          <DialogFooter>
            <Button
              isLoading={isCallingAddMasterSemesterApi}
              className="w-full"
              type="submit"
              onClick = {onSubmit}
            >
              Submit
            </Button>
          </DialogFooter>
    </div>
  );
};

export default AddMasterSemesterForm;
