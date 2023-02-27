import {
  FormAddOn,
  FormFooter,
  FormHeader,
  FormNavbar,
  FormPersonalInfo,
  FormPlan,
  FormProvider,
  FormSummary,
  FormThankYou,
} from "./components";

const App = () => (
  <FormProvider>
    <div className="flex items-center justify-center w-screen h-screen overflow-auto bg-primary-lightblue">
      <div className="relative desktop:bg-neutral-white desktop:w-[960px] desktop:h-[600px] rounded-xl flex desktop:flex-row mobile:flex-col mobile:bg-transparent">
        <FormNavbar />
        <div
          className={
            "relative flex flex-col justify-between w-full bg-transparent" +
            " mobile:h-screen" +
            " desktop:h-full"
          }
        >
          <div
            className={
              "block p-0 bg-neutral-white rounded-xl caret-transparent " +
              " desktop:my-2 desktop:mx-8 desktop:w-[calc(100%-4rem)] " +
              " mobile:z-10 mobile:p-12 mobile:w-calc[100vw-8rem] mobile:mx-4 mobile:my-24"
            }
          >
            <FormHeader />

            <FormPersonalInfo />
            <FormPlan />
            <FormAddOn />
            <FormSummary />
            <FormThankYou />

            <FormFooter />
          </div>
        </div>
      </div>
    </div>
  </FormProvider>
);
export default App;
