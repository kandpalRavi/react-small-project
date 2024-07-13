import { useState } from "react";
import Counter from "./Counter";

function AllItem(){
    
  const [amount,setAmount] = useState(0);
  const total =(price)=>{
  setAmount(amount+Number(price));
}
return(
<div className="App">
  <Counter item={"Noodle"} price ={"30"} total={total}/>
  <Counter item={"Briyani"} price={"90"} total={total}/>
  <Counter item={"Chips"} price={"10"} total={total}/>
  <h1>Totsl:${amount}</h1>
</div>
)
}