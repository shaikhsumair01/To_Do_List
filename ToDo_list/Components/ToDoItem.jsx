export default function ToDoItem(Props){
    // structuring the task item (checkbox for marking the list, task content, delete and update button)
    return(<>
    {/* list item */}
    <li className="task">

    <input type="radio" className="check"></input>

     <p className="task-para"> {Props.text}</p>  

     <div className="btn-div">
    
    <button className="edit-btn"><i className="fa-solid fa-pen-to-square icon-btn icon-edit"></i></button>
    
    <button className="delete-btn"><i className="fa-solid fa-trash icon-btn icon-del"></i></button>
     
     </div>
  
    </li>
    </>)
}