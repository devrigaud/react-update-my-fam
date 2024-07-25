import React, { useState } from 'react'
import './App.scss'

function App() {
  const names = ["👨Ben", "👩Kath"]

  let [theNames, setTheNames] = useState(names)

  const newName = (e) => {
    const nameInput =  e.currentTarget.querySelector('#name')
    const newName =  e.currentTarget.querySelector('#name').value
    
    e.preventDefault()
    if(newName !== ""){
      setTheNames( theNames = [...theNames, ...[`👶${newName}`]] )
    }
    nameInput.value = ''
  }

  return (
    <div className="family">
      <h2>🏠<br />Update My Family</h2>

      <div className="members">
        {theNames.map((name, key) => {
          return (<p key={key} >{name}</p>)
        })}
      </div>

      <form onSubmit={newName}>
        <input type="text" name="name" id="name" placeholder='Add Name' />
        <button type="submit">Update Family🎉</button>
      </form>

    </div>
  );
} 

export default App;