import { useState } from "react";

import { BillingOption, Plan } from "@app/types";

export const usePlan = () => {
  const [billingOption, setBillingOption] = useState<BillingOption>("Monthly");
  const [selectedPlan, setSelectedPlan] = useState<Plan["name"]>("Arcade");

  function handleBillingSwitch() {
    setBillingOption(() =>
      billingOption === "Monthly" ? "Yearly" : "Monthly"
    );
  }

  function handleSelectPlan(plan: Plan["name"]) {
    setSelectedPlan(() => plan);
  }

  return { billingOption, selectedPlan, handleBillingSwitch, handleSelectPlan };
};
