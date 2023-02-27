import { useForm, useFormDispatch } from "./FormContext";

export const FormPlan = () => {
  const form = useForm();
  const dispatch = useFormDispatch();

  return form.currentStep !== 2 ? (
    <></>
  ) : (
    <div className="flex flex-col gap-y-8">
      <ul
        className={
          "flex justify-between " +
          " desktop:flex-row desktop:gap-x-4 desktop:gap-y-0 desktop:w-full" +
          " mobile:flex-col mobile:gapx-0 mobile:gap-y-4 mobile:w-full"
        }
      >
        {form.plans.map((plan) => (
          <li className="w-full">
            <label
              htmlFor={"radio-" + plan.name.toLowerCase()}
              className={
                "flex border rounded-lg cursor-pointer pointer-events-auto" +
                " desktop:flex-col desktop:w-full" +
                " mobile:flex-row mobile:w-full " +
                (plan.checked
                  ? " border-neutral-coolgray bg-primary-lightblue bg-opacity-25"
                  : " border-neutral-lightgray")
              }
            >
              <input
                type="radio"
                id={"radio-" + plan.name.toLowerCase()}
                checked={plan.checked}
                className="hidden"
                onChange={() => {
                  console.log(plan.name);
                  dispatch({
                    type: "change_plan",
                    form: {
                      ...form,
                      plans: form.plans.map((p) => {
                        if (p.name === plan.name) {
                          const selectedPlan = { ...p, checked: true };
                          return selectedPlan;
                        } else {
                          const discardedPlan = { ...p, checked: false };
                          return discardedPlan;
                        }
                      }),
                    },
                  });
                }}
              />
              <div
                className={
                  "m-4 w-12 h-12 " +
                  (plan.name === "Arcade" ? "content-planArcade" : "") +
                  (plan.name === "Advanced" ? "content-planAdvanced" : "") +
                  (plan.name === "Pro" ? "content-planPro" : "")
                }
              />
              <div
                className={
                  "cursor-default pointer-events-none " +
                  " desktop:mx-4 desktop:mt-8 desktop:mb-4 desktop:gap-y-2 desktop:gap-x-0 " +
                  " mobile:my-4 mobile:gap-y-0 mobile:gap-x-4"
                }
              >
                <div className="font-bold text-primary-marineblue">
                  {plan.name}
                </div>
                <div className="text-xs font-regular text-neutral-coolgray">
                  {"$" +
                    ((form.billingOption.find((b) => b.checked)?.name ?? "") ===
                    "Monthly"
                      ? plan.price + "/mo"
                      : plan.price * 10 + "/yr")}
                </div>
                <div className="text-xs font-regular text-primary-marineblue">
                  {form.billingOption.find((b) => b.checked)?.features ?? ""}
                </div>
              </div>
            </label>
          </li>
        ))}
      </ul>

      <div className="flex flex-row items-center justify-center h-12 bg-opacity-25 rounded-xl bg-neutral-lightgray gap-x-6">
        <div
          className={
            form.billingOption[0].checked
              ? "text-primary-marineblue font-medium pointer-events-none cursor-default"
              : "text-neutral-coolgray pointer-events-auto cursor-pointer"
          }
          onPointerUp={(e) =>
            dispatch({
              type: "change_billing_option",
              form: {
                ...form,
                billingOption: [
                  { ...form.billingOption[0], checked: true },
                  { ...form.billingOption[1], checked: false },
                ],
              },
            })
          }
        >
          {form.billingOption[0].name}
        </div>
        <div
          className={
            "flex items-center justify-between w-12 h-6 border rounded-full bg-primary-marineblue border-primary-marineblue " +
            ((form.billingOption.find((b) => b.checked)?.name ?? "") ===
            form.billingOption[0].name
              ? "flex-row"
              : "flex-row-reverse")
          }
          onPointerUp={(e) =>
            dispatch({
              type: "change_billing_option",
              form: {
                ...form,
                billingOption: form.billingOption.map((b) => {
                  const newOption = { ...b, checked: !b.checked };
                  return newOption;
                }),
              },
            })
          }
        >
          <div className="w-4 h-4 mx-1 rounded-full bg-neutral-white"></div>
        </div>
        <div
          className={
            form.billingOption[1].checked
              ? "text-primary-marineblue font-medium pointer-events-none cursor-default"
              : "text-neutral-coolgray pointer-events-auto cursor-pointer"
          }
          onPointerUp={(e) =>
            dispatch({
              type: "change_billing_option",
              form: {
                ...form,
                billingOption: [
                  { ...form.billingOption[0], checked: false },
                  { ...form.billingOption[1], checked: true },
                ],
              },
            })
          }
        >
          {form.billingOption[1].name}
        </div>
      </div>
    </div>
  );
};
