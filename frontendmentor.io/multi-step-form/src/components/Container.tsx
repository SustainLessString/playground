import { Header, Steps } from "@app/components";
import { ContainerProps } from "@app/types";

const Container: React.FC<ContainerProps> = ({ step }) => {
  return (
    <div className="rounded-xl p-0 desktop:my-4 desktop:mx-8 mobile:p-12 mobile:mx-12 mobile:my-0 caret-transparent">
      {step === 1 ? (
        <>
          <Header
            title="Personal Info"
            description="Please provide your name, email address and phone number"
          />
          <Steps.Step1 />
        </>
      ) : (
        <></>
      )}

      {step === 2 ? (
        <>
          <Header
            title="Select your plan"
            description="You have the option of monthly or yearly billing."
          />
          <Steps.Step2 />
        </>
      ) : (
        <></>
      )}

      {step === 3 ? (
        <>
          <Header
            title="Pick add-ons"
            description="Add-ons help enhance your gaming experience."
          />
          <Steps.Step3 />
        </>
      ) : (
        <></>
      )}

      {step === 4 ? (
        <>
          <Header
            title="Finishing up"
            description="Double-check everything looks OK before confirming."
          />
          <Steps.Step4 />
        </>
      ) : (
        <></>
      )}
    </div>
  );
};
export default Container;
