import { useForm } from "@app/components/hooks";

import Form from "@app/components/Form";
import Banner from "@app/components/Banner";
import ThankYou from "@app/components/ThankYou";

const App = () => {
  const {
    formInput,
    formValidity,
    submit,
    handleInputFocus,
    handleInputBlur,
    handleInputChange,
    handleFormSubmit,
  } = useForm();

  return (
    <div className="flex xl:flex-row xs:flex-col">
      <div className="xl:w-1/3">
        <div className="bg-center bg-no-repeat bg-cover xs:bg-mobile xl:bg-desktop">
          <Banner formInput={formInput} />
        </div>
      </div>
      <div className="xl:w-2/3">
        <div className="bg-neutral-white">
          {!submit ? (
            <Form
              formValidity={formValidity}
              handleInputChange={handleInputChange}
              handleInputFocus={handleInputFocus}
              handleInputBlur={handleInputBlur}
              handleFormSubmit={handleFormSubmit}
            />
          ) : (
            <ThankYou handleSubmit={handleFormSubmit} />
          )}
        </div>
      </div>
    </div>
  );
};
export default App;
