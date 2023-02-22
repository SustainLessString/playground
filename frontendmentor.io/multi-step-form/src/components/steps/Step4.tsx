import { Step4ComponentProps } from "@app/types/components";

const Step4: React.FC<Step4ComponentProps> = ({
  selectedBillingOption,
  selectedPlan,
  selectedAddOns,
  getPlanPrice,
  getAddOnPrice,
  getTotalPrice,
  // getSelectedPlanPrice,
  // getSumSelectedAddOnsPrice,
  handleGoTo,
}) => (
  <ul className="flex flex-col w-full">
    <li className="flex flex-row justify-between w-full p-4 bg-opacity-25 rounded-lg bg-primary-lightblue">
      <div className="flex flex-col">
        <span className="text-lg font-medium text-primary-marineblue">
          {selectedPlan.name + " (" + selectedBillingOption + ")"}
        </span>
        <span
          className="underline cursor-pointer text-neutral-coolgray"
          onPointerUp={() => handleGoTo(2)}
        >
          Change
        </span>
      </div>
      <span>{getPlanPrice(selectedPlan)}</span>
    </li>
    {!selectedAddOns.length ? (
      <></>
    ) : (
      <>
        <hr />
        <li className="flex flex-row justify-between w-full p-4 bg-opacity-25 bg-primary-lightblue">
          <ul className="flex flex-col w-full">
            {selectedAddOns.map((selectedAddOn) => (
              <li className="flex flex-row justify-between w-full">
                <span className="text-neutral-coolgray">
                  {selectedAddOn.name}
                </span>
                <span className="text-primary-marineblue">
                  {"+" + getAddOnPrice(selectedAddOn, selectedBillingOption)}
                </span>
              </li>
            ))}
          </ul>
        </li>
      </>
    )}
    <li className="flex flex-row justify-between w-full px-4 my-6">
      <span className="text-neutral-coolgray">Total (per year)</span>
      <span className="text-xl font-medium text-primary-purplishblue">
        {getTotalPrice}
        {/* {"+$" +
          (getSelectedPlanPrice + getSumSelectedAddOnsPrice) *
            (selectedBillingOption === "Monthly" ? 1 : 10) +
          "/" +
          (selectedBillingOption === "Monthly" ? "mo" : "yr")} */}
      </span>
    </li>
  </ul>
);

export default Step4;
