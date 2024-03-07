import { Toaster } from "@/components/ui/sonner";
import AppRoutes from "@/routes";

const App = () => {
  return (
    <div>
      <AppRoutes />
      <Toaster />
    </div>
  );
};
export default App;
