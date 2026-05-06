
import LoginForm from "@/components/LoginPage/LoginForm";
import SidePanel from "@/components/LoginPage/SidePanel";

export default function LoginPage() {
  return (
    <div>
      <div className="flex w-full" style={{ minHeight: "956px" }}>
        <SidePanel />
        <LoginForm />
      </div>
    </div>
  );
}
