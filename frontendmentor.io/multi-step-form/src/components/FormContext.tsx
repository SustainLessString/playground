import { FC, createContext, Dispatch, useContext, useReducer } from "react";
import { IAction, IForm } from "@app/types";
import { initialForm } from ".";

const FormContext = createContext<IForm>({} as IForm);
const FormDispatchContext = createContext<Dispatch<IAction>>(() => {});
export const useForm = () => useContext(FormContext);
export const useFormDispatch = () => useContext(FormDispatchContext);

export const FormProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [form, dispatch] = useReducer(formReducer, initialForm);

  return (
    <FormContext.Provider value={form}>
      <FormDispatchContext.Provider value={dispatch}>
        {children}
      </FormDispatchContext.Provider>
    </FormContext.Provider>
  );
};

const formReducer = (form: IForm, action: IAction): IForm => {
  const defaultForm = action.form ?? form;
  switch (action.type) {
    default:
      throw Error("Unknown action: " + action.type);

    case "change_personal_info_name":
      return {
        ...form,
        personalInfo: {
          ...form.personalInfo,
          name: defaultForm.personalInfo.name,
        },
      };

    case "validate_personal_info_name": {
      let errMsg = "";
      if (!form.personalInfo.name.length) errMsg = "This field is required.";

      return {
        ...form,
        personalInfo: {
          ...form.personalInfo,
          errName: errMsg,
        },
      };
    }

    case "change_personal_info_email":
      return {
        ...form,
        personalInfo: {
          ...form.personalInfo,
          email: defaultForm.personalInfo.email,
        },
      };

    case "validate_personal_info_email": {
      let errMsg = "";
      if (!form.personalInfo.email.length) errMsg = "This field is required.";

      return {
        ...form,
        personalInfo: {
          ...form.personalInfo,
          errEmail: errMsg,
        },
      };
    }

    case "change_personal_info_phone_number":
      return {
        ...form,
        personalInfo: {
          ...form.personalInfo,
          phoneNumber: defaultForm.personalInfo.phoneNumber,
        },
      };

    case "validate_personal_info_phone_number": {
      let errMsg = "";
      if (!form.personalInfo.phoneNumber.length)
        errMsg = "This field is required.";

      return {
        ...form,
        personalInfo: {
          ...form.personalInfo,
          errPhoneNumber: errMsg,
        },
      };
    }

    case "change_billing_option":
      return { ...form, billingOption: defaultForm.billingOption };

    case "change_plan":
      return {
        ...form,
        plans: form.plans.map((fp) => {
          const tempPlans = defaultForm.plans.filter((tp) => tp.checked);
          if (!tempPlans.length) return fp;
          const newPlan =
            defaultForm.plans.find((tp) => tp.name === fp.name) ?? fp;
          return newPlan;
        }),
      };

    case "change_addon":
      return {
        ...form,
        addOns: form.addOns.map((fa) => {
          const newAddOn =
            defaultForm.addOns.find((na) => na.name === fa.name) ?? fa;
          return newAddOn;
        }),
      };

    case "go_to_step":
      return { ...form, currentStep: defaultForm.currentStep };
  }
};
