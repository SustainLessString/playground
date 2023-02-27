export { FormAddOn } from "./FormAddOn";
export { FormProvider } from "./FormContext";
export { FormFooter } from "./FormFooter";
export { FormHeader } from "./FormHeader";
export { FormNavbar } from "./FormNavbar";
export { FormPersonalInfo } from "./FormPersonalInfo";
export { FormPlan } from "./FormPlan";
export { FormSummary } from "./FormSummary";
export { FormThankYou } from "./FormThankYou";

import {
  IAddOn,
  IBillingOption,
  IForm,
  IHeader,
  IPersonalInfo,
  IPlan,
  IStep,
} from "@app/types";

const initialSteps: IStep[] = [
  { step: 1, description: "YOUR INFO" },
  { step: 2, description: "SELECT PLAN" },
  { step: 3, description: "ADD-ONS" },
  { step: 4, description: "SUMMARY" },
];

const initialHeaders: IHeader[] = [
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
  {
    title: "",
    description: "",
  },
];

const initialPersonalInfo: IPersonalInfo = {
  name: "",
  email: "",
  phoneNumber: "",

  errName: "",
  errEmail: "",
  errPhoneNumber: "",
};

const initialBillingOptions: IBillingOption[] = [
  { checked: true, name: "Monthly", features: "" },
  { checked: false, name: "Yearly", features: "2 months free" },
];

const initialPlans: IPlan[] = [
  { checked: true, name: "Arcade", price: 9 },
  { checked: false, name: "Advanced", price: 12 },
  { checked: false, name: "Pro", price: 15 },
];

const initialAddOns: IAddOn[] = [
  {
    checked: true,
    name: "Online service",
    description: "Access to multiplayer games.",
    price: 1,
  },
  {
    checked: true,
    name: "Large storage",
    description: "Extra 1TB cloud storage.",
    price: 2,
  },
  {
    checked: false,
    name: "Customizable profile",
    description: "Custom theme on your profile.",
    price: 2,
  },
];

export const initialForm: IForm = {
  steps: initialSteps,
  currentStep: 1,
  headers: initialHeaders,
  personalInfo: initialPersonalInfo,
  billingOption: initialBillingOptions,
  plans: initialPlans,
  addOns: initialAddOns,
};
