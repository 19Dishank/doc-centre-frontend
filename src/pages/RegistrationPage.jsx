import SidePanel from "@/components/RegistrationPage/SidePanel";
import RegistrationForm from "@/components/RegistrationPage/RegistrationForm";

export default function RegistrationPage() {
  return (
    <div>
      <div className="flex w-full">
        <SidePanel />
        <RegistrationForm />
      </div>
    </div>
  );
}
