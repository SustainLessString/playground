import { useState } from "react";
import { BillingOption, Plan } from "@app/types";

export const usePlan = () => {
  const plans: Plan[] = [
    { name: "Arcade", price: 9 },
    { name: "Advanced", price: 12 },
    { name: "Pro", price: 15 },
  ];

  const [selectedPlan, setSelectedPlan] = useState<Plan>(plans[0]);
  const [selectedBillingOption, setSelectedBillingOption] =
    useState<BillingOption>("Monthly");

  const getPlanPrice = (plan: Plan): string =>
    "$" +
    plan.price * (selectedBillingOption === "Monthly" ? 1 : 10) +
    "/" +
    (selectedBillingOption === "Monthly" ? "mo" : "yr");

  const getSelectedPlanPrice = selectedPlan.price;

  const selectedBillingOptionFeature =
    selectedBillingOption === "Yearly" ? "2 months free" : "";

  function handleBillingSwitch() {
    setSelectedBillingOption(() =>
      selectedBillingOption === "Monthly" ? "Yearly" : "Monthly"
    );
  }

  function handleChangeSelectedPlan(plan: Plan) {
    setSelectedPlan(() => {
      if (selectedPlan.name === plan.name) return selectedPlan;

      const newPlan = plan;
      return newPlan;
    });
  }

  return {
    plans,
    selectedPlan,
    selectedBillingOption,
    selectedBillingOptionFeature,
    getPlanPrice,
    getSelectedPlanPrice,
    handleChangeSelectedPlan,
    handleBillingSwitch,
  };
};
