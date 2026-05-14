import PlatformLoginForm from "@/components/LoginPage/PlatformLoginForm";
import TenantLoginForm from "@/components/LoginPage/TenentLoginForm";
import { getSubdomain } from "@/helper/getSubdomain";

export default function LoginPage() {

  const subdomain = getSubdomain();
  const isPlatform = subdomain === "app" || subdomain === null;

  return (
    <>
      {isPlatform ? <PlatformLoginForm /> : <TenantLoginForm />}
    </>
  );
}