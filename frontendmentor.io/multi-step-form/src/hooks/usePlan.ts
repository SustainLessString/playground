import { useState } from "react";

import { BillingOption, Plan } from "@app/types";

export const usePlan = () => {
  const plans: Plan[] = [
    {
      name: "Arcade",
      price: 9,
    },
    {
      name: "Advanced",
      price: 12,
    },
    {
      name: "Pro",
      price: 15,
    },
  ];

  const [selectedPlan, setSelectedPlan] = useState<Plan["name"]>("Arcade");
  const [selectedBillingOption, setSelectedBillingOption] =
    useState<BillingOption>("Monthly");

  function handleBillingSwitch() {
    setSelectedBillingOption(() =>
      selectedBillingOption === "Monthly" ? "Yearly" : "Monthly"
    );
  }

  function handlePlanChange(name: Plan["name"]) {
    setSelectedPlan(() => name);
  }

  return {
    plans,
    selectedPlan,
    handlePlanChange,
    selectedBillingOption,
    handleBillingSwitch,
  };
};
