import { Navbar, Container, Footer } from "@app/components";

import { useApp } from "@app/hooks";

const App = () => {
  const {
    currentStep,
    handleNavbarClick,
    handldePreviousStep,
    handleNextStep,
  } = useApp();

  return (
    <div className="flex items-center justify-center w-screen h-screen overflow-auto bg-primary-lightblue">
      <div className="relative desktop:bg-neutral-white desktop:w-[960px] desktop:h-[600px] rounded-xl flex desktop:flex-row mobile:flex-col mobile:bg-transparent">
        <Navbar currentStep={currentStep} handleClick={handleNavbarClick} />
        <div className="flex flex-col justify-between w-full">
          <Container step={currentStep} />
          <Footer
            step={currentStep}
            handlePrevious={handldePreviousStep}
            hanldeNext={handleNextStep}
          />
        </div>
      </div>
    </div>
  );
};
export default App;
