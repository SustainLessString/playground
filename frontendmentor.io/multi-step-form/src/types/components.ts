import {
  NavbarItem,
  HeaderItem,
  AddOn,
  BillingOption,
  Plan,
  Step,
} from "@app/types";

/* Navbar Component */
export type NavbarProps = {
  currentStep: Step;
  navbarItems: NavbarItem[];
  handleGoTo: (destination: Step) => void;
};

/* Navbar Subcomponent */
export type NavbarItemProps = {
  step: Step;
  name: string;
  description: string;
  isActive: boolean;
  handleGoTo: NavbarProps["handleGoTo"];
};
/* End of Navbar */

/* Container Component */
export type ContainerProps = {
  props: {
    currentStep: Step;
    isStepCurrentlyActive: (step: Step) => boolean;
    headerItems: HeaderItem[];
    stepComponentsProps: StepComponentsProps;
  };
};
export type ContainerItemProps = {
  currentStep: Step;
  headerItems: HeaderItem[];
  isStepCurrentlyActive: (step: Step) => boolean;
  stepComponentsProps: //StepComponentsProps;
  | Step1ComponentProps
    | Step2ComponentProps
    | Step3ComponentProps
    | Step4ComponentProps;
};
/* End of Container */

export type StepComponentsProps = [
  step1ComponentProps: Step1ComponentProps,
  step2ComponentProps: Step2ComponentProps,
  step3ComponentProps: Step3ComponentProps,
  step4ComponentProps: Step4ComponentProps
];
/* End of Container */

/* Header Component */
export type HeaderProps = {
  title: string;
  description: string;
};
/* End of Header */

export type FooterProps = {
  currentStep: Step;
  handlePreviousStep: () => void;
  handleNextStep: () => void;
};

/* Step1 Component */
export type Step1ComponentProps = {};
/* End of Step1 */

/* Step2 Compoent*/
export type Step2ComponentProps = {
  plans: Plan[];
  selectedPlan: Plan;
  selectedBillingOption: BillingOption;
  selectedBillingOptionFeature: string;
  getPlanPrice(plan: Plan): string;
  handleChangeSelectedPlan: (plan: Plan) => void;
  handleBillingSwitch: () => void;
};

/* Step2 Subcomponent */
export type ToggleBillingOptionProps = {
  selectedBillingOption: BillingOption;
  handleBillingSwitch: Step2ComponentProps["handleBillingSwitch"];
};

export type BillingOptionNameProps = {
  billingOption: BillingOption;
} & ToggleBillingOptionProps;

export type PlanProps = {
  plan: Plan;
  isSelected: boolean;
  selectedBillingOptionFeature: string;
  getPlanPrice: Step2ComponentProps["getPlanPrice"];
  handleChangeSelectedPlan: Step2ComponentProps["handleChangeSelectedPlan"];
};
/* End of Step2 */

/* Step3 Component */
export type Step3ComponentProps = {
  addOns: AddOn[];
  isAddOnInSelectedList: (addOn: AddOn) => boolean;
  selectedBillingOption: BillingOption;
  getAddOnPrice: (addOn: AddOn, selectedBillingOption: BillingOption) => string;
  handleChangeSelectedAddOns: (addOn: AddOn) => void;
};

/* Step3 Subcomponent */
export type AddOnProps = {
  addOn: AddOn;
  isAddOnInSelectedList: (addOn: AddOn) => boolean;
  selectedBillingOption: BillingOption;
  getAddOnPrice: Step3ComponentProps["getAddOnPrice"];
  handleChangeSelectedAddOns: Step3ComponentProps["handleChangeSelectedAddOns"];
};
/* End of Step3 */

/* Step4 Component */
export type Step4ComponentProps = {
  selectedBillingOption: BillingOption;
  selectedPlan: Plan;
  selectedAddOns: AddOn[];
  getPlanPrice(plan: Plan): string;
  // getSelectedPlanPrice: number;
  getAddOnPrice: (addOn: AddOn, selectedBillingOption: BillingOption) => string;
  // getSumSelectedAddOnsPrice: number;
  getTotalPrice: string;
  handleGoTo: (item: Step) => void;
};
/* End of Step4 */
