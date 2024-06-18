import { useState } from "react";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";

function Todo(){
    const [todos,setTodo] = useState([]);
     
    const handleAddTodo = (text) =>{
        const newItem ={
            title : text,
            status :false,
            id : new Date().toDateString + text
        };
        setTodo([...todos,newItem]);
    }
    return (
        <div>
            <AddTodo handleAddTodo={handleAddTodo}/>
            <ul>
                {todos.map((item) =>{
                    return <TodoItem title={item.title} status={item.status}/>
                })}
            </ul>
        </div>
    );
}

export default Todo;