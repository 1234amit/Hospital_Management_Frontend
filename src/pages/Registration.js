import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios'

const Registration = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    // const [answer, setAnswer] = useState("");
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [valid, setValid] = useState(true);

    const navigate = useNavigate();


    // phone number validation
    const validatePhoneNumber = (phone) => {
        const phoneNumberPattern = /^\+?[1-9]\d{1,14}$/;

        return phoneNumberPattern.test(phone);
    };

    const handleChange = (value) => {
        setPhone(value);
        setValid(validatePhoneNumber(value));
    };

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
            });
            if (res && res.data.success) {
                toast.success(res.data && res.data.message);
                // setTimeout(() => {
                //   toast.success(res.data && res.data.message);
                // }, 0);
                navigate("/login");
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    };

    // name, email, password, address, city, country, phone, answer

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white shadow-md rounded px-8 py-6 mt-72">
        <h2 className="text-2xl font-semibold mb-6 text-center">Register Here</h2>
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
              type="tel"
              name="phone"
              placeholder="Phone"
              value={phone}
              onChange={(e)=> setPhone(e.target.value)}
              required
            />
            {!valid && <p>Please enter a valid 10-digit phone number.</p>}
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Register
            </button>
          </div>
        </form>

        <div className="mt-3">
            <p className="text-sm">
                Don't Have an Account?{' '}
                <NavLink
                to="/login"
                className="text-blue-500 hover:text-blue-700 underline"
                >
                Login Here
                </NavLink>
            </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
