import { AddOnProps, Step3Props } from "@app/types/components";

const Step3: React.FC<Step3Props> = ({
  addOns,
  selectedAddOns,
  billing,
  handleAddOnClick,
}) => {
  return (
    <ul className="flex flex-col justify-between w-full gap-y-4">
      {addOns.map((addOn) => (
        <AddOn
          addOn={addOn}
          selectedAddOns={selectedAddOns}
          billing={billing}
          handler={handleAddOnClick}
        />
      ))}
    </ul>
  );
};

export default Step3;

const AddOn: React.FC<AddOnProps> = ({
  addOn,
  selectedAddOns,
  billing,
  handler,
}) => {
  const isSelected =
    selectedAddOns.filter((selectedAddOn) => selectedAddOn === addOn.name)
      .length > 0;

  return (
    <li>
      <label
        htmlFor={addOn.name}
        className={
          "flex flex-row justify-between w-full border rounded-lg cursor-pointer " +
          (isSelected
            ? " border-primary-marineblue bg-primary-lightblue bg-opacity-25 "
            : " border-neutral-coolgray bg-neutral-white ")
        }
      >
        <div className="flex flex-row items-center mx-4 my-6 cursor-pointer gap-x-4 ">
          <div
            className={
              "w-6 h-6 border rounded-md border-neutral-lightgray " +
              (isSelected
                ? " bg-primary-purplishblue content-check p-1"
                : " bg-neutral-white ")
            }
          />
          <input
            type="checkbox"
            checked={isSelected}
            className="absolute appearance-none "
            name={addOn.name}
            id={addOn.name}
            onChange={() => handler(addOn.name)}
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
          {"+$" +
            (billing === "Yearly"
              ? addOn.monthlyPrice * 10 + "/yr"
              : addOn.monthlyPrice + "/mo")}
        </span>
      </label>
    </li>
  );
};
