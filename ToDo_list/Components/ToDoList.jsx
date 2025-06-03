import ToDoItem from "./ToDoItem";

// creating a unordered list and mapping through each task to render it in the list. Even passing the functionalities as props
export default function ToDoList({tasks, toggleClass, editTask, deleteTask , updateTask}){
    return(
        <ul className="list">
            {
            tasks.map((task)=> <ToDoItem key={task.key} id={task.id} text={task.text} completed={task.completed} edited={task.editing} toggleClass={toggleClass} editTask={editTask} deleteTask = {deleteTask} updateTask={updateTask} />)
            }
          
        </ul>
    
    )
}