import planArcade from "@assets/images/icon-arcade.svg";
import planAdvanced from "@assets/images/icon-advanced.svg";
import planPro from "@assets/images/icon-pro.svg";

import { usePlan } from "@app/hooks";
import {
  PlanProps,
  ToggleBillingOptionProps,
  BillingOptionNameProps,
} from "@app/types/components";

const Step2 = () => {
  const { billingOption, selectedPlan, handleBillingSwitch, handleSelectPlan } =
    usePlan();

  return (
    <div className="flex flex-col gap-y-8 bg-neutral-white">
      <ul className="flex flex-row justify-between gap-x-4">
        <Plan
          selected={selectedPlan === "Arcade"}
          imgSrc={planArcade}
          title="Arcade"
          price={9}
          billing={billingOption}
          select={() => handleSelectPlan("Arcade")}
        />
        <Plan
          selected={selectedPlan === "Advanced"}
          imgSrc={planAdvanced}
          title="Advanced"
          price={12}
          billing={billingOption}
          select={() => handleSelectPlan("Advanced")}
        />
        <Plan
          selected={selectedPlan === "Pro"}
          imgSrc={planPro}
          title="Pro"
          price={15}
          billing={billingOption}
          select={() => handleSelectPlan("Pro")}
        />
      </ul>

      <ToggleBillingOption
        option={billingOption}
        handler={handleBillingSwitch}
      />
    </div>
  );
};

export default Step2;

/* ***** ***** ***** ***** ***** *List of Plan* ***** ***** ***** ***** ***** */
const Plan: React.FC<PlanProps> = ({
  selected,
  imgSrc,
  title,
  price,
  billing,
  select,
}) => {
  return (
    <li
      className={
        "w-1/3 border rounded-lg cursor-pointer pointer-events-auto" +
        (selected
          ? " border-neutral-coolgray bg-primary-lightblue bg-opacity-25"
          : " border-neutral-lightgray")
      }
      onPointerUp={select}
    >
      <img src={imgSrc} alt={title + " Plan"} className="m-4" />
      <div className="mx-4 mt-8 mb-4 cursor-default pointer-events-none gap-y-2">
        <div className="font-bold text-primary-marineblue">{title}</div>
        <div className="text-xs font-regular text-neutral-coolgray">
          {billing === "Monthly" ? price + "/mo" : price * 10 + "/yr"}
        </div>
        <div className="text-xs font-regular text-primary-marineblue">
          {billing === "Yearly" ? "2 months free" : ""}
        </div>
      </div>
    </li>
  );
};
/* ***** ***** ***** ***** ***** *List of Plan* ***** ***** ***** ***** ***** */

/* ***** ***** ***** ***** ***Toggle Billing Option** ***** ***** ***** ***** */
const ToggleBillingOption: React.FC<ToggleBillingOptionProps> = ({
  option,
  handler,
}) => {
  return (
    <div className="flex flex-row items-center justify-center h-12 bg-opacity-25 rounded-xl bg-neutral-lightgray gap-x-6">
      <BillingOptionName title="Monthly" option={option} handler={handler} />
      <div
        className={
          "flex items-center justify-between w-12 h-6 border rounded-full bg-primary-marineblue border-primary-marineblue " +
          (option === "Monthly" ? "flex-row" : "flex-row-reverse")
        }
        onPointerUp={handler}
      >
        <div className="w-4 h-4 mx-1 rounded-full bg-neutral-white"></div>
      </div>
      <BillingOptionName title="Yearly" option={option} handler={handler} />
    </div>
  );
};

const BillingOptionName: React.FC<BillingOptionNameProps> = ({
  title,
  handler,
  option,
}) => (
  <div
    className={
      option === title
        ? "text-primary-marineblue font-medium pointer-events-none cursor-default"
        : "text-neutral-coolgray pointer-events-auto cursor-pointer"
    }
    onPointerUp={handler}
  >
    {title}
  </div>
);
/* ***** ***** ***** ***** ***Toggle Billing Option** ***** ***** ***** ***** */
