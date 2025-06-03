import { useState, useRef , useEffect} from 'react'
import Header from './Header'
import ToDoList from './ToDoList'


// App function
function App() {
  /* using useState to save the userInput in an array(tasks) and render the current state. 
    We have stored the tasks as todos in the localStorage 
    and will fetch it when the value exists in order to render it each time the page loads */
 const [tasks, setTask] = useState(localStorage.getItem("todos")?JSON.parse(localStorage.getItem("todos")):[]);

//  taking user input from the textbox through useRef
 const inputRef = useRef()


//  adding the todo task
  function addTask(e){
    e.preventDefault();

    // getting the text from useRef
   const inputText = inputRef.current.value.trim();

   if (inputText === " "){
    return; // if the text box is submitted without a value then return
   }

   /* saving the input text (task) in an object along with a key for useState, 
    the id for the item which is stored, checking if the task is completed or not (for markdown)
    and if the edit mode is on or off.*/
    const newtask = {
      key:Date.now()*2,
      id: Date.now(),
      text:inputText,
      completed: false,
      editing:false,
    }

    // updating the task for rerender
    setTask((prev)=>[...prev, newtask]);
    // resetting the input
    inputRef.current.value="";
    
  }
  // deleting items from the todo
function deleteTask(id){
  // sets the useState (setTask function) such that the id on which the button is clicked will not be printed
  setTask((prev)=>{
   return prev.filter((todo)=> todo.id!==id)
  })
}
// used for adding marked style to the list. (sets the todo as completed if the id matches)
function toggleClass(id){
  setTask((prev)=>{
    return prev.map((todo)=>{ 
      if(todo.id==id){
        return{...todo, completed: !todo.completed}
    }
    return todo;
  })
  })
}
/*checks for the todo where the click event occurs. 
If found then it sets the editing to true (inverts the condition), else returns the todo
*/
function editTask(id){
  setTask((prev)=>{
    return prev.map((todo)=>{
      if(todo.id==id){
        return{...todo , editing: !todo.editing}
      }
      else{
        return todo;
      }
    })
  })
}
// when found, it uses the useState to set the task with the new input entered by the user
function updateTask(id, newText) {
    setTask(prev => prev.map(todo => todo.id === id ? { ...todo, text: newText } : todo));
}

// saving the lists in the local storage
useEffect(()=>{
  localStorage.setItem("todos",JSON.stringify(tasks));
},[tasks])
  // rendering the body of the app
 return(
  // container class content
  <div className='content'>
  <Header/>
  {/* form */}
  <form className='form-input'>
    <input ref={inputRef} name="task" type="text" className="form-text" placeholder='What is the task today?'></input>
    <button className='submit-btn' onClick={addTask}><i className="fa-solid fa-arrow-right icon"></i></button>
  </form>

  {/* if the task array is empty then it won't render anything else it will call the todolist */}
  {(tasks.length===0)?<></>:<ToDoList tasks ={tasks} toggleClass={toggleClass} editTask={editTask} deleteTask={deleteTask} updateTask={updateTask}/>}
  </div>
 )
}

export default App
