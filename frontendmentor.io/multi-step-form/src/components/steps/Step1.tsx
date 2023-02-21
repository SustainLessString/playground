const Step1 = () => {
  return (
    <form className="space-y-4">
      <fieldset>
        <legend className="text-lg border-none">Name</legend>
        <input
          required
          id="PersonalInfoName"
          type="text"
          placeholder="e.g. Stephen King"
          className="box-border w-full px-4 py-2 text-lg border rounded-lg caret-neutral-coolgray border-neutral-coolgray"
        />
      </fieldset>
      <fieldset>
        <legend className="text-lg border-none">Email Address</legend>
        <input
          required
          id="PersonalInfoEmail"
          type="email"
          placeholder="e.g. stephenking@lorem.com"
          className="box-border w-full px-4 py-2 text-lg border rounded-lg caret-neutral-coolgray border-neutral-coolgray"
        />
      </fieldset>
      <fieldset>
        <legend className="text-lg border-none">Phone Number</legend>
        <input
          required
          id="PersonalInfoPhoneNumber"
          type="text"
          placeholder="e.g. +1 234 567 890"
          className="box-border w-full px-4 py-2 text-lg border rounded-lg caret-neutral-coolgray border-neutral-coolgray"
        />
      </fieldset>
    </form>
  );
};

export default Step1;
