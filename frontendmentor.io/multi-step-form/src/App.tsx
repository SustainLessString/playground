import { Navbar, Container, Footer } from "@app/components";
import { useApp, usePlan, useAddOn, useSummary } from "@app/hooks";

const App = () => {
  const {
    currentStep,
    isStepCurrentlyActive,
    navbarItems,
    headerItems,
    handlePreviousStep,
    handleNextStep,
    handleGoTo,
  } = useApp();

  const {
    plans,
    selectedPlan,
    selectedBillingOption,
    selectedBillingOptionFeature,
    getPlanPrice,
    getSelectedPlanPrice,
    handleChangeSelectedPlan,
    handleBillingSwitch,
  } = usePlan();

  const {
    addOns,
    selectedAddOns,
    isAddOnInSelectedList,
    getAddOnPrice,
    getSumSelectedAddOnsPrice,
    handleChangeSelectedAddOns,
  } = useAddOn();

  const { getTotalPrice } = useSummary();

  return (
    <div className="flex items-center justify-center w-screen h-screen overflow-auto bg-primary-lightblue">
      <div className="relative desktop:bg-neutral-white desktop:w-[960px] desktop:h-[600px] rounded-xl flex desktop:flex-row mobile:flex-col mobile:bg-transparent">
        <Navbar
          currentStep={currentStep}
          navbarItems={navbarItems}
          handleGoTo={handleGoTo}
        />
        <div
          className={
            "relative flex flex-col justify-between w-full bg-transparent" +
            " mobile:h-screen" +
            " desktop:h-full"
          }
        >
          <Container
            props={{
              currentStep,
              isStepCurrentlyActive,
              headerItems,
              stepComponentsProps: [
                {},
                {
                  plans,
                  selectedPlan,
                  selectedBillingOption,
                  selectedBillingOptionFeature,
                  getPlanPrice,
                  handleChangeSelectedPlan,
                  handleBillingSwitch,
                },
                {
                  addOns,
                  isAddOnInSelectedList,
                  selectedBillingOption,
                  getAddOnPrice,
                  handleChangeSelectedAddOns,
                },
                {
                  selectedBillingOption,
                  selectedPlan,
                  selectedAddOns,
                  getPlanPrice,
                  getAddOnPrice,
                  getTotalPrice: getTotalPrice(
                    selectedBillingOption,
                    getSelectedPlanPrice,
                    getSumSelectedAddOnsPrice
                  ),
                  handleGoTo,
                },
              ],
            }}
          />
          <Footer
            currentStep={currentStep}
            handlePreviousStep={handlePreviousStep}
            handleNextStep={handleNextStep}
          />
        </div>
      </div>
    </div>
  );
};
export default App;
