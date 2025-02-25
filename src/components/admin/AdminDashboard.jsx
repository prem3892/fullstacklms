import React from 'react'
import AdminSidebar from './AdminSidebar'
import AdminTable from './AdminTable'
import ShowTotals from './ShowTotals'

function AdminDashboard() {
  return (
    <div className='m-2 bg-red-950'>
        <ShowTotals />
      <div className='flex  gap-2'>
      <AdminSidebar />

      <AdminTable />
      </div> 
    </div>
  )
}

export default AdminDashboard;
