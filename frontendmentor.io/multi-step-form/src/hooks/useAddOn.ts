import { AddOn } from "@app/types";
import { useState } from "react";

export const useAddOn = () => {
  const addOns: AddOn[] = [
    {
      name: "Online service",
      description: "Access to multiplayer games.",
      monthlyPrice: 1,
    },
    {
      name: "Large storage",
      description: "Extra 1TB cloud storage.",
      monthlyPrice: 2,
    },
    {
      name: "Customizable profile",
      description: "Custom theme on your profile.",
      monthlyPrice: 2,
    },
  ];

  const [selectedAddOns, setSelectedAddOns] = useState<AddOn["name"][]>([
    "Online service",
    "Large storage",
  ]);

  function handleAddOnClick(item: AddOn["name"]) {
    setSelectedAddOns(() => {
      if (!selectedAddOns.filter((addOn) => addOn === item).length)
        return [...selectedAddOns, item];
      else return selectedAddOns.filter((addOn) => addOn !== item);
    });
  }

  return { addOns, selectedAddOns, handleAddOnClick };
};
