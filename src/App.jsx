import AppRoutes from "@/routes";
import { Toaster } from "@/components/ui/sonner";

const App = () => {
  return (
    <div>
      <AppRoutes />
      <Toaster />
    </div>
  );
};
export default App;