export default function ToDoItem({id, text, completed ,edited , editTask, toggleClass, deleteTask}){
    // function for marking down the todo list
    
    
   
    // structuring the task item (checkbox for marking the list, task content, delete and update button)
    return(
    <>
    {/* list item */}
    <li className="task">

    <i onClick={()=>toggleClass(id)} className={` ${completed?'fa-solid fa-circle-check':'fa-regular fa-circle'} icon-check`}></i>

     <p onClick={()=>toggleClass(id)} className={`${completed?'completed':""} task-para`}> {text}</p>  

     <div className="btn-div">
    
    <button className="edit-btn" onClick={()=>{editTask(id)}}><i className="fa-solid fa-pen-to-square icon-btn icon-edit"></i></button>
    
    <button className="delete-btn" onClick={()=>{deleteTask(id)}}><i className="fa-solid fa-trash icon-btn icon-del"></i></button>
     
     </div>
  
    </li>
    </>)
}