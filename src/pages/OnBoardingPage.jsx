import { useSearchParams } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "@/components/ui/loader";
import useSEO from "@/hooks/useSEO";

const OnBoarding = lazy(() => import("@/components/RegistrationPage/OnBoarding"));
const Activate = lazy(() => import("@/components/RegistrationPage/Activate"));

export default function OnBoardingPage() {

  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');

  useSEO({
    title: token ? "Activate Account" : "Register Workspace",
    description: token
      ? "Complete your account registration and set your secure password."
      : "Create your team workspace on DocCenter and start organizing documents.",
  });

  return (
    <Suspense fallback={<Loader />}>
      {token ? <Activate /> : <OnBoarding />}
    </Suspense>
  );
}