import { useSearchParams } from "react-router-dom";
import ActivateForm from "@/components/RegistrationPage/SetPasswordForm";
import OnBoardingForm from "@/components/RegistrationPage/OnBoardingForm";

export default function OnBoardingPage() {

  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');

  return (
    <>
      {token ? <ActivateForm /> : <OnBoardingForm />}
    </>
  );
}