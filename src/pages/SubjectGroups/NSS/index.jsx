import NSSForm from "./NSSForm";

const NSSFormRoot = (props) => {
  const { open } = props;

  if (open) return <NSSForm {...props} />;
  return null;
};
export default NSSFormRoot;
