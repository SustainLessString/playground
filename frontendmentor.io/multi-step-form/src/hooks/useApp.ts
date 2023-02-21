import { useState } from "react";

import { Step, NavbarItem } from "@app/types";

export const useApp = () => {
  const [currentStep, setCurrentStep] = useState<Step>(4);
  const navbarItems: NavbarItem[] = [
    {
      step: 1,
      description: "YOUR INFO",
    },
    {
      step: 2,
      description: "SELECT PLAN",
    },
    {
      step: 3,
      description: "ADD-ONS",
    },
    {
      step: 4,
      description: "SUMMARY",
    },
  ];

  function handleNavbarClick(e: React.PointerEvent<HTMLDivElement>) {
    switch (e.currentTarget.getAttribute("id")) {
      case "NavbarItem1":
        return setCurrentStep(() => 1);
      case "NavbarItem2":
        return setCurrentStep(() => 2);
      case "NavbarItem3":
        return setCurrentStep(() => 3);
      case "NavbarItem4":
        return setCurrentStep(() => 4);
    }
  }

  function handleNextStep() {
    setCurrentStep(() => {
      if (currentStep === 5) return 1;
      else return currentStep + 1;
    });
  }

  function handldePreviousStep() {
    setCurrentStep(() => {
      if (currentStep === 1) return 1;
      else return currentStep - 1;
    });
  }

  return {
    currentStep,
    handleNavbarClick,
    handldePreviousStep,
    handleNextStep,
    navbarItems,
  };
};
