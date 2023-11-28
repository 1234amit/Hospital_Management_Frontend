import React, { useState } from 'react'
import AdminMenu from './AdminMenu'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { toast } from 'react-toastify';

const AddDoctor = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    // const [answer, setAnswer] = useState("");
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [department, setDepartment] = useState("");
    const [valid, setValid] = useState(true);
    const [role, setRole] = useState(0);

    const navigate = useNavigate();


    // phone number validation
    // const validatePhoneNumber = (phone) => {
    //     const phoneNumberPattern = /^\+?[1-9]\d{1,14}$/;

    //     return phoneNumberPattern.test(phone);
    // };

    // const handleChange = (value) => {
    //     setPhone(value);
    //     setValid(validatePhoneNumber(value));
    // };

    // form function
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:8080/api/v1/user/register", {
                name,
                email,
                password,
                phone,
                address,
                // answer,
                country,
                city,
                department,
                role
            });
            if (res && res.data.success) {
                toast.success(res.data && res.data.message);
                // setTimeout(() => {
                //   toast.success(res.data && res.data.message);
                // }, 0);
                navigate("/");
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    };
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
                  <div className="max-w-md w-full bg-white shadow-md rounded px-8 py-6">
                        <h2 className="text-2xl font-semibold mb-6 text-center">Add Doctor</h2>
                        <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 gap-4">
                            <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder='Name'
                            required
                            />
                            <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            required
                            />
                            <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            />
                            <textarea
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="address"
                            placeholder="Address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            required
                            ></textarea>
                            <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            name="city"
                            placeholder="City"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            required
                            />
                            <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            name="country"
                            placeholder="Country"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            required
                            />
                            <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="number"
                            name="role"
                            placeholder="Role (0 for default)"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            required
                            />
                            <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="tel"
                            name="phone"
                            placeholder="Phone"
                            value={phone}
                            onChange={(e)=> setPhone(e.target.value)}
                            required
                            />

                            <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="tel"
                            name="department"
                            placeholder="Department"
                            value={department}
                            onChange={(e)=> setDepartment(e.target.value)}
                            required
                            />
                        
                            <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                            >
                            Add Doctor
                            </button>
                        </div>
                        </form>

                        
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </section>
    </div>
  )
}

export default AddDoctor