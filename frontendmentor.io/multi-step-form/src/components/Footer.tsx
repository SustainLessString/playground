import { FooterProps } from "@app/types/components";

const Footer: React.FC<FooterProps> = ({
  step,
  handlePreviousStep,
  handleNextStep,
}) => {
  return (
    <div
      className={
        "bottom-0 left-0 right-0 block mx-20 mb-6 " +
        " desktop:absolute " +
        " mobile:fixed"
      }
    >
      <div className="relative flex flex-row-reverse justify-between select-none bg-neutral-white">
        {step < 5 ? (
          <button
            type="button"
            onClick={handleNextStep}
            className={
              "px-4 py-2 text-xl border-none rounded-lg text-neutral-white " +
              (step < 4
                ? " hover:bg-primary-purplishblue bg-primary-marineblue"
                : " bg-primary-purplishblue hover:bg-primary-marineblue")
            }
          >
            {step < 4 ? "Next step" : "Confirm"}
          </button>
        ) : (
          <></>
        )}
        {1 < step && step < 5 ? (
          <button
            type="button"
            onClick={handlePreviousStep}
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
export default Footer;