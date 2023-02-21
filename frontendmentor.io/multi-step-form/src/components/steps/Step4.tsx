import { Step4Props } from "@app/types/components";

const Step4: React.FC<Step4Props> = ({ addOns, billing, plan }) => {
  return (
    <ul className="flex flex-col w-full">
      <li className="flex flex-row justify-between w-full p-4 bg-opacity-25 bg-primary-lightblue">
        <div className="flex flex-col">
          <span className="text-lg font-medium text-primary-marineblue">
            {plan + "(" + billing + ")"}
          </span>
          <span className="underline text-neutral-coolgray">Change</span>
        </div>
        <span>$90/yr</span>
      </li>
      {!addOns.length ? (
        <></>
      ) : (
        <>
          <hr />
          <li className="flex flex-row justify-between w-full p-4 bg-opacity-25 bg-primary-lightblue">
            <ul className="flex flex-col w-full">
              {addOns.map((addOn) => (
                <li className="flex flex-row justify-between w-full">
                  <span className="text-neutral-coolgray">{addOn}</span>
                  <span className="text-primary-marineblue">+$10/yr</span>
                </li>
              ))}
            </ul>
          </li>
        </>
      )}
      <li className="flex flex-row justify-between w-full px-4 my-6">
        <span className="text-neutral-coolgray">Total (per year)</span>
        <span className="text-xl font-medium text-primary-purplishblue">
          +$120/yr
        </span>
      </li>
    </ul>
  );
};

export default Step4;
