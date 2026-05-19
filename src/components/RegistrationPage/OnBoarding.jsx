import OnBoardingForm from "./Forms/OnBoardingForm";
import FormContainer from "../ui/form-container";

const OnBoarding = () => {
    return (
        <FormContainer
            heading="Create your account"
            subheading="Start your 14-day free trial. No credit card required."
            linkHelperText="Already have an account?"
            linkText="Login"
            linkUrl="/login"
        >
            <OnBoardingForm />
        </FormContainer>
    );
};

export default OnBoarding;