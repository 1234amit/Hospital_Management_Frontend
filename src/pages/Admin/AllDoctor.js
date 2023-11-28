import React, { useEffect, useState } from 'react'
import AdminMenu from './AdminMenu'
import { toast } from 'react-toastify';
import axios from 'axios';

const AllDoctor = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    
    const getAllDoctors = async() =>{
        try{
            setLoading(true);
            const{data} = await axios.get("http://localhost:8080/api/v1/user/view-doctor");
            setUsers(data);

        }catch(error){
            console.log("Api Error:", error);
            toast.error("Something went wrong");
        }finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        getAllDoctors();
    }, []);

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
                  <div className="w-full rounded px-8 py-6">
                        <h2 className="text-2xl font-semibold mb-6 text-center">View All Doctor</h2>
                        <div class="overflow-x-auto">
                            {
                                loading ? (
                                    <p>Loading</p>
                                ):(
                                    <table class="w-full">
                                        <thead>
                                            <tr>
                                                <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                                <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 font-medium text-gray-500 uppercase tracking-wider">Email</th>
                                                <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                                                <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 font-medium text-gray-500 uppercase tracking-wider">Address</th>
                                                <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 font-medium text-gray-500 uppercase tracking-wider">City</th>
                                                <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 font-medium text-gray-500 uppercase tracking-wider">Country</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                users?.map((user)=>(
                                                    <>
                                                        <tr key={user._id}>
                                                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-300">{user.name}</td>
                                                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-300">{user.email}</td>
                                                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-300">{user.phone}</td>
                                                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-300">{user.address}</td>
                                                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-300">{user.city}</td>
                                                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-300">{user.country}</td>
                                                        </tr>
                                                    </>
                                                ))
                                            }
                                            
                                        </tbody>
                                    </table>
                                )
                            }
                            
                            </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
        </section>
    </div>
  )
}

export default AllDoctor