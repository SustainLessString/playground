// import { ChangeEvent, KeyboardEvent, useState } from "react";

// export const useForm = () => {
//   const [cardHolderName, setCardHolderName] = useState<string>("");
//   const [cardNumber, setCardNumber] = useState<string>("");
//   const [expiryDate, setExpiryDate] = useState<string[]>(["00", "00"]);
//   const [cardValidationCode, setCardValidationCode] = useState<string>("");

//   const [submit, setSubmit] = useState<boolean>(false);

//   const [invalidCardHolderName, setInvalidCardHolderName] =
//     useState<string>('');
//   const [invalidCardNumber, setInvalidCardNumber] = useState<string>('');
//   const [invalidExpiryDate, setInvalidExpiryDate] = useState<string>('');
//   const [invalidCardValidationCode, setInvalidCardValidationCode] =
//     useState<string>('');

//   const expDateRegex = () => {
//     const currentMonth = new Date().getMonth() + 1;
//     const currentYear = new Date().getFullYear();
//     const oneDigit = currentYear % 10;
//     const twoDigit = Math.floor((currentYear % 100) / 10);

//     return new RegExp(
//       "^((0[1-9])|(1[0-2]))/?((" +
//         twoDigit +
//         "[" +
//         oneDigit +
//         "-9])|([" +
//         (twoDigit + 1) +
//         "-9][0-9]))$"
//     );
//   };

//   const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const cardNumberRegex = /[0-9]{16}/;
//     const monthRegex = /^(0[1-9]|1[0-2])$/;
//     const yearRegex = /^[0-9]{2}$/;
//     const cvcRegex = /^[0-9]{3,4}$/;

//     switch (e.target.getAttribute("id")) {
//       case "cardholderName":
//         setCardHolderName((_) => e.target.value);
//         break;
//       case "cardNumber":
//         setCardNumber(() => e.target.value);
//         break;
//       case "expDateMM":
//         setExpiryDate(() => {
//           const date = [e.target.value, expiryDate[1]];
//           // console.log(validate(e.target.value, monthRegex));
//           return date;
//         });
//         break;
//       case "expDateYY":
//         setExpiryDate(() => {
//           const date = [expiryDate[0], e.target.value];
//           // console.log(validate(e.target.value, yearRegex));
//           return date;
//         });
//         break;
//       case "cvc":
//         setCardValidationCode(() => e.target.value);
//         break;
//     }
//   };

//   const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) =>
//     ["e", "E", "+", "-"].includes(e.key) && e.preventDefault();

//   const resetState = () => {
//     setCardHolderName("");
//     setCardNumber("");
//     setExpiryDate(["00", "00"]);
//     setCardValidationCode("");

//     // setIsInvalid([true, true, true, true]);
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     submit && resetState();

//     setSubmit(!submit);
//   };

//   return {
//     handleInputChange,
//     handleKeyDown,
//     cardHolderName,
//     cardNumber,
//     expiryDate,
//     cardValidationCode,
//     submit,
//     handleSubmit,
//     invalidCardHolderName,
//     invalidCardNumber,
//     invalidExpiryDate,
//     invalidCardValidationCode,
//   };
// };

import { useReducer, useState } from "react";

import {
  FormInputAction,
  FormInputState,
  FormValidityAction,
  FormValidityState,
} from "@app/components/types";

export function useForm() {
  const initialFormInputState: FormInputState = {
    cardHolderName: "",
    cardNumber: "",
    expiryMonth: "",
    expiryYear: "",
    cardValidationCode: "",
  };

  const initialFormValidityState: FormValidityState = {
    cardHolderNameError: false,
    cardNumberError: false,
    expiryMonthError: false,
    expiryYearError: false,
    cardValidationCodeError: false,

    cardHolderNameErrorMessage: "",
    cardNumberErrorMessage: "",
    expiryMonthErrorMessage: "",
    expiryYearErrorMessage: "",
    cardValidationCodeErrorMessage: "",
  };

  const [formInput, setFormInput] = useReducer(
    formInputReducer,
    initialFormInputState
  );
  const [formValidity, setFormValidity] = useReducer(
    formValidityReducer,
    initialFormValidityState
  );
  const [submit, setSubmit] = useState(false);

  function formInputReducer(
    state: FormInputState,
    action: FormInputAction
  ): FormInputState {
    switch (action.type) {
      case "set_card_holder_name":
        return { ...state, cardHolderName: action.inputCardHolderName };

      case "set_card_number":
        return { ...state, cardNumber: action.inputCardNumber };

      case "set_expiry_month":
        return { ...state, expiryMonth: action.inputExpiryMonth };

      case "set_expiry_year":
        return { ...state, expiryYear: action.inputExpiryYear };

      case "set_card_validation_code":
        return { ...state, cardValidationCode: action.inputCardValidationCode };

      default:
        return state;
    }
  }

  function formValidityReducer(
    state: FormValidityState,
    action: FormValidityAction
  ): FormValidityState {
    switch (action.type) {
      case "validate_card_holder_name":
        return {
          ...state,
          cardHolderNameError: !action.inputCardHolderName.length,
          cardHolderNameErrorMessage: "Can't be blank.",
        };

      case "validate_card_number":
        if (!action.inputCardNumber.length) {
          return {
            ...state,
            cardNumberError: true,
            cardNumberErrorMessage: "Can't be blank.",
          };
        }

        return {
          ...state,
          cardNumberError: !/[0-9]{16}/.test(action.inputCardNumber),
          cardNumberErrorMessage: "Invalid Card Number.",
        };

      case "validate_expiry_month":
        if (!action.inputExpiryMonth.length) {
          return {
            ...state,
            expiryMonthError: true,
            expiryMonthErrorMessage: "Can't be blank.",
          };
        }

        return {
          ...state,
          expiryMonthError: !/^(0[1-9]|1[0-2])$/.test(action.inputExpiryMonth),
          expiryMonthErrorMessage: "Invalid Month.",
        };

      case "validate_expiry_year":
        if (!action.inputExpiryYear.length) {
          return {
            ...state,
            expiryYearError: true,
            expiryYearErrorMessage: "Can't be blank.",
          };
        }

        return {
          ...state,
          expiryYearError: !/^[0-9]{2}$/.test(action.inputExpiryYear),
          expiryYearErrorMessage: "Invalid Year.",
        };

      case "validate_card_validation_code":
        if (!action.inputCardValidationCode.length) {
          return {
            ...state,
            cardValidationCodeError: true,
            cardValidationCodeErrorMessage: "Can't be blank.",
          };
        }

        return {
          ...state,
          cardValidationCodeError: !/^[0-9]{3,4}$/.test(
            action.inputCardValidationCode
          ),
          cardValidationCodeErrorMessage: "Invalid CVC",
        };

      case "clear_validity_state":
        switch (action.inputElementID) {
          case "cardholderName":
            return {
              ...state,
              cardHolderNameError: false,
            };
          case "cardNumber":
            return {
              ...state,
              cardNumberError: false,
            };
          case "expiryMonth":
            return {
              ...state,
              expiryMonthError: false,
            };
          case "expiryYear":
            return {
              ...state,
              expiryYearError: false,
            };
          case "cardVerificationCode":
            return {
              ...state,
              cardValidationCodeError: false,
            };
        }

      default:
        return state;
    }
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    switch (e.target.getAttribute("id")) {
      case "cardholderName":
        return setFormInput({
          type: "set_card_holder_name",
          inputCardHolderName: e.target.value,
        });

      case "cardNumber":
        return setFormInput({
          type: "set_card_number",
          inputCardNumber: e.target.value,
        });

      case "expiryMonth":
        return setFormInput({
          type: "set_expiry_month",
          inputExpiryMonth: e.target.value,
        });

      case "expiryYear":
        return setFormInput({
          type: "set_expiry_year",
          inputExpiryYear: e.target.value,
        });

      case "cardVerificationCode":
        return setFormInput({
          type: "set_card_validation_code",
          inputCardValidationCode: e.target.value,
        });
    }
  }

  function handleInputFocus(e: React.FocusEvent<HTMLInputElement>) {
    return setFormValidity({
      type: "clear_validity_state",
      inputElementID: e.target.getAttribute("id"),
    });
  }

  function handleInputBlur(e: React.FocusEvent<HTMLInputElement>) {
    switch (e.target.getAttribute("id")) {
      case "cardholderName":
        return setFormValidity({
          type: "validate_card_holder_name",
          inputCardHolderName: e.target.value,
        });

      case "cardNumber":
        return setFormValidity({
          type: "validate_card_number",
          inputCardNumber: e.target.value,
        });

      case "expiryMonth":
        return setFormValidity({
          type: "validate_expiry_month",
          inputExpiryMonth: e.target.value,
        });

      case "expiryYear":
        return setFormValidity({
          type: "validate_expiry_year",
          inputExpiryYear: e.target.value,
        });

      case "cardVerificationCode":
        return setFormValidity({
          type: "validate_card_validation_code",
          inputCardValidationCode: e.target.value,
        });
    }
  }

  const handleFormSubmit = () => setSubmit(() => !submit);

  return {
    formInput,
    formValidity,
    submit,
    handleInputChange,
    handleInputFocus,
    handleInputBlur,
    handleFormSubmit,
  };
}
