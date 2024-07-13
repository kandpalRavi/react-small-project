import { useRef } from "react";

function FocusInput (){
     const ref = useRef(null);
     const handleChange= ()=>{
        console.log(ref)
        ref.current.focus();
     }
    return (
        <div>
            <input ref = {ref}/>
            <button onClick ={handleChange}>Focus</button>
        </div>
    )
}
export default FocusInput;