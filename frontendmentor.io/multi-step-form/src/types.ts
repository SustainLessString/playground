export interface IStep {
  step: number;
  description: string;
}

export interface IHeader {
  title: string;
  description: string;
}

export interface IPersonalInfo {
  name: string;
  email: string;
  phoneNumber: string;

  errName: string;
  errEmail: string;
  errPhoneNumber: string;
}

export interface IBillingOption {
  checked: boolean;
  name: string;
  features: string;
}

export interface IPlan {
  checked: boolean;
  name: string;
  price: number;
}

export interface IAddOn {
  checked: boolean;
  name: string;
  description: string;
  price: number;
}

export interface IForm {
  steps: IStep[];
  currentStep: number;
  headers: IHeader[];
  personalInfo: IPersonalInfo;
  billingOption: IBillingOption[];
  plans: IPlan[];
  addOns: IAddOn[];
}

export interface IAction {
  type: string;
  form?: IForm;
}
