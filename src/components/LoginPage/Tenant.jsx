import TenantLoginForm from "./Forms/TenantLoginForm";
import FormContainer from "../ui/form-container";
import { useLocation } from "react-router-dom";
import ConnectForm from "./Forms/ConnectForm";

const Tenant = () => {

    const { pathname } = useLocation();
    const isConnectRoute = pathname === "/connect";

    return (
        <FormContainer
            heading="Welcome back"
            subheading="Sign in to your account to continue"
        >
            {isConnectRoute ? <ConnectForm /> : <TenantLoginForm />}
        </FormContainer>
    );
};

export default Tenant;