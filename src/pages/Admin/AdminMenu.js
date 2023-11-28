import React from 'react'
import { NavLink } from 'react-router-dom'

const AdminMenu = () => {
  return (
    <div>
        <div className="text-center py-3">
            <div className="m-3 rounded-lg bg-white border border-gray-300">
                <h4 className="text-cyan-500 text-lg font-semibold p-3">Admin Panel</h4>
                <NavLink to="/dashboard/admin/add-doctor" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    Add Doctor
                </NavLink>

                <NavLink to="/dashboard/admin/view-doctor" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    All Doctor
                </NavLink>
            </div>
        </div>

    </div>
  )
}

export default AdminMenu