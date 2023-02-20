import { Step, BillingOption } from "@app/types";

export type NavbarProps = {
  currentStep: Step;
  handleClick: (e: React.PointerEvent<HTMLDivElement>) => void;
};

export type NavbarItemProps = {
  step: 1 | 2 | 3 | 4;
  disabled?: boolean;
  name: string;
  description: string;
  isActive: boolean;
  handleClick: (e: React.PointerEvent<HTMLDivElement>) => void;
};

export type ContainerProps = {
  step?: Step;
};

export type HeaderProps = {
  title: string;
  description: string;
};

export type FooterProps = {
  step: Step;
  hanldeNext: () => void;
  handlePrevious: () => void;
};

/* Step2 Props */
export type PlanProps = {
  selected: boolean;
  imgSrc: string;
  title: string;
  price: number;
  billing: BillingOption;
  select: (e: React.PointerEvent) => void;
};

export type ToggleBillingOptionProps = {
  option: BillingOption;
  handler: (e: React.PointerEvent<HTMLDivElement>) => void;
};

export type BillingOptionNameProps = {
  title: BillingOption;
} & ToggleBillingOptionProps;
/* Step2 Props */
