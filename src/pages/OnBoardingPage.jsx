import SidePanel from "@/components/RegistrationPage/SidePanel";
import { useSearchParams } from "react-router-dom";
import ActivateForm from "@/components/RegistrationPage/ActivateForm";
import OnBoardingForm from "@/components/RegistrationPage/OnBoardingForm";

export default function OnBoardingPage() {

  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');

  return (
    <main className="bg-white">
      <div className="flex flex-col lg:flex-row w-full min-h-screen h-full">
        <div className="hidden lg:flex lg:w-1/2 xl:w-[20%] 2xl:w-[30%]">
          <SidePanel />
        </div>
        <div className="flex-1 flex items-center justify-center p-6 sm:p-12 lg:p-16">
          {token ? <ActivateForm /> : <OnBoardingForm />}
        </div>
      </div>
    </main>
  );
}