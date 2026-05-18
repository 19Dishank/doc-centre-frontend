import { useSearchParams } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "@/components/ui/loader";

const OnBoarding = lazy(() => import("@/components/RegistrationPage/OnBoarding"));
const Activate = lazy(() => import("@/components/RegistrationPage/Activate"));

export default function OnBoardingPage() {

  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');

  return (
    <Suspense fallback={<Loader />}>
      {token ? <Activate /> : <OnBoarding />}
    </Suspense>
  );
}