import { useForm, useFormDispatch } from "./FormContext";

export const FormAddOn = () => {
  const form = useForm();
  const dispatch = useFormDispatch();

  return form.currentStep !== 3 ? (
    <></>
  ) : (
    <ul className="flex flex-col justify-between w-full gap-y-4">
      {form.addOns.map((addOn) => (
        <li>
          <label
            htmlFor={addOn.name}
            className={
              "flex flex-row justify-between w-full border rounded-lg cursor-pointer " +
              (addOn.checked
                ? " border-primary-marineblue bg-primary-lightblue bg-opacity-25 "
                : " border-neutral-coolgray bg-neutral-white ")
            }
          >
            <div className="flex flex-row items-center mx-4 my-6 cursor-pointer gap-x-4 ">
              <div
                className={
                  "w-6 h-6 border rounded-md border-neutral-lightgray " +
                  (addOn.checked
                    ? " bg-primary-purplishblue content-check p-1"
                    : " bg-neutral-white ")
                }
              />
              <input
                id={addOn.name}
                type="checkbox"
                checked={addOn.checked}
                className="absolute appearance-none "
                name={addOn.name}
                onChange={() =>
                  dispatch({
                    type: "change_addon",
                    form: {
                      ...form,
                      addOns: form.addOns.map((ao) => {
                        if (ao.name === addOn.name) {
                          const newAddOn = { ...ao, checked: !ao.checked };
                          return newAddOn;
                        }
                        return ao;
                      }),
                    },
                  })
                }
              />
              <div className="flex flex-col">
                <span className="text-lg font-medium text-primary-marineblue">
                  {addOn.name}
                </span>
                <span className="font-regular text-neutral-coolgray">
                  {addOn.description}
                </span>
              </div>
            </div>
            <span className="flex items-center mx-6 text-lg font-medium text-primary-purplishblue">
              {"$" +
                ((form.billingOption.find((b) => b.checked)?.name ?? "") ===
                "Monthly"
                  ? addOn.price + "/mo"
                  : addOn.price * 10 + "/yr")}
            </span>
          </label>
        </li>
      ))}
    </ul>
  );
};
