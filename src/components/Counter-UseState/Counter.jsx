import { useState } from "react";
import { ButtonApp, ButtonReset } from "./";
/* import { ButtonReset } from "./ButtonReset"; */
import "./Buttons.css";
import "./Counter.css";

export const Counter = ({ initialValue = 0 }) => {
  //console.log("Counter App");
  const [number, setNumber] = useState(initialValue);

  const increaseCounter = () => {
    let incrementValue = 1;
    if (number >= 10) incrementValue = 5;
    setNumber(number + incrementValue);
  };

  const decreaseCounter = () => {
    setNumber(number - 1);
  };

  const resetCounter = () => {
    setNumber(initialValue);
  };

  return (
    <>
      <h2>Counter</h2>
      <div className="counter-container">
        <p className="counter"> {number}</p>
      </div>
      <div className="counter-container buttons-container">
      <ButtonApp className="button-clic button-counter" onClick={increaseCounter}>+</ButtonApp>
      <ButtonApp className="button-clic button-counter" onClick={decreaseCounter}>-</ButtonApp>
      <ButtonApp className="button-reset button-counter" onClick={resetCounter}>Reset</ButtonApp>
      {/* <ButtonReset fncOnClick={setNumber} initialValue={50}>
        Reset at 50
      </ButtonReset> */}
      </div>

      {/* <button onClick={increaseCounter}  >+</button>         */}
      {/* decrease */}
      {/* <button onClick={decreaseCounter}  >-</button>         */}
      {/* reset */}
      {/* <button onClick={resetCounter}  > Reset</button> */}
    </>
  );
};
