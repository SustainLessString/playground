export type Step = number;

export type PersonalInfo = {
  name: string;
  email: string;
  phoneNumber: string;
};

export type Plan = {
  name: "Arcade" | "Advanced" | "Pro";
  monthlyPrice: number;
};

export type BillingOption = "Monthly" | "Yearly";

export type AddOns = {
  name: string;
  description: string;
  price: string;
};
