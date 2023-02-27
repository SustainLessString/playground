import { useState } from "react";
import { useForm, useFormDispatch } from "./FormContext";

export const FormNavbar = () => {
  const form = useForm();
  const dispatch = useFormDispatch();

  const [hover, setHover] = useState<[number, boolean]>([1, false]);

  return (
    <div
      className={
        " desktop:bg-desktop mobile:bg-mobile bg-no-repeat" +
        " desktop:relative desktop:w-2/5 desktop:m-4 desktop:rounded-xl desktop:h-[calc(100%-2rem)] " +
        " mobile:z-10 mobile:fixed mobile:top-0 mobile:left-0 mobile:right-0 mobile:w-full mobile:h-1/5 mobile:bg-cover"
      }
    >
      <div
        className={
          "flex flex-col m-8 " +
          " desktop:justify-start desktop:items-start " +
          " mobile:justify-center mobile:items-center "
        }
      >
        <ul
          className={
            "flex pointer-events-auto " +
            " desktop:relative desktop:flex-col desktop:space-y-6 desktop:space-x-0 " +
            " mobile:absolute mobile:flex-row mobile:space-x-6 mobile:space-y-0 mobile:justify-center"
          }
        >
          {form.steps.map((step) => (
            <li>
              <div
                id={"NavbarItem" + step}
                className={
                  "flex flex-row cursor-pointer caret-transparent " +
                  (form.currentStep === step.step
                    ? " pointer-events-none cursor-default "
                    : "")
                }
                onMouseEnter={() => setHover([step.step, true])}
                onMouseLeave={() => setHover([step.step, false])}
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
                      form: { ...form, currentStep: step.step },
                    });
                }}
              >
                <div
                  className={
                    "flex items-center justify-center w-8 h-8 font-regular rounded-full " +
                    (form.currentStep === step.step
                      ? " bg-primary-lightblue "
                      : " border-neutral-white border text-neutral-white ") +
                    (!(form.currentStep === step.step) &&
                    hover[0] === step.step &&
                    hover[1]
                      ? " bg-primary-marineblue "
                      : "")
                  }
                >
                  {step.step}
                </div>
                <div
                  className={
                    "flex flex-col ml-4 text-xs  mobile:hidden desktop:block " +
                    (!(form.currentStep === step.step) &&
                    hover[0] === step.step &&
                    hover[1]
                      ? " text-primary-marineblue "
                      : "")
                  }
                >
                  <div
                    className={
                      "font-medium " +
                      (!(form.currentStep === step.step) &&
                      hover[0] === step.step &&
                      hover[1]
                        ? " italic text-neutral-white "
                        : " text-neutral-coolgray ")
                    }
                  >
                    {"STEP " + step.step}
                  </div>
                  <div
                    className={
                      "font-bold " +
                      (!(form.currentStep === step.step) &&
                      hover[0] === step.step &&
                      hover[1]
                        ? " italic text-neutral-coolgray "
                        : " text-neutral-white ")
                    }
                  >
                    {step.description}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
