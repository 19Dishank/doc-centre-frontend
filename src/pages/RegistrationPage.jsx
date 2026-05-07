import SidePanel from "@/components/RegistrationPage/SidePanel";
import RegistrationForm from "@/components/RegistrationPage/RegistrationForm";
import { useSearchParams } from "react-router-dom";
import OnBoardingForm from "@/components/RegistrationPage/OnBoardingForm";

export default function RegistrationPage() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');

  return (
    <div>
      <div className="flex w-full">
        <SidePanel />
        {token ? <OnBoardingForm /> : <RegistrationForm />}
      </div>
    </div>
  );
}
