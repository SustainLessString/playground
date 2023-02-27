import { useForm } from "./FormContext";

export const FormThankYou = () => {
  const form = useForm();

  return form.currentStep !== 5 ? (
    <></>
  ) : (
    <div className="flex flex-col items-center">
      <div className="w-20 h-20 my-8 mt-24 content-thankyou" />
      <span className="my-4 text-3xl font-medium text-primary-marineblue">
        Thank you!
      </span>
      <p className="text-center text-neutral-coolgray">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
};
