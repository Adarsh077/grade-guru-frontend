import * as React from "react";

import { Check, ChevronsUpDown } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useQueryString } from "@/hooks";
import { batchesSelector } from "@/store/batch/batch.selectors";
import { reset } from "@/store/breadcrumb/breadcrumb.slice";
import { cn } from "@/utils";

const BatchSelector = (props) => {
  const { disabled } = props;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);

  const { parsedQueryString, changeQueryString } = useQueryString();

  const batches = useSelector(batchesSelector);
  const selectedBatch = parsedQueryString.batch;

  const handleBatchChange = (batchName) => {
    if (batchName !== selectedBatch) {
      dispatch(reset());
      navigate(`/?batch=${batchName}`);
    }
    setOpen(false);
  };

  React.useEffect(() => {
    if (!batches.length || selectedBatch) return;

    changeQueryString({ batch: batches[0].name });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [batches.length, selectedBatch]);

  return (
    <div>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            disabled={disabled}
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[150px] justify-between"
          >
            {selectedBatch
              ? batches.find((batch) => batch.name === selectedBatch)?.name
              : "Select batch..."}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[150px] p-0">
          <Command>
            <CommandInput placeholder="Search batch..." />
            <CommandEmpty>No batch found.</CommandEmpty>
            <CommandGroup>
              {batches.map((batch) => (
                <CommandItem key={batch._id} onSelect={handleBatchChange}>
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      selectedBatch === batch.name ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {batch.name}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};
export default BatchSelector;
