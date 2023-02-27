import { useForm, useFormDispatch } from "./FormContext";

export const FormSummary = () => {
  const form = useForm();
  const dispatch = useFormDispatch();

  return form.currentStep !== 4 ? (
    <></>
  ) : (
    <ul className="flex flex-col w-full">
      <li className="flex flex-row justify-between w-full p-4 bg-opacity-25 rounded-lg bg-primary-lightblue">
        <div className="flex flex-col">
          <span className="text-lg font-medium text-primary-marineblue">
            {(form.plans.find((plan) => plan.checked)?.name ?? "") +
              " (" +
              (form.billingOption.find((b) => b.checked)?.name ?? "") +
              ")"}
          </span>
          <span
            className="underline cursor-pointer text-neutral-coolgray"
            onPointerUp={() =>
              dispatch({
                type: "go_to_step",
                form: { ...form, currentStep: 2 },
              })
            }
          >
            Change
          </span>
        </div>
        <span>
          {"$" +
            ((form.billingOption.find((b) => b.checked)?.name ?? "") ===
            "Monthly"
              ? (form.plans.find((plan) => plan.checked)?.price ?? 0) + "/mo"
              : (form.plans.find((plan) => plan.checked)?.price ?? 0) * 10 +
                "/yr")}
        </span>
      </li>
      {!form.addOns.filter((addOn) => addOn.checked).length ? (
        <></>
      ) : (
        <>
          <hr />
          <li className="flex flex-row justify-between w-full p-4 bg-opacity-25 bg-primary-lightblue">
            <ul className="flex flex-col w-full">
              {form.addOns
                .filter((addOn) => addOn.checked)
                .map((selectedAddOn) => (
                  <li className="flex flex-row justify-between w-full">
                    <span className="text-neutral-coolgray">
                      {selectedAddOn.name}
                    </span>
                    <span className="text-primary-marineblue">
                      {"+$" +
                        ((form.billingOption.find((b) => b.checked)?.name ??
                          "") === "Monthly"
                          ? selectedAddOn.price + "/mo"
                          : selectedAddOn.price * 10 + "/yr")}
                    </span>
                  </li>
                ))}
            </ul>
          </li>
        </>
      )}
      <li className="flex flex-row justify-between w-full px-4 my-6">
        <span className="text-neutral-coolgray">Total (per year)</span>
        <span className="text-xl font-medium text-primary-purplishblue">
          {"$" +
            ((form.plans.find((plan) => plan.checked)?.price ?? 0) *
              ((form.billingOption.find((b) => b.checked)?.name ?? "") ===
              "Monthly"
                ? 1
                : 10) +
              form.addOns
                .filter((addOn) => addOn.checked)
                .reduce((acc, price) => acc + price.price, 0) *
                ((form.billingOption.find((b) => b.checked)?.name ?? "") ===
                "Monthly"
                  ? 1
                  : 10))}
        </span>
      </li>
    </ul>
  );
};
