import { useCaslCan } from "@/hooks";
import { XCircleIcon } from "lucide-react";

const CaslCan = (props) => {
  const { children, silent, requiredAbilities } = props;

  const hasAbility = useCaslCan(requiredAbilities);

  if (hasAbility) {
    return children;
  }

  if (silent) {
    return null;
  }

  return (
    <p className="bg-red-100 rounded flex items-center space-x-3 w-full py-3 px-5 text-red-600">
      <XCircleIcon className="w-5 h-5" />
      <span>You do not have enough permissions</span>
    </p>
  );
};

export default CaslCan;
