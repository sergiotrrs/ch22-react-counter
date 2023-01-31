import "./Buttons.css";
import "./Counter.css";

 export const ButtonApp = ( {children, onClick, className} ) => {
   return (
     <>
     <button className={className} onClick={ onClick } >{children}</button>
     </>
   )
 }
 