export type Step = number;

export type PersonalInfo = {
  name: string;
  email: string;
  phoneNumber: string;
};

export type Plan = {
  name: "Arcade" | "Advanced" | "Pro";
  price: number;
  // isSelected: boolean;
  // billing: BillingOption;
};

export type BillingOption = "Monthly" | "Yearly";

export type AddOn = {
  // checked: boolean;
  name: "Online service" | "Large storage" | "Customizable profile";
  description: string;
  monthlyPrice: number;
};
