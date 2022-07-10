import React from 'react'

export default function Header({ handleToggleDarkMode }) {
    

    const handleToggle = () =>{
        handleToggleDarkMode((previousDarkMode) =>!previousDarkMode)
    }
    return (
    <div className="header">
        <h1>Notes</h1>
        <button 
            className='save'
            onClick={handleToggle}>Toggle Mode</button>
    </div>
  )
}
