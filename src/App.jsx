import Loader from "./components/ui/loader";
import { RouterProvider } from "react-router-dom";
import { getSubdomain } from "./helper/getSubdomain";
import { platformRouter } from "./routes/platformRouter";
import { tenantRouter } from "./routes/tenantRouter";
import { Suspense } from "react";
import { tempRouter } from "./routes/tempRouter";

const subdomain = getSubdomain();
const isPlatform = subdomain === "app" || subdomain === null;
const router = isPlatform ? platformRouter : tenantRouter;

export default function App() {
  return (
    <Suspense fallback={<Loader styles={"min-h-screen"} />}>
      <RouterProvider router={tempRouter} />
    </Suspense>
  );
}