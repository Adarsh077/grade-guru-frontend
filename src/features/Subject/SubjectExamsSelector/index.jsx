import clsx from "clsx";

const SubjectExamGroup = ({ children, isSelected, className, ...rest }) => {
  return (
    <div
      {...rest}
      className={clsx(
        "border border-gray-300 px-2 py-1 cursor-pointer hover:bg-gray-100",
        { "bg-gray-200 border-gray-700 hover:bg-gray-200": isSelected },
        className
      )}
    >
      {children}
    </div>
  );
};

const SubjectExamsSelector = (props) => {
  const { value, onChange, ...rest } = props;

  return (
    <div {...rest} className="flex items-center gap-x-2">
      <SubjectExamGroup
        onClick={() => onChange("ESE")}
        isSelected={value === "ESE"}
      >
        IAT1 + IAT2 + ESE
      </SubjectExamGroup>
      <SubjectExamGroup
        onClick={() => onChange("PROR")}
        isSelected={value === "PROR"}
      >
        PR OR + TW
      </SubjectExamGroup>
    </div>
  );
};
export default SubjectExamsSelector;
