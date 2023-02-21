import { Navbar, Container, Footer } from "@app/components";

import { useApp, usePlan, useAddOn } from "@app/hooks";

const App = () => {
  const {
    currentStep,
    handleNavbarClick,
    handldePreviousStep,
    handleNextStep,
    navbarItems,
  } = useApp();

  const {
    plans,
    selectedPlan,
    handlePlanChange,
    handleBillingSwitch,
    selectedBillingOption,
  } = usePlan();

  const { addOns, selectedAddOns, handleAddOnClick } = useAddOn();

  return (
    <div className="flex items-center justify-center w-screen h-screen overflow-auto bg-primary-lightblue">
      <div className="relative desktop:bg-neutral-white desktop:w-[960px] desktop:h-[600px] rounded-xl flex desktop:flex-row mobile:flex-col mobile:bg-transparent">
        <Navbar
          currentStep={currentStep}
          handleNavbarClick={handleNavbarClick}
          navbarItems={navbarItems}
        />
        <div
          className={
            "relative flex flex-col justify-between w-full bg-transparent" +
            " mobile:h-screen" +
            " desktop:h-full"
          }
        >
          <Container
            step={currentStep}
            step2Props={{
              plans,
              selectedPlan,
              selectedBillingOption,
              handlePlanChange,
              handleBillingSwitch,
            }}
            step3Props={{
              addOns,
              selectedAddOns,
              billing: selectedBillingOption,
              handleAddOnClick,
            }}
            step4Props={{
              addOns: selectedAddOns,
              billing: selectedBillingOption,
              plan: selectedPlan,
            }}
          />
          <Footer
            step={currentStep}
            handlePreviousStep={handldePreviousStep}
            handleNextStep={handleNextStep}
          />
        </div>
      </div>
    </div>
  );
};
export default App;
