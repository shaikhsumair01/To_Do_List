import ToDoItem from "./ToDoItem";

// creating a unordered list and mapping through each task to render it in the list
export default function ToDoList(Props){
    return(
        <ul className="list">
            {
            
            Props.tasks.map((task,index)=> <ToDoItem key={task.id} text={task.text} />)}
          
        </ul>
    )
}