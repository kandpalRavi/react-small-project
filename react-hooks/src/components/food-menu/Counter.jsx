import React from "react";
import {useState} from "react";
import style from "./counter.module.css";

// console.log(style);
export default function Counter ({item,price,total}){
    // const {item,price}={param};
    const [count,setCount] = useState(0);
    const addCount =(value) =>{
      setCount(count+value)
      total(price);
    }
    const reduceCount = (value)=>{
      setCount(count-value);
      total(-price);
    }
    return (
      <div className={style.contener}>
        <h2>{item}</h2>
        <h2>{price}</h2>
        <button onClick ={() => addCount(1)}>+</button>
        <h1>{count}</h1>
        <button disabled ={count ===0} onClick={ () => reduceCount(1)} >-</button>
      </div>
    );
}
