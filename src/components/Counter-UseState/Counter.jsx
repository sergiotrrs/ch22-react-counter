import { useState } from "react";
import { ButtonApp, ButtonReset } from "./";
/* import { ButtonReset } from "./ButtonReset"; */

export const Counter = ( {initialValue = 0} ) => {
 //console.log("Counter App");
 const [number, setNumber] = useState( initialValue );

 const increaseCounter = () =>{
    let incrementValue = 1;
    if( number >= 10) incrementValue = 5 
    setNumber( number + incrementValue );    
 }
 
 const decreaseCounter = () =>{
    setNumber( number -1 );    
 }
 
 const resetCounter = () =>{
    setNumber( initialValue );    
 }

  return (
    <>
        <h2>Counter</h2>
        <h2> {number}</h2>        
        <ButtonApp onClick={increaseCounter}>+</ButtonApp>
        <ButtonApp onClick={decreaseCounter}>-</ButtonApp>
        <ButtonApp onClick={resetCounter}>Reset</ButtonApp>
        <ButtonReset fncOnClick={ setNumber } initialValue={50} >Reset at 50</ButtonReset>

        {/* <button onClick={increaseCounter}  >+</button>         */}
        {/* decrease */}
        {/* <button onClick={decreaseCounter}  >-</button>         */}
        {/* reset */}
        {/* <button onClick={resetCounter}  > Reset</button> */}

    </>
  )
}
