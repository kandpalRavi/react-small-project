
import { useState } from 'react';
import './App.css';
// import Todo from './components/Todo';
import Counter from "./components/Counter";

function App(){

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

export default App;