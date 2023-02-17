import { FormProps } from "@app/components/types";

const Form: React.FC<FormProps> = ({
  formValidity,
  handleInputChange,
  handleInputFocus,
  handleInputBlur,
  handleFormSubmit,
}) => {
  const expiryDateErrorMessage = () => {
    if (formValidity.expiryMonthError && !formValidity.expiryYearError)
      return formValidity.expiryMonthErrorMessage;
    else if (!formValidity.expiryMonthError && formValidity.expiryYearError)
      return formValidity.expiryYearErrorMessage;
    else if (!formValidity.expiryMonthError && !formValidity.expiryYearError)
      return "";
    else return formValidity.expiryYearErrorMessage;
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="flex flex-col items-center justify-center min-h-screen min-w-fit">
        <div className="max-w-md xl:min-w-xl xs:min-w-xs">
          <fieldset className="my-2 rounded-lg">
            <legend className="tracking-widest">Cardholder Name</legend>
            <input
              autoFocus
              required
              id="cardholderName"
              type="text"
              className={
                "box-border w-full px-4 py-2 text-2xl border-2 rounded-lg" +
                (formValidity.cardHolderNameError ? " border-primary-red" : "")
              }
              placeholder="e.g. Jane Applessed"
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              onInvalid={(e) => e.preventDefault()}
            />
            {formValidity.cardHolderNameError ? (
              <div className="text-primary-red">
                {formValidity.cardHolderNameErrorMessage}
              </div>
            ) : (
              ""
            )}
          </fieldset>

          <fieldset className="my-2 rounded-lg">
            <legend className="tracking-widest">Card Number</legend>
            <input
              required
              id="cardNumber"
              type="number"
              className={
                "box-border w-full px-4 py-2 text-2xl border-2 rounded-lg appearance-none" +
                (formValidity.cardNumberError ? " border-primary-red" : "")
              }
              placeholder="e.g. 1234 5678 9123 0000"
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              onKeyDown={(e) =>
                ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()
              }
              onInvalid={(e) => e.preventDefault()}
            />
            {formValidity.cardNumberError ? (
              <div className="text-primary-red">
                {formValidity.cardNumberErrorMessage}
              </div>
            ) : (
              ""
            )}
          </fieldset>

          <div className="flex flex-row w-full">
            <fieldset className="w-1/2 my-2 space-x-1 rounded-lg">
              <legend className="tracking-widest">Exp. Date {"(MM/YY)"}</legend>
              <input
                required
                id="expiryMonth"
                type="number"
                className={
                  "box-border w-2/5 px-4 py-2 text-2xl border-2 rounded-lg appearance-none" +
                  (formValidity.expiryMonthError ? " border-primary-red" : "")
                }
                placeholder="MM"
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                onKeyDown={(e) =>
                  ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()
                }
                onInvalid={(e) => e.preventDefault()}
              />
              <input
                required
                id="expiryYear"
                type="number"
                className={
                  "box-border w-2/5 px-4 py-2 text-2xl border-2 rounded-lg appearance-none" +
                  (formValidity.expiryYearError ? " border-primary-red" : "")
                }
                placeholder="YY"
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                onKeyDown={(e) =>
                  ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()
                }
                onInvalid={(e) => e.preventDefault()}
              />
              <div className="text-primary-red">{expiryDateErrorMessage()}</div>
            </fieldset>

            <fieldset className="w-1/2 my-2 rounded-lg">
              <legend className="tracking-widest">CVC</legend>
              <input
                required
                id="cardVerificationCode"
                className={
                  "box-border w-full px-4 py-2 text-2xl border-2 rounded-lg appearance-none" +
                  (formValidity.cardValidationCodeError
                    ? " border-primary-red"
                    : "")
                }
                placeholder="e.g. 123"
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                onKeyDown={(e) =>
                  ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()
                }
                onInvalid={(e) => e.preventDefault()}
              />
              {formValidity.cardValidationCodeError ? (
                <div className="text-primary-red">Invalid CVC</div>
              ) : (
                ""
              )}
            </fieldset>
          </div>

          <button
            type="submit"
            disabled={
              formValidity.cardHolderNameError ||
              formValidity.cardNumberError ||
              formValidity.expiryMonthError ||
              formValidity.expiryYearError ||
              formValidity.cardValidationCodeError
            }
            className="w-full h-10 text-2xl text-white bg-black rounded-lg disabled:text-neutral-darkGrayishViolet"
          >
            Confirm
          </button>
        </div>
      </div>
    </form>
  );
};
export default Form;
