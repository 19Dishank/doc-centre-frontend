import SetPasswordForm from "@/components/RegistrationPage/Activate"
import useSEO from "@/hooks/useSEO"

const UserInvite = () => {
  useSEO({
    title: "Join Workspace",
    description: "Accept invitation to join your team's workspace and set up your account credentials.",
  });
  return (
    <>
       <SetPasswordForm />
    </>
  );
};

export default UserInvite;