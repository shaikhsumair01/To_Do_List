import { useState, useRef } from 'react'
import Header from './Header'
import ToDoList from './ToDoList'


// App function
function App() {
  // using useState to save the userInput in an array and render the current state
 const [tasks, setTask] = useState([]);

//  taking user input from the textbox through useRef
 const inputRef = useRef()


//  adding the todo task
  function addTask(e){
    e.preventDefault();

    // getting the text
   const inputText = inputRef.current.value.trim();

   if (inputText === " "){
    return; // if the text box is submitted without a value then return
   }

   // saving the input text (task) in an object along with an id for useState.
    const newtask = {
      id: Date.now(),
      text:inputText,
    }

    // updating the task for rerender
    setTask((prev)=>[...prev, newtask]);
    // resetting the input
    inputRef.current.value="";
    
  }

  // rendering the body of the app
 return(
  // container class content
  <div className='content'>
  <Header/>
  {/* form */}
  <form className='form-input'>
    <input ref={inputRef} name="task" type="text" className="form-text" placeholder='Add a Task'></input>
    <button className='submit-btn' onClick={addTask}><i className="fa-solid fa-arrow-right icon"></i></button>
  </form>

  {/* if the task array is empty then it won't render anything else it will call the todolist */}
  {(tasks.length===0)?<></>:<ToDoList tasks = {tasks}/>}
  </div>
 )
}

export default App
