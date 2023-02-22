import { Step3Children } from "@app/components/steps";
import { Step3ComponentProps } from "@app/types/components";

const Step3: React.FC<Step3ComponentProps> = ({
  addOns,
  isAddOnInSelectedList,
  selectedBillingOption,
  getAddOnPrice,
  handleChangeSelectedAddOns,
}) => {
  return (
    <ul className="flex flex-col justify-between w-full gap-y-4">
      {addOns.map((addOn) => (
        <Step3Children.AddOn
          addOn={addOn}
          isAddOnInSelectedList={isAddOnInSelectedList}
          selectedBillingOption={selectedBillingOption}
          getAddOnPrice={getAddOnPrice}
          handleChangeSelectedAddOns={handleChangeSelectedAddOns}
        />
      ))}
    </ul>
  );
};

export default Step3;
