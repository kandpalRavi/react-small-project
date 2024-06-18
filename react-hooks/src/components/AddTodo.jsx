import { useState } from "react";

function AddTodo({handleAddTodo}){

    const [text,setText] =useState("");

    const handleChange = (e)=>{
        setText(e.target.value);
    };

    const onClick =()=>{
        handleAddTodo(text);
        setText("");
    };

    return(
        <div>
            <input onChange={handleChange} value={text} placeholder="Add Todo" />
            <button onClick={onClick}> Add</button>
        </div>
    );
}

export default AddTodo;