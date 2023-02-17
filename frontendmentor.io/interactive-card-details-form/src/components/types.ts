export type CardFrontProps = {
  cardHolderName: string;
  cardNumber: string;
  expiryMonth: string;
  expiryYear: string;
};

export type CardBackProps = { cardValidationCode: string };

export type BannerProps = { formInput: FormInputState };

export type FormProps = {
  formValidity: FormValidityState;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleInputFocus: (e: React.FocusEvent<HTMLInputElement>) => void;
  handleInputBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  handleFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export type ThankYouProps = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export type FormInputState = {
  cardHolderName: string;
  cardNumber: string;
  expiryMonth: string;
  expiryYear: string;
  cardValidationCode: string;
};

export type FormValidityState = {
  cardHolderNameError: boolean;
  cardNumberError: boolean;
  expiryMonthError: boolean;
  expiryYearError: boolean;
  cardValidationCodeError: boolean;

  cardHolderNameErrorMessage: string;
  cardNumberErrorMessage: string;
  expiryMonthErrorMessage: string;
  expiryYearErrorMessage: string;
  cardValidationCodeErrorMessage: string;
};

export type FormInputAction =
  | {
      type: "set_card_holder_name";
      inputCardHolderName: FormInputState["cardHolderName"];
    }
  | { type: "set_card_number"; inputCardNumber: FormInputState["cardNumber"] }
  | {
      type: "set_expiry_month";
      inputExpiryMonth: FormInputState["expiryMonth"];
    }
  | { type: "set_expiry_year"; inputExpiryYear: FormInputState["expiryYear"] }
  | {
      type: "set_card_validation_code";
      inputCardValidationCode: FormInputState["cardValidationCode"];
    }
  | { type: "clear_input_state" };

export type FormValidityAction =
  | {
      type: "validate_card_holder_name";
      inputCardHolderName: FormInputState["cardHolderName"];
    }
  | {
      type: "validate_card_number";
      inputCardNumber: FormInputState["cardNumber"];
    }
  | {
      type: "validate_expiry_month";
      inputExpiryMonth: FormInputState["expiryMonth"];
    }
  | {
      type: "validate_expiry_year";
      inputExpiryYear: FormInputState["expiryYear"];
    }
  | {
      type: "validate_card_validation_code";
      inputCardValidationCode: FormInputState["cardValidationCode"];
    }
  | {
      type: "clear_validity_state";
      inputElementID: string;
    };
