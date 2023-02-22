import { BillingOption } from "@app/types";

export const useSummary = () => {
  function getTotalPrice(
    selectedBillingOption: BillingOption,
    getSelectedPlanPrice: number,
    getSumSelectedAddOnsPrice: number
  ) {
    return (
      "+$" +
      (getSelectedPlanPrice + getSumSelectedAddOnsPrice) *
        (selectedBillingOption === "Monthly" ? 1 : 10) +
      "/" +
      (selectedBillingOption === "Monthly" ? "mo" : "yr")
    );
  }

  return { getTotalPrice };
};
