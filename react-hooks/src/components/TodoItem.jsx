

function TodoItem({title,status}){
    return(
        <li>
          {title} - {status ? "Done":"NotDone"}
        </li>
    )

}

export default TodoItem;