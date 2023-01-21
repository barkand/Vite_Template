import React from "react";
import { TourProvider } from "@reactour/tour";

import WelcomeForm from "./modal";
import { default as stepsEn } from "./steps/en";
import { default as stepsFa } from "./steps/fa";

import { PublicContext } from "../../../core/context";

function Provider(props: any) {
  const { children } = props;
  const { publicCtx }: any = React.useContext(PublicContext);

  return (
    <TourProvider
      steps={publicCtx.culture.name === "en" ? stepsEn : stepsFa}
      showNavigation={false}
      styles={{ popover: (base) => ({ ...base, color: "black" }) }}
      onClickMask={({ setCurrentStep, currentStep, steps, setIsOpen }) => {
        if (steps) {
          if (currentStep === steps.length - 1) setIsOpen(false);
          setCurrentStep((s) => (s === steps.length - 1 ? 0 : s + 1));
        }
      }}
    >
      <WelcomeForm />
      {children}
    </TourProvider>
  );
}

export { Provider };
