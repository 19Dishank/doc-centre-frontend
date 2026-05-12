import PlatformLoginForm from "@/components/LoginPage/PlatformLoginForm";
import SidePanel from "@/components/LoginPage/SidePanel";
import TenantLoginForm from "@/components/LoginPage/TenentLoginForm";
import { getSubdomain } from "@/helper/getSubdomain";

export default function LoginPage() {

  const subdomain = getSubdomain();
  const isPlatform = subdomain === "app" || subdomain === null;

  return (
    <main className="bg-white">
      <div className="flex flex-col lg:flex-row w-full min-h-screen">
        <div className="hidden lg:flex lg:w-1/2 xl:w-[20%] 2xl:w-[30%]">
          <SidePanel />
        </div>
        <div className="flex-1 flex items-center justify-center p-6 sm:p-12 lg:p-16">
          {isPlatform ? <PlatformLoginForm /> : <TenantLoginForm />}
        </div>
      </div>
    </main>
  );
}