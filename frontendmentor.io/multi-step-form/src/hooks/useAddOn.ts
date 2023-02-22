import { useState } from "react";
import { AddOn, BillingOption } from "@app/types";

export const useAddOn = () => {
  const addOns: AddOn[] = [
    {
      name: "Online service",
      description: "Access to multiplayer games.",
      price: 1,
    },
    {
      name: "Large storage",
      description: "Extra 1TB cloud storage.",
      price: 2,
    },
    {
      name: "Customizable profile",
      description: "Custom theme on your profile.",
      price: 2,
    },
  ];

  const [selectedAddOns, setSelectedAddOns] = useState<AddOn[]>(
    addOns.slice(0, 2)
  );

  const isAddOnInSelectedList = (addOn: AddOn) =>
    selectedAddOns.filter((selectedAddOn) => selectedAddOn.name === addOn.name)
      .length !== 0;

  const getAddOnPrice = (
    addOn: AddOn,
    selectedBillingOption: BillingOption
  ): string =>
    "$" +
    addOn.price * (selectedBillingOption === "Monthly" ? 1 : 10) +
    "/" +
    (selectedBillingOption === "Monthly" ? "mo" : "yr");

  const getSumSelectedAddOnsPrice = selectedAddOns.reduce(
    (acc, curr) => acc + curr.price,
    0
  );

  function handleChangeSelectedAddOns(addOn: AddOn) {
    setSelectedAddOns(() => {
      return !isAddOnInSelectedList(addOn)
        ? [...selectedAddOns, addOn]
        : selectedAddOns.filter(
            (selectedAddOn) => selectedAddOn.name !== addOn.name
          );
    });
  }

  return {
    addOns,
    selectedAddOns,
    isAddOnInSelectedList,
    getAddOnPrice,
    getSumSelectedAddOnsPrice,
    handleChangeSelectedAddOns,
  };
};
