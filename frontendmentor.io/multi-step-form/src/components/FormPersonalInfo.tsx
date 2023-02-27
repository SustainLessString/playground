import { useForm, useFormDispatch } from "./FormContext";

export const FormPersonalInfo = () => {
  const form = useForm();
  const dispatch = useFormDispatch();

  return form.currentStep !== 1 ? (
    <></>
  ) : (
    <>
      <fieldset>
        <legend className="flex flex-row justify-between w-full text-lg border-none">
          <span className="block text-primary-marineblue">Name</span>
          <span className="block text-primary-strawberryred">
            {form.personalInfo.errName}
          </span>
        </legend>
        <input
          required
          value={form.personalInfo.name}
          onChange={(e) => {
            dispatch({
              type: "change_personal_info_name",
              form: {
                ...form,
                personalInfo: {
                  ...form.personalInfo,
                  name: e.target.value,
                },
              },
            });
          }}
          onBlur={(e) => {
            dispatch({
              type: "validate_personal_info_name",
            });
          }}
          type="text"
          placeholder="e.g. Stephen King"
          className={
            "box-border w-full px-4 py-2 text-lg border rounded-lg caret-neutral-coolgray " +
            (!form.personalInfo.errName.length
              ? " border-neutral-coolgray "
              : " border-primary-strawberryred")
          }
        />
      </fieldset>
      <fieldset>
        <legend className="flex flex-row justify-between w-full text-lg border-none">
          <span className="block text-primary-marineblue">Email Address</span>
          <span className="block text-primary-strawberryred">
            {form.personalInfo.errEmail}
          </span>
        </legend>
        <input
          required
          id="PersonalInfoEmail"
          value={form.personalInfo.email}
          onChange={(e) =>
            dispatch({
              type: "change_personal_info_email",
              form: {
                ...form,
                personalInfo: {
                  ...form.personalInfo,
                  email: e.target.value,
                },
              },
            })
          }
          onBlur={(e) => {
            dispatch({
              type: "validate_personal_info_email",
            });
          }}
          type="email"
          placeholder="e.g. stephenking@lorem.com"
          className={
            "box-border w-full px-4 py-2 text-lg border rounded-lg caret-neutral-coolgray " +
            (!form.personalInfo.errEmail.length
              ? " border-neutral-coolgray "
              : " border-primary-strawberryred")
          }
        />
      </fieldset>
      <fieldset>
        <legend className="flex flex-row justify-between w-full text-lg border-none">
          <span className="block text-primary-marineblue">Phone Number</span>
          <span className="block text-primary-strawberryred">
            {form.personalInfo.errPhoneNumber}
          </span>
        </legend>
        <input
          required
          value={form.personalInfo.phoneNumber}
          onChange={(e) => {
            dispatch({
              type: "change_personal_info_phone_number",
              form: {
                ...form,
                personalInfo: {
                  ...form.personalInfo,
                  phoneNumber: e.target.value,
                },
              },
            });
          }}
          onBlur={(e) => {
            dispatch({
              type: "validate_personal_info_phone_number",
            });
          }}
          type="number"
          placeholder="e.g. +1 234 567 890"
          className={
            "box-border w-full px-4 py-2 text-lg border rounded-lg caret-neutral-coolgray appearance-none " +
            (!form.personalInfo.errPhoneNumber.length
              ? " border-neutral-coolgray "
              : " border-primary-strawberryred")
          }
          onKeyDown={(e) =>
            ["e", "E", "-"].includes(e.key) && e.preventDefault()
          }
        />
      </fieldset>
    </>
  );
};
