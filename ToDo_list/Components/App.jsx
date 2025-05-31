import { useState } from 'react'
import Header from './Header'



function App() {
 return(
  <div className='content'>
  <Header/>
  <form className='form-input'>
    <input type="text" className="form-text"></input>
    <button className='submit-btn'><i class="fa-solid fa-arrow-right icon"></i></button>
  </form>
  </div>
 )
}

export default App
