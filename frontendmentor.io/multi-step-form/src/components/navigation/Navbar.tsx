import { NavbarItem } from "@app/components/navigation";
import { NavbarProps } from "@app/types";

const Navbar: React.FC<NavbarProps> = ({ currentStep, handleClick }) => {
  return (
    <>
      <div className="relative w-2/5 m-4 rounded-xl desktop:bg-desktop mobile:bg-mobile">
        <div className="flex flex-col m-8">
          <ul className="flex pointer-events-auto desktop:flex-col desktop:space-y-6 desktop:space-x-0 mobile:flex-row mobile:space-x-6 mobile:space-y-0">
            <NavbarItem
              step={1}
              name="STEP 1"
              description="YOUR INFO"
              isActive={currentStep === 1}
              handleClick={handleClick}
            />
            <NavbarItem
              step={2}
              name="STEP 2"
              description="SELECT PLAN"
              isActive={currentStep === 2}
              handleClick={handleClick}
            />
            <NavbarItem
              step={3}
              name="STEP 3"
              description="ADD-ONS"
              isActive={currentStep === 3}
              handleClick={handleClick}
            />
            <NavbarItem
              step={4}
              name="STEP 4"
              description="SUMMARY"
              isActive={currentStep === 4}
              handleClick={handleClick}
            />
          </ul>
        </div>
      </div>

      {/*
    <div className="pointer-events-none select-none desktop:rounded-lg desktop:m-4 desktop:h-1/2 desktop:w-1/5 desktop:bg-primary-purplishblue">
      <div className="flex flex-col items-center my-12">
        <div className="flex flex-col">
          <ul className="flex pointer-events-auto desktop:flex-col mobile:flex-row desktop:space-y-6 desktop:space-x-0 mobile:space-x-6 mobile:space-y-0">
            <NavbarItem
              step={1}
              name="STEP 1"
              description="YOUR INFO"
              isActive={currentStep === 1}
              handleClick={handleClick}
            />
            <NavbarItem
              step={2}
              name="STEP 2"
              description="SELECT PLAN"
              isActive={currentStep === 2}
              handleClick={handleClick}
            />
            <NavbarItem
              step={3}
              name="STEP 3"
              description="ADD-ONS"
              isActive={currentStep === 3}
              handleClick={handleClick}
            />
            <NavbarItem
              step={4}
              name="STEP 4"
              description="SUMMARY"
              isActive={currentStep === 4}
              handleClick={handleClick}
            />
          </ul>
        </div>
      </div>

      <img
        src={desktopImg}
        alt={desktopImg}
        className="mobile:hidden desktop:block"
      />
    </div>
  */}
    </>
  );
};

export default Navbar;
