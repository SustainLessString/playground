import {
  PlanProps,
  ToggleBillingOptionProps,
  BillingOptionNameProps,
} from "@app/types/components";

/* ***** ***** ***** ***** ***** *List of Plan* ***** ***** ***** ***** ***** */
export const Plan: React.FC<PlanProps> = ({
  isSelected,
  plan,
  selectedBillingOptionFeature,
  getPlanPrice,
  handleChangeSelectedPlan,
}) => {
  return (
    <li
      className={
        "w-1/3 border rounded-lg cursor-pointer pointer-events-auto" +
        (isSelected
          ? " border-neutral-coolgray bg-primary-lightblue bg-opacity-25"
          : " border-neutral-lightgray")
      }
      onPointerUp={() => handleChangeSelectedPlan(plan)}
    >
      <div
        className={
          "m-4 " +
          (plan.name === "Arcade" ? "content-planArcade" : "") +
          (plan.name === "Advanced" ? "content-planAdvanced" : "") +
          (plan.name === "Pro" ? "content-planPro" : "")
        }
      />
      <div className="mx-4 mt-8 mb-4 cursor-default pointer-events-none gap-y-2">
        <div className="font-bold text-primary-marineblue">{plan.name}</div>
        <div className="text-xs font-regular text-neutral-coolgray">
          {getPlanPrice(plan)}
        </div>
        <div className="text-xs font-regular text-primary-marineblue">
          {selectedBillingOptionFeature}
        </div>
      </div>
    </li>
  );
};
/* ***** ***** ***** ***** ***** *List of Plan* ***** ***** ***** ***** ***** */

/* ***** ***** ***** ***** ***Toggle Billing Option** ***** ***** ***** ***** */
export const ToggleBillingOption: React.FC<ToggleBillingOptionProps> = ({
  selectedBillingOption,
  handleBillingSwitch,
}) => {
  return (
    <div className="flex flex-row items-center justify-center h-12 bg-opacity-25 rounded-xl bg-neutral-lightgray gap-x-6">
      <BillingOptionName
        billingOption="Monthly"
        selectedBillingOption={selectedBillingOption}
        handleBillingSwitch={handleBillingSwitch}
      />
      <div
        className={
          "flex items-center justify-between w-12 h-6 border rounded-full bg-primary-marineblue border-primary-marineblue " +
          (selectedBillingOption === "Monthly"
            ? "flex-row"
            : "flex-row-reverse")
        }
        onPointerUp={handleBillingSwitch}
      >
        <div className="w-4 h-4 mx-1 rounded-full bg-neutral-white"></div>
      </div>
      <BillingOptionName
        billingOption="Yearly"
        selectedBillingOption={selectedBillingOption}
        handleBillingSwitch={handleBillingSwitch}
      />
    </div>
  );
};

export const BillingOptionName: React.FC<BillingOptionNameProps> = ({
  billingOption,
  selectedBillingOption,
  handleBillingSwitch,
}) => (
  <div
    className={
      selectedBillingOption === billingOption
        ? "text-primary-marineblue font-medium pointer-events-none cursor-default"
        : "text-neutral-coolgray pointer-events-auto cursor-pointer"
    }
    onPointerUp={handleBillingSwitch}
  >
    {billingOption}
  </div>
);
/* ***** ***** ***** ***** ***Toggle Billing Option** ***** ***** ***** ***** */
