import { AddOn, BillingOption, Plan, Step } from "@app/types";

/* Navbar Compoent */
export type NavbarProps = {
  currentStep: Step;
  navbarItems: NavbarItem[];
  handleNavbarClick: (e: React.PointerEvent<HTMLDivElement>) => void;
};

export type NavbarItem = {
  step: Step;
  description: string;
};

/* Navbar Subcomponent */
export type NavbarItemProps = {
  step: Step;
  disabled?: boolean;
  name: string;
  description: string;
  isActive: boolean;
  handleNavbarClick: NavbarProps["handleNavbarClick"];
};
/* End of Navbar */

export type ContainerProps = {
  step?: Step;
  step2Props: Step2Props;
  step3Props: Step3Props;
  step4Props: Step4Props;
};

export type HeaderProps = {
  title: string;
  description: string;
};

export type FooterProps = {
  step: Step;
  handleNextStep: () => void;
  handlePreviousStep: () => void;
};

/* Step2 Compoent*/
export type Step2Props = {
  plans: Plan[];
  selectedPlan: Plan["name"];
  selectedBillingOption: BillingOption;
  handlePlanChange: (item: Plan["name"]) => void;
  handleBillingSwitch: () => void;
};

/* Step2 Subcomponent */
export type ToggleBillingOptionProps = {
  option: BillingOption;
  handler: Step2Props["handleBillingSwitch"];
};

export type BillingOptionNameProps = {
  title: BillingOption;
} & ToggleBillingOptionProps;

export type PlanProps = Plan & {
  isSelected: boolean;
  billing?: BillingOption;
  handlePlanChange: Step2Props["handlePlanChange"];
};
/* End of Step2 */

/* Step3 Component */
export type Step3Props = {
  addOns: AddOn[];
  selectedAddOns: AddOn["name"][];
  billing: BillingOption;
  handleAddOnClick: (item: AddOn["name"]) => void;
};

/* Step3 Subcomponent */
export type AddOnProps = {
  addOn: AddOn;
  selectedAddOns: AddOn["name"][];
  billing: BillingOption;
  handler: Step3Props["handleAddOnClick"];
};
/* End of Step3 */

/* Step4 Component */
export type Step4Props = {
  billing: BillingOption;
  plan: Plan["name"];
  addOns: AddOn["name"][];
};
/* End of Step4 */
