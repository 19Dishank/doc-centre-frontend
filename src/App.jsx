import { RouterProvider } from "react-router-dom";
import { getSubdomain } from "./helper/getSubdomain";
import { platformRouter } from "./routes/platformRouter";
import { tenantRouter } from "./routes/tenentRouter";


const subdomain = getSubdomain();
console.log(subdomain)

const isPlatform =
  subdomain === "app" ||
  subdomain === null;

  console.log(isPlatform)

const router = isPlatform ? platformRouter : tenantRouter;

export default function App() {
  return <RouterProvider router={router} />;
}