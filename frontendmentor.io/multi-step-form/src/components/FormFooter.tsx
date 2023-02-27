import { useForm, useFormDispatch } from "./FormContext";

export const FormFooter = () => {
  const form = useForm();
  const dispatch = useFormDispatch();

  return (
    <div
      className={
        "bottom-0 left-0 right-0 block z-20" +
        " desktop:absolute desktop:w-[calc(80%-1rem)] desktop:mb-6 desktop:mx-20" +
        " mobile:fixed mobile:w-full mobile:m-0"
      }
    >
      <div className="relative flex flex-row-reverse justify-between select-none bg-neutral-white">
        {form.currentStep < 5 ? (
          <button
            // type={form.currentStep === 1 ? "submit" : "button"}
            type="button"
            onPointerDown={() => {
              if (form.currentStep === 1) {
                dispatch({ type: "validate_personal_info_name" });
                dispatch({ type: "validate_personal_info_email" });
                dispatch({ type: "validate_personal_info_phone_number" });
              }
            }}
            onPointerUp={() => {
              if (
                (form.currentStep === 1 &&
                  !form.personalInfo.errName.length &&
                  !form.personalInfo.errName.length &&
                  !form.personalInfo.errName.length) ||
                form.currentStep !== 1
              )
                dispatch({
                  type: "go_to_step",
                  form: { ...form, currentStep: form.currentStep + 1 },
                });
            }}
            className={
              "px-4 py-2 text-xl border-none rounded-lg text-neutral-white " +
              (form.currentStep < 4
                ? " hover:bg-primary-purplishblue bg-primary-marineblue"
                : " bg-primary-purplishblue hover:bg-primary-marineblue")
            }
          >
            {form.currentStep < 4 ? "Next step" : "Confirm"}
          </button>
        ) : (
          <></>
        )}
        {1 < form.currentStep && form.currentStep < 5 ? (
          <button
            type="button"
            onPointerUp={() =>
              dispatch({
                type: "go_to_step",
                form: { ...form, currentStep: form.currentStep - 1 },
              })
            }
            className="px-4 py-2 text-base border-none rounded-lg bg-neutral-white text-neutral-coolgray hover:text-primary-marineblue"
          >
            Go Back
          </button>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
