import TenantLoginForm from "./Forms/TenantLoginForm";
import FormContainer from "../ui/form-container";

const Tenant = () => {
    return (
        <FormContainer
            heading="Welcome back"
            subheading="Sign in to your account to continue"
        >
            <TenantLoginForm />
        </FormContainer>
    );
};

export default Tenant;