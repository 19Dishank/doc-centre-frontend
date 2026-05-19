import PlatformLoginForm from "./Forms/PlatformLoginForm";
import FormContainer from "../ui/form-container";

const Platform = () => {
    return (
        <FormContainer
            heading="Welcome back"
            subheading="Sign in to your account to continue"
            linkHelperText="Need a workspace for your team?"
            linkText="Register your company"
            linkUrl="/onboarding"
        >
            <PlatformLoginForm />
        </FormContainer>
    );
};

export default Platform;