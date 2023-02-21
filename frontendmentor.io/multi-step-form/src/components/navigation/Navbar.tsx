import { NavbarItem } from "@app/components/navigation";
import { NavbarProps } from "@app/types/components";

const Navbar: React.FC<NavbarProps> = ({
  currentStep,
  handleNavbarClick,
  navbarItems,
}) => {
  return (
    <div
      className={
        "relative desktop:bg-desktop mobile:bg-mobile bg-no-repeat" +
        " desktop:w-2/5 desktop:m-4 desktop:rounded-xl " +
        " mobile:top-0 mobile:left-0 mobile:right-0 mobile:w-full mobile:bg-cover"
      }
    >
      <div className="flex flex-col m-8">
        <ul
          className={
            "flex pointer-events-auto " +
            " desktop:relative desktop:flex-col desktop:space-y-6 desktop:space-x-0 " +
            " mobile:absolute mobile:flex-row mobile:space-x-6 mobile:space-y-0 mobile:justify-center"
          }
        >
          {navbarItems.map((navbarItem) => (
            <NavbarItem
              step={navbarItem.step}
              name={"STEP " + navbarItem.step}
              description={navbarItem.description}
              isActive={currentStep === navbarItem.step}
              handleNavbarClick={handleNavbarClick}
            />
          ))}
          {/* <NavbarItem
            step={1}
            name="STEP 1"
            description="YOUR INFO"
            isActive={currentStep === 1}
            handleNavbarClick={handleNavbarClick}
          />
          <NavbarItem
            step={2}
            name="STEP 2"
            description="SELECT PLAN"
            isActive={currentStep === 2}
            handleNavbarClick={handleNavbarClick}
          />
          <NavbarItem
            step={3}
            name="STEP 3"
            description="ADD-ONS"
            isActive={currentStep === 3}
            handleNavbarClick={handleNavbarClick}
          />
          <NavbarItem
            step={4}
            name="STEP 4"
            description="SUMMARY"
            isActive={currentStep === 4}
            handleNavbarClick={handleNavbarClick}
          /> */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
