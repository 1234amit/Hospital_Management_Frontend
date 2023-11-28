import React from 'react'
import { Link } from 'react-router-dom'
import AdminMenu from './AdminMenu'
import { useAuth } from '../../context/auth'

const AdminDashboard = () => {
  const [auth] = useAuth();
  return (
    <div className='mt-52'>
      <section className=''>
            <div className='container mx-auto mt-3 p-3'>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                <div className="col-span-1 md:col-span-1 bg-white rounded-lg shadow-md p-3">
                  <AdminMenu />
                </div>
                <div className='col-span-1 md:col-span-2 flex justify-center items-center'>
                  <div className="bg-white rounded-lg shadow-md p-3 w-3/4">
                    <h3 className='text-center my-4 font-serif'>Admin Name : {auth?.user?.name}</h3>
                    <h3 className='text-center my-4 font-serif'>Admin Email : {auth?.user?.email}</h3>
                    <h3 className='text-center my-4 font-serif'>Admin Contact : {auth?.user?.phone}</h3>
                  </div>
                </div>
              </div>
            </div>
        </section>
    </div>
  )
}

export default AdminDashboard