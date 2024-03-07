import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

const Toaster = ({ ...props }) => {
  const { theme = "light" } = useTheme();

  return <Sonner theme={theme} richColors {...props} />;
};

export { Toaster };
