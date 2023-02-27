import { useForm } from "./FormContext";

export const FormHeader = () => {
  const form = useForm();

  return (
    <div className="my-6 mt-2">
      <h1 className="text-4xl font-bold">
        {form.headers[form.currentStep - 1].title}
      </h1>
      <p className="text-lg font-regular text-neutral-coolgray">
        {form.headers[form.currentStep - 1].description}
      </p>
    </div>
  );
};
