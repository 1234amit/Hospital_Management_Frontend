import React from 'react'
import { Link } from 'react-router-dom'

const Footermain = () => {
  return (
    <div className='mt-16'>
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-4 md:mb-0">
                    <h2 className="text-2xl font-semibold">Hospital Management System</h2>
                    <p className="mt-2">Streamlining Healthcare Services</p>
                </div>
                <div className="flex items-center">
                    <ul className="flex space-x-4">
                    <li><Link to="#" className="hover:text-gray-300">Home</Link></li>
                    <li><Link to="#" className="hover:text-gray-300">Services</Link></li>
                    <li><Link to="#" className="hover:text-gray-300">About Us</Link></li>
                    <li><Link to="#" className="hover:text-gray-300">Contact</Link></li>
                    </ul>
                </div>
                </div>
                <div className="border-t border-gray-700 mt-4 pt-4 text-sm text-gray-500 text-center">
                <p>&copy; {new Date().getFullYear()} Hospital Management System. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footermain