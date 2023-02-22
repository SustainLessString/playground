// import { ContainerItem } from "@app/components/container";
import { Header, Steps } from "@app/components";
import { ContainerProps } from "@app/types";

const Container: React.FC<ContainerProps> = ({ props }) => {
  return (
    <div
      className={
        "block p-0 bg-neutral-white rounded-xl caret-transparent " +
        " desktop:my-2 desktop:mx-8 " +
        " mobile:p-12 mobile:mx-12 mobile:my-0"
      }
    >
      {/* Not Working */}
      {/* {[...Array(4)].map((node) => {
        return (
          <ContainerItem
            currentStep={props.currentStep}
            headerItems={props.headerItems}
            isStepCurrentlyActive={props.isStepCurrentlyActive}
            stepComponentsProps={props.stepComponentsProps[node]}
          />
        );
      })} */}

      {props.currentStep === 1 ? (
        <>
          <Header
            title={props.headerItems[props.currentStep - 1].title}
            description={props.headerItems[props.currentStep - 1].description}
          />
          <Steps.Step1 {...props.stepComponentsProps[0]} />
        </>
      ) : (
        <></>
      )}

      {props.currentStep === 2 ? (
        <>
          <Header
            title={props.headerItems[props.currentStep - 1].title}
            description={props.headerItems[props.currentStep - 1].description}
          />
          <Steps.Step2 {...props.stepComponentsProps[1]} />
        </>
      ) : (
        <></>
      )}

      {props.currentStep === 3 ? (
        <>
          <Header
            title={props.headerItems[props.currentStep - 1].title}
            description={props.headerItems[props.currentStep - 1].description}
          />
          <Steps.Step3 {...props.stepComponentsProps[2]} />
        </>
      ) : (
        <></>
      )}

      {props.currentStep === 4 ? (
        <>
          <Header
            title={props.headerItems[props.currentStep - 1].title}
            description={props.headerItems[props.currentStep - 1].description}
          />
          <Steps.Step4 {...props.stepComponentsProps[3]} />
        </>
      ) : (
        <></>
      )}

      {props.currentStep === 5 ? <Steps.ThankYou /> : <></>}
    </div>
  );
};
export default Container;
