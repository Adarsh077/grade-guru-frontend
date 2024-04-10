import ExamTimeForm from "./ExamTimeForm";

const ExamTimeFormRoot = (props) => {
  const { open } = props;

  if (open) return <ExamTimeForm {...props} />;
  return null;
};
export default ExamTimeFormRoot;
