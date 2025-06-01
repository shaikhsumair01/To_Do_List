export default function ToDoItem(Props){
    function check(e){
        const task = e.target.nextSibling; // this will get the curresponding task paragraph
        if(e.target.checked){
            task.classList.add("completed")
        }
        else{
            task.classList.remove("completed")
        }
    }
    function removelist(e){
        const targetList = e.target.parentNode.parentNode.parentNode;
        console.log(targetList)
        // e.target=icon-btn(font-awesome-icon) < parent: delete-btn < parent: btn-div < parent: list li (list item)
        targetList.remove()
    }

    // structuring the task item (checkbox for marking the list, task content, delete and update button)
    return(
    <>
    {/* list item */}
    <li className="task">

    <input type="checkbox" className="check" onClick={check}></input>

     <p className="task-para"> {Props.text}</p>  

     <div className="btn-div">
    
    <button className="edit-btn"><i className="fa-solid fa-pen-to-square icon-btn icon-edit"></i></button>
    
    <button className="delete-btn" onClick={removelist}><i className="fa-solid fa-trash icon-btn icon-del"></i></button>
     
     </div>
  
    </li>
    </>)
}