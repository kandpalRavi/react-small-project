import { useEffect, useRef, useState } from "react"
const fixTime = (time)=>(time <10? `0`+time:time);
const formetTime = (totalSec) =>{
    const hour = Math.floor(totalSec/3600);
    const min = Math.floor(totalSec/60) %60;
    const sec = totalSec%60;
    return `${fixTime(hour)}:${fixTime(min)}:${fixTime(sec)}`;
}

export function CountTimer(){
    const [time,setTime] = useState(0);
    const ref = useRef(null);
    const startTimer = ()=>{
        if(ref.current!==null) return;
        ref.current = setInterval(()=>{
            setTime((time)=>time+1);
        },1000);
    }

    const stopTimer = ()=>{
        clearTimeout(ref.current);
        ref.current =null;
    }
    const resetTimer = ()=>{
        stopTimer();
        setTime(0);
    }

    useEffect(()=>{
        return ()=>{
            clearInterval(ref.current)
        }
    },[])
    return (
        <div>
            <h1>Timer</h1>
            <h2>{formetTime(time)}</h2>
            <button onClick={startTimer}>Start</button>
            <button onClick={stopTimer}>Stop</button>
            <button onClick={resetTimer}>Reset</button>
        </div>
    )
}
