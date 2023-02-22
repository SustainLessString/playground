import { AddOnProps } from "@app/types/components";

export const AddOn: React.FC<AddOnProps> = ({
  addOn,
  isAddOnInSelectedList,
  selectedBillingOption,
  getAddOnPrice,
  handleChangeSelectedAddOns,
}) => (
  <li>
    <label
      htmlFor={addOn.name}
      className={
        "flex flex-row justify-between w-full border rounded-lg cursor-pointer " +
        (isAddOnInSelectedList(addOn)
          ? " border-primary-marineblue bg-primary-lightblue bg-opacity-25 "
          : " border-neutral-coolgray bg-neutral-white ")
      }
    >
      <div className="flex flex-row items-center mx-4 my-6 cursor-pointer gap-x-4 ">
        <div
          className={
            "w-6 h-6 border rounded-md border-neutral-lightgray " +
            (isAddOnInSelectedList(addOn)
              ? " bg-primary-purplishblue content-check p-1"
              : " bg-neutral-white ")
          }
        />
        <input
          id={addOn.name}
          type="checkbox"
          checked={isAddOnInSelectedList(addOn)}
          className="absolute appearance-none "
          name={addOn.name}
          onChange={() => handleChangeSelectedAddOns(addOn)}
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
        {getAddOnPrice(addOn, selectedBillingOption)}
      </span>
    </label>
  </li>
);
