import Loader from "@/components/ui/loader";
import { getSubdomain } from "@/helper/getSubdomain";
import { lazy, Suspense } from "react";

const PlatformLoginForm = lazy(() => import("@/components/LoginPage/Platform"));
const TenantLoginForm = lazy(() => import("@/components/LoginPage/Tenant"));

export default function LoginPage() {

  const subdomain = getSubdomain();
  const isPlatform = subdomain === "app" || subdomain === null;

  return (
    <Suspense fallback={<Loader />}>
      {isPlatform ? <PlatformLoginForm /> : <TenantLoginForm />}
    </Suspense>
  );
}