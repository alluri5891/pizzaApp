import React from "react";
import { useForm, useStep } from "./utils";

const Stepper = ({ steps, defultData, ...multiStepFormProps }) => {
  const [formData, setForm] = useForm(defultData || {});
  const { step, navigation } = useStep({
    initialStep: 0,
    steps: Object.values(steps)
  });

  const { id } = step;
  const props = { formData, setForm, navigation, ...multiStepFormProps };

  if (steps[id]) {
    const Comp = steps[id].component
    return <Comp  {...props} stepData={steps[id]} />
  }
  return null;

};

export default Stepper;
