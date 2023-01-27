 
 export const ButtonReset = ( {children, fncOnClick, initialValue} ) => {
   return (
     <>
     <button onClick={  ()=> fncOnClick(initialValue)   } >{children}</button>
     </>
   )
 }
 