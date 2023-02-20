import { FooterProps } from "@app/types";

const Footer: React.FC<FooterProps> = ({
  step,
  handlePrevious,
  hanldeNext,
}) => {
  return (
    <div className="flex flex-row-reverse justify-between mx-20 my-12 select-none bg-neutral-white">
      {step < 5 ? (
        <button
          type="button"
          onClick={hanldeNext}
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
          onClick={handlePrevious}
          className="px-4 py-2 text-base border-none rounded-lg bg-neutral-white text-neutral-coolgray hover:text-primary-marineblue"
        >
          Go Back
        </button>
      ) : (
        <></>
      )}
    </div>
  );
};
export default Footer;
