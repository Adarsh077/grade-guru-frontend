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

const RoleSelector = (props) => {
  const { value, onChange, ...rest } = props;

  return (
    <div {...rest} className="flex items-center gap-x-2">
      <SubjectExamGroup
        onClick={() => onChange("ADMIN")}
        isSelected={value === "ADMIN"}
      >
        ADMIN
      </SubjectExamGroup>
      <SubjectExamGroup
        onClick={() => onChange("HOD")}
        isSelected={value === "HOD"}
      >
        HOD
      </SubjectExamGroup>
      <SubjectExamGroup
        onClick={() => onChange("STAFF")}
        isSelected={value === "STAFF"}
      >
        STAFF
      </SubjectExamGroup>
    </div>
  );
};
export default RoleSelector;
