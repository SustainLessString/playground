// import { Header, Steps } from "@app/components";
// import {
//   ContainerItemProps,
//   Step1ComponentProps,
//   Step2ComponentProps,
//   Step3ComponentProps,
//   Step4ComponentProps,
// } from "@app/types/components";

// export const ContainerItem: React.FC<ContainerItemProps> = ({
//   currentStep,
//   headerItems,
//   isStepCurrentlyActive,
//   stepComponentsProps,
// }) => (
//   <>
//     {isStepCurrentlyActive(currentStep) ? (
//       <>
//         <Header
//           title={headerItems[currentStep - 1].title}
//           description={headerItems[currentStep - 1].description}
//         />
//         {currentStep === 1 ? (
//           <Steps.Step1 {...(stepComponentsProps as Step1ComponentProps)} />
//         ) : (
//           <></>
//         )}
//         {currentStep === 2 ? (
//           <Steps.Step2 {...(stepComponentsProps as Step2ComponentProps)} />
//         ) : (
//           <></>
//         )}
//         {currentStep === 3 ? (
//           <Steps.Step3 {...(stepComponentsProps as Step3ComponentProps)} />
//         ) : (
//           <></>
//         )}
//         {currentStep === 4 ? (
//           <Steps.Step4 {...(stepComponentsProps as Step4ComponentProps)} />
//         ) : (
//           <></>
//         )}
//       </>
//     ) : (
//       <></>
//     )}
//   </>
// );
