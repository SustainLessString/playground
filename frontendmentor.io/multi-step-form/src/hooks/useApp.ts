import { useState } from "react";

import { Step, NavbarItem, HeaderItem } from "@app/types";

export const useApp = () => {
  const [currentStep, setCurrentStep] = useState<Step>(1);
  const navbarItems: NavbarItem[] = [
    { step: 1, description: "YOUR INFO" },
    { step: 2, description: "SELECT PLAN" },
    { step: 3, description: "ADD-ONS" },
    { step: 4, description: "SUMMARY" },
    // { step: 5, description: "THANK-YOU" },
  ];
  const headerItems: HeaderItem[] = [
    {
      title: "Personal Info",
      description: "Please provide your name, email address and phone number.",
    },
    {
      title: "Select your plan",
      description: "You have the option of monthly or yearly billing.",
    },
    {
      title: "Pick add-ons",
      description: "Add-ons help enhance your gaming experience.",
    },
    {
      title: "Finishing up",
      description: "Double-check everything looks OK before confirming.",
    },
  ];

  const isStepCurrentlyActive = (step: Step) => currentStep === step;

  function handleGoTo(destination: Step) {
    setCurrentStep(() => destination);
  }

  function handleNextStep() {
    setCurrentStep(() => {
      if (currentStep === 5) return 1;
      else return currentStep + 1;
    });
  }

  function handlePreviousStep() {
    setCurrentStep(() => {
      if (currentStep === 1) return 1;
      else return currentStep - 1;
    });
  }

  return {
    currentStep,
    isStepCurrentlyActive,
    navbarItems,
    headerItems,
    handlePreviousStep,
    handleNextStep,
    handleGoTo,
  };
};
