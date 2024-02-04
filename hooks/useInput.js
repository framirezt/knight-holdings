import { useState } from "react";

const useInput = (validateInput, initialValue = "") => {
  const [isTouched, setIsTouched] = useState(false);
  const [value, setValue] = useState(initialValue);

  const isValid = validateInput(value);
  const hasError = !isValid && isTouched;

  const changeHandler = (e) => {
    setValue(e.target.value);
  };
  const blurHandler = (e) => {
    setIsTouched(true);
  };
  const reset = () => {
    setValue("");
    setIsTouched(false);
  };

  return {
    blurHandler,
    changeHandler,
    isValid,
    hasError,
    value,
    reset,
    setHandler: (v) => setValue(v),
  };
};
export default useInput;
