import { Header, Steps } from "@app/components";
import { ContainerProps } from "@app/types/components";

const Container: React.FC<ContainerProps> = ({
  step,
  step2Props,
  step3Props,
  step4Props,
}) => {
  return (
    <div
      className={
        "block p-0 bg-neutral-white rounded-xl caret-transparent " +
        " desktop:my-2 desktop:mx-8 " +
        " mobile:p-12 mobile:mx-12 mobile:my-0"
      }
    >
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
          <Steps.Step2
            plans={step2Props.plans}
            selectedPlan={step2Props.selectedPlan}
            selectedBillingOption={step2Props.selectedBillingOption}
            handlePlanChange={step2Props.handlePlanChange}
            handleBillingSwitch={step2Props.handleBillingSwitch}
          />
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
          <Steps.Step3
            addOns={step3Props.addOns}
            selectedAddOns={step3Props.selectedAddOns}
            billing={step3Props.billing}
            handleAddOnClick={step3Props.handleAddOnClick}
          />
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
          <Steps.Step4
            addOns={step4Props.addOns}
            billing={step4Props.billing}
            plan={step4Props.plan}
          />
        </>
      ) : (
        <></>
      )}
    </div>
  );
};
export default Container;
