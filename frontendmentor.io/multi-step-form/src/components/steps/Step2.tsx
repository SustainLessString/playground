import { Step2Children } from "@app/components/steps";
import { Step2ComponentProps } from "@app/types/components";

const Step2: React.FC<Step2ComponentProps> = (props: Step2ComponentProps) => {
  return (
    <div className="flex flex-col gap-y-8 bg-neutral-white">
      <ul className="flex flex-row justify-between gap-x-4">
        {props.plans.map((plan) => (
          <Step2Children.Plan
            plan={plan}
            isSelected={plan.name === props.selectedPlan.name}
            selectedBillingOptionFeature={props.selectedBillingOptionFeature}
            handleChangeSelectedPlan={props.handleChangeSelectedPlan}
            getPlanPrice={props.getPlanPrice}
          />
        ))}
      </ul>

      <Step2Children.ToggleBillingOption
        selectedBillingOption={props.selectedBillingOption}
        handleBillingSwitch={props.handleBillingSwitch}
      />
    </div>
  );
};

export default Step2;
