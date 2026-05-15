import Loader from "./components/ui/loader";
import { RouterProvider } from "react-router-dom";
import { getSubdomain } from "./helper/getSubdomain";
import { platformRouter } from "./routes/platformRouter";
import { tenantRouter } from "./routes/tenentRouter";
import { Suspense } from "react";

const subdomain = getSubdomain();
console.log(subdomain)

const isPlatform = subdomain === "app" || subdomain === null;

console.log(isPlatform)

const router = isPlatform ? platformRouter : tenantRouter;

export default function App() {
  return (
    <Suspense fallback={<Loader styles={"min-h-screen"} />}>
        <RouterProvider router={router} />
    </Suspense>
  );
}