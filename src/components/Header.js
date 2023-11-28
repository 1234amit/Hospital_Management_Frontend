import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/auth';
import { ToastContainer, toast } from 'react-toastify';

const Header = () => {
    const [auth, setAuth] = useAuth();
    const navigate = useNavigate();

    // const handleLogout = async () => {
    //     try {
    //       const response = await fetch('http://localhost:8080/api/v1/user/logout', {
    //         method: 'GET', // Use GET method for logout
    //         headers: {
    //             Authorization: `Bearer ${token}`, // Include the token in the authorization header
    //         },
        
    //       });
      
    //       if (response.ok) {
    //         // Handle successful logout
    //         console.log('User logged out successfully');
    //         // Perform any other necessary actions after logout
    //       } else {
    //         // Handle error response from the API
    //         console.error('Logout failed:', response.statusText);
    //       }
    //     } catch (error) {
    //       // Handle network errors or other exceptions
    //       console.error('Error during logout:', error.message);
    //     }
    //   };
    
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleToggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };
    
    const closeDropdown = () => {
        setDropdownOpen(false);
    };

    const handleLogout = () =>{
        console.log("logout button prassed")
        setAuth({
            ...auth,
            user: null,
            token: "",
        });
        localStorage.removeItem("auth");
        // toast.success("Logout Successfully");
        setTimeout(() => {
            toast.success("Logout Successfully");
            navigate("/login");
        }, 0);
    }

    const handleDashboardClick = () => {
        console.log("click dashboard")
        // navigate(`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"}`);
        if (auth?.user?.role === 1) {
            // Admin role, navigate to the admin dashboard
            navigate("/dashboard/admin");
        } else if (auth?.user?.role === 0) {
            // User role, navigate to the user dashboard with the userId parameter
            navigate(`/dashboard/user/${auth?.user?._id}`);
        }
    };

    return (
        <div>
            <header>
                <div className="bg-lightBlue">
                    <div className="container mx-auto">
                        <div className="px-2 flex justify-between">
                            <div className="flex items-center">
                                <div className="">
                                    <p className=" text-lg   text-white mt-1 md:mt-2 mr-2"><iconify-icon
                                            icon="ri:mail-fill"></iconify-icon>
                                    </p>
                                </div>
                                <div className="">
                                    <p className="text-white text-xs md:text-base font-normal font-lato">contact@hospitalManagement.com
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="">
                                    <p className=" text-lg  text-white mt-1 mr-2"><iconify-icon
                                            icon="ic:baseline-local-phone"></iconify-icon>
                                    </p>
                                </div>
                                <div className="">
                                    <p className="text-white text-xs md:text-base font-normal font-lato">+8801723423423
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* <!-- ==========================Nav-start================== --> */}
            <nav>
                <div className="bg-hero bg-cover bg-center  py-4 hero  lg:px-0">
                    <div className="nav_black" id="myHeader">
                        <div className="container mx-auto">
                            <div className="grid grid-cols-12 items-center menu_area ">
                                <div className="col-span-12 lg:col-span-4">
                                    <div className=" flex justify-between">
                                        <div className="text-center">
                                            <Link to="https://somerianhealth.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 font-bold text-2xl">
                                            Logo
                                            </Link>
                                        </div>
                                        <div className=" lg:hidden dropdown_toggle">
                                            <button className=" text-3xl text-white "><iconify-icon
                                                    icon="material-symbols:menu-rounded"></iconify-icon></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-12 lg:col-span-8  ">
                                    <ul className=" lg:flex lg:justify-between hidden dropdown mobile_menu">
                                        <li><Link className=" lg:text-lg  text-white  font-lato font-medium hover:text-highRed py-2 lg:py-0 "
                                                to="/">Home</Link>
                                        </li>
                                        <li><Link className=" lg:text-lg  text-white   font-lato font-medium hover:text-highRed py-2 lg:py-0 "
                                                to="/about">About
                                                Us</Link>
                                        </li>
                                        <li><Link className=" lg:text-lg  text-white   font-lato font-medium hover:text-highRed py-2 lg:py-0"
                                                to="services.html">Services</Link>
                                        </li>
                                        <li><Link className=" lg:text-lg  text-white   font-lato font-medium hover:text-highRed py-2 lg:py-0"
                                                to="doctor.html">Doctors</Link>
                                        </li>
                                        <li><Link className=" lg:text-lg  text-white   font-lato font-medium hover:text-highRed py-2 lg:py-0 "
                                                id="patnar" to="careers.html">Careers</Link>
                                        </li>
                                        <li><Link className=" lg:text-lg  text-white   font-lato font-medium hover:text-highRed py-2 lg:py-0"
                                                to="contact.html">Contact
                                                Us</Link></li>

                                        {
                                            !auth.user ? (
                                                <>
                                                    <li><Link className=" lg:text-lg  text-white   font-lato font-medium hover:text-highRed py-2 lg:py-0" to="/login">Login</Link></li>

                                                    <li><Link className=" lg:text-lg  text-white   font-lato font-medium hover:text-highRed py-2 lg:py-0" to="/registration">Registration</Link></li>
                                                </>
                                            ):(
                                                <>
                                                    
                                                    <div className="relative">
                                                        <button
                                                            onClick={() => setDropdownOpen(prevState => !prevState)}
                                                            className="lg:text-lg text-white font-lato font-medium hover:text-highRed py-2 lg:py-0"
                                                        >
                                                            {auth?.user?.name}
                                                        </button>

                                                        {/* Dropdown content */}
                                                        <div
                                                            onClick={closeDropdown}
                                                            className={`absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg py-2 z-10 ${dropdownOpen ? '' : 'hidden'}`}
                                                        >
                                                            {/* Dropdown items */}
                                                            <Link
                                                                onClick={closeDropdown} // Close dropdown when Dashboard is clicked
                                                                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                                                                to={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"}`}
                                                            >
                                                                Dashboard
                                                            </Link>
                                                            <Link
                                                                onClick={(e) => {
                                                                    e.stopPropagation(); // Prevent closing dropdown
                                                                }}
                                                                to="/appointment"
                                                                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                                                            >
                                                                Appointment
                                                            </Link>
                                                            <button
                                                                onClick={(e) => {
                                                                    e.stopPropagation(); // Prevent closing dropdown
                                                                    handleLogout();
                                                                }}
                                                                className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
                                                            >
                                                                Logout
                                                            </button>
                                                            {/* Add other dropdown items as needed */}
                                                        </div>
                                                    </div>

                                                </>
                                            )
                                        }
                                        
                                        

                                        <div className="search">
                                            <div className=" flex justify-end lg:justify-start">
                                                <div
                                                    className=" bg-highRed w-10 h-10 flex justify-center items-center rounded-full py-2 lg:py-0">
                                                    <button className="px-6  py-3 text-white text-2xl mt-1 serch_btn"><iconify-icon
                                                            icon="material-symbols:search-rounded"></iconify-icon>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className=" search_input search_field hidden">
                                                <form action="">
                                                    <div className=" flex items-center">
                                                        <div className="">
                                                            <input
                                                                className=" py-2 px-2  bg-highBlue text-white border border-white rounded focus:outline-none  serach_box"
                                                                type="text" placeholder="Search Hear" />
                                                        </div>
                                                        <div className=" ml-2">
                                                            <button
                                                                className=" bg-highRed py-2 px-3 text-white font-lato  border border-highRed rounded">Serach</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* <div className="container mx-auto">
                        <div className="mt-5  lg:mt-40">
                            <h2
                                className=" font-lato text-2xl text-white lg:text-6xl   md:text-4xl text-center lg:text-left  font-bold">
                                We
                                Provide an</h2>
                            <h2
                                className=" font-lato text-2xl text-highRed lg:text-6xl   md:text-4xl text-center lg:text-left  font-bold">
                                Excellence Care
                                Experience
                            </h2>
                            <h2
                                className=" font-lato text-2xl text-white lg:text-6xl   md:text-4xl text-center lg:text-left  font-bold">
                                With
                                State of Art
                                Technology
                            </h2>
                        </div>
                    </div> */}
                    {/* <!-- =========Hero-card start=============== --> */}
                    {/* <section>
                        <div className=" lg:mt-32 lg:mb-m130">
                            <div className="container mx-auto py-4 md:py-10 lg:py-0  ">
                                <div className="px-3">
                                    <div className=" lg:grid lg:grid-cols-3  ">
                                        <div
                                            className="bg-white  shadow-lg py-10 px-8 rounded-lg lg:rounded-none  border border-ash_dark lg:border-none mb-3">
                                            <div className="flex-none md:flex lg:flex">
                                                <div className="flex justify-center md:flex-none lg:flex-none">
                                                    <img className=" w-14  h-16" src={technologyImg} alt="Technology.png"/>
                                                </div>
                                                <div className="md:ml-8  lg:ml-8 ">
                                                    <h2
                                                        className=" text-lg md:text-2xl  lg:text-2xl font-lato  font-semibold text-highBlue mb-2 text-center md:text-left">
                                                        Core Team</h2>
                                                    <p
                                                        className=" text-base text-center  md:text-justify lg:text-justify  font-lato  font-medium   text-lightAsh leading-4">
                                                        The core leadership team of Somerian Health comprises renowned industry
                                                        veterans, respected medical professionals,
                                                        honourable doctors, and important dignitaries of society. We also
                                                        consult various government officials to seek their
                                                        guidance and assistance..
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="bg-highRed  shadow-lg py-10 px-8 rounded-lg lg:rounded-none  border border-ash_dark lg:border-none mb-3">
                                            <div className=" flex-none md:flex lg:flex">
                                                <div className="flex justify-center md:flex-none lg:flex-none">
                                                    <img className=" w-14  h-16" src={doctorImg} alt="doctor.png" />
                                                </div>

                                                <div className="md:ml-8 lg:ml-8 ">
                                                    <h2
                                                        className=" text-lg md:text-2xl  lg:text-2xl font-lato  font-semibold text-white text-center md:text-left mb-2 ">
                                                        Rapid Response Team For Controlling The Pandemic
                                                    </h2>
                                                    <p
                                                        className="text-center  md:text-justify lg:text-justifyfont-lato font-medium  text-white leading-4">
                                                        We worked hand in hand with the federal government to create a rapid
                                                        recovery and non-covid secure environment.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="bg-white  shadow-lg py-10 px-8 rounded-lg lg:rounded-none  border border-ash_dark lg:border-none mb-3">
                                            <div className=" flex-none md:flex lg:flex">
                                                <div className="flex justify-center md:flex-none lg:flex-none">
                                                    <img className=" w-20 h-20" src={tetiscopImg} alt="Tetiscop.png" />
                                                </div>
                                                <div className="md:ml-8 lg:ml-8">
                                                    <h2
                                                        className="text-lg md:text-2xl  lg:text-2xl font-lato  font-semibold text-highBlue mb-2 text-center md:text-left leading-none">
                                                        Corporate Responsibility
                                                    </h2>
                                                    <p
                                                        className=" text-base text-center  md:text-justify lg:text-justify font-lato font-normal   text-lightAsh leading-4">
                                                        To protect the health and safety of the community, proactive testing
                                                        teams continue their efforts.
                                                        Somerian health is proud to celebrate Life by thanking our Doctors and
                                                        Nurses for their devotion to the health care and
                                                        wellness of our community.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section> */}
                    {/* <!-- =========Hero-card End=============== --> */}
                </div>
            </nav>
            {/* <!-- ==========================Nav-End================== --> */}
        </div>
    )
}

export default Header