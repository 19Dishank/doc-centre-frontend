import Loader from "@/components/ui/loader";
import { getSubdomain } from "@/helper/getSubdomain";
import { lazy, Suspense } from "react";
import useSEO from "@/hooks/useSEO";

const PlatformLoginForm = lazy(() => import("@/components/LoginPage/Platform"));
const TenantLoginForm = lazy(() => import("@/components/LoginPage/Tenant"));

export default function LoginPage() {

  const subdomain = getSubdomain();
  const isPlatform = subdomain === "app" || subdomain === null;

  useSEO({
    title: isPlatform ? "Platform Sign In" : `${subdomain} Sign In`,
    description: "Sign in to your workspace on DocCenter to manage and collaborate on documents.",
  });

  return (
    <Suspense fallback={<Loader />}>
      {isPlatform ? <PlatformLoginForm /> : <TenantLoginForm />}
    </Suspense>
  );
}