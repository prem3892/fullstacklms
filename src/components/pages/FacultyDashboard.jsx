import React from 'react'
import Sidebar from '../Sidebar'
import Course from '../Course'

function FacultyDashboard() {
  return (
    <div className='flex bg-slate-900 text-white justify-between p-4'>
      <div className="sidebar w-[250px] h-[420px] shadow shadow-white">

        <Sidebar />
      </div>

<div className='course  w-full flex justify-between p-2 flex-wrap gap-2'>
        <Course />
        <Course />
        <Course />
        <Course />
        <Course />
</div>
    </div>
  )
}

export default FacultyDashboard