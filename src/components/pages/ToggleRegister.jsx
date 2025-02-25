import React, { useState } from 'react'
import FacultyRegister from '../FacultyRegister'
import StudentRegister from '../StudentRegister'

function ToggleRegister() {
  const [toggle, setToggle] =  useState(false);

  function facultyToggle(){
setToggle(false)
  }
  function studentToggle(){
setToggle(true)
  }

  return (
    <div className='bg-slate-950 m-1'>
      <button onClick={facultyToggle} className='btn btn-outline btn-secondary m-4' disabled={!toggle}>Faculty</button>
      <button onClick={studentToggle} className='btn btn-outline btn-secondary' disabled={toggle}>Student</button>

      {
        !toggle  ? <FacultyRegister /> :  <StudentRegister /> 
      }
    </div>
  )
}

export default ToggleRegister