export type Step = number;
export type NavbarItem = {
  step: Step;
  description: string;
};
export type HeaderItem = {
  title: string;
  description: string;
};

export type PersonalInfo = {
  name: string;
  email: string;
  phoneNumber: string;
};

export type Plan = {
  name: "Arcade" | "Advanced" | "Pro";
  price: number;
};

export type BillingOption = "Monthly" | "Yearly";

export type AddOn = {
  name: "Online service" | "Large storage" | "Customizable profile";
  description: string;
  price: number;
};
