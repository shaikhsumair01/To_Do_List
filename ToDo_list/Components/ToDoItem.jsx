import { useState, useRef } from "react";
// The ToDoItem function renders the list Item
export default function ToDoItem({ id, text, completed, edited, editTask, toggleClass, deleteTask, updateTask }) {
    const [newText, setNewText] = useState(text);
    const editInputRef = useRef();
// If the edit button is clicked we call handleEdit function which will take the input text from the edit form and using useState will update the task at the given id.
    function handleEdit(e) {
        e.preventDefault();
        const updatedText = editInputRef.current.value.trim();

        if (updatedText) {
            updateTask(id, updatedText);  // Update task in the list
            editTask(id);  // Close edit mode
        }
    }

    return (
        <>
        {/* if edit mode is on then it will display the form else it will display the task */}
            {edited ? (
                <form className='form-input' onSubmit={handleEdit}>
                    <input ref={editInputRef} name="task" type="text" className="form-text" defaultValue={newText} onChange={(e) => setNewText(e.target.value)} />
                    {/* dynamically updates the textbox using the usestate */}
                    <button className='submit-btn' type="submit"><i className="fa-solid fa-arrow-right icon"></i></button>
                </form>
            ) : (
                <li className="task">
                    <i onClick={() => toggleClass(id)} className={` ${completed ? 'fa-solid fa-circle-check' : 'fa-regular fa-circle'} icon-check`}></i>
                    <p onClick={() => toggleClass(id)} className={`${completed ? 'completed' : ""} task-para`}>{text}</p>

                    <div className="btn-div">
                        <button className="edit-btn" onClick={() => editTask(id)}>
                            <i className="fa-solid fa-pen-to-square icon-btn icon-edit"></i>
                        </button>
                        <button className="delete-btn" onClick={() => deleteTask(id)}>
                            <i className="fa-solid fa-trash icon-btn icon-del"></i>
                        </button>
                    </div>
                </li>
            )}
        </>
    );
}