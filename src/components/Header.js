import React from 'react'
import { Link } from 'react-router-dom'
import whiteLogo from '../assets/img/white_logo.png';
import technologyImg from '../assets/img/Technology.png';
import doctorImg from '../assets/img/doctor.png';
import tetiscopImg from '../assets/img/Tetiscop.png';

const Header = () => {
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
                                <p className="text-white text-xs md:text-base font-normal font-lato">contact@somerianhealth.com
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
                                <p className="text-white text-xs md:text-base font-normal font-lato">+971 24 090 555
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </header>

        {/* <!-- ==========================Nav-start================== --> */}
        <nav>
            <div className="bg-hero bg-cover bg-center  py-4 lg:pb-10 hero  lg:px-0">
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
                                    <li><a className=" lg:text-lg  text-white  font-lato font-medium hover:text-highRed py-2 lg:py-0 "
                                            href="index.html">Home</a>
                                    </li>
                                    <li><a className=" lg:text-lg  text-white   font-lato font-medium hover:text-highRed py-2 lg:py-0 "
                                            href="aboutUs.html">About
                                            Us</a>
                                    </li>
                                    <li><a className=" lg:text-lg  text-white   font-lato font-medium hover:text-highRed py-2 lg:py-0"
                                            href="services.html">Services</a>
                                    </li>
                                    <li><a className=" lg:text-lg  text-white   font-lato font-medium hover:text-highRed py-2 lg:py-0"
                                            href="doctor.html">Doctors</a>
                                    </li>
                                    <li><a className=" lg:text-lg  text-white   font-lato font-medium hover:text-highRed py-2 lg:py-0 "
                                            id="patnar" href="careers.html">Careers</a>
                                    </li>
                                    <li><a className=" lg:text-lg  text-white   font-lato font-medium hover:text-highRed py-2 lg:py-0"
                                            href="contact.html">Contact
                                            Us</a></li>
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
                
                <div className="container mx-auto">
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
                    <div className="mt-5 md:mt-8 lg:mt-11">
                        <div className="lg:w-11/12 lg:mx-auto">
                            <div className="px-3">
                                <h2
                                    className="font-lato font-semibold text-white bg-lightRed inline-block rounded-t-xl py-2 px-4  lg:py-5 lg:px-20 text-base">
                                    Make an Appoinment</h2>
                                <div className=" bg-white py-5 px-4 md:p-8 lg:p-12 rounded-xl rounded-tl-none">
                                    <div className=" ">
                                        <form action="">
                                            <div className="lg:grid lg:grid-cols-3 lg:gap-4 ">
                                                <div className="mb-2">
                                                    <input type="text"
                                                        className=" w-full bg-ash p-4 font-lato text-highBlue text-lg rounded-lg focus:outline-none placeholder:text-lightBlue placeholder:text-base placeholder:font-normal" placeholder="Name" />
                                                </div>
                                                <div className="mb-2">
                                                    <input
                                                        className=" w-full bg-ash p-4 font-lato  text-highBlue text-lg rounded-lg focus:outline-none placeholder:text-lightBlue placeholder:text-base placeholder:font-normal"
                                                        type="text" placeholder="Phone"
                                                        oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" />
                                                </div>
                                                <div className="mb-2">
                                                    <input
                                                        className=" w-full bg-ash p-4 font-lato text-base text-highBlue rounded-lg focus:outline-none placeholder:text-lightBlue placeholder:text-base placeholder:font-normal"
                                                        type="Emali" placeholder="Emali Address" />
                                                </div>
                                                <div className="mb-2">
                                                    <select className=" w-full bg-ash p-4  font-lato text-base text-highBlue 
                                                                    rounded-lg focus:outline-none">
                                                        <option selected value="">Sectect Department</option>
                                                        <option value="">Dermatologist</option>
                                                        <option value="">General Practitioner</option>
                                                        <option value="">Consultant Physician</option>
                                                        <option value="">Specialist Radiologist</option>

                                                    </select>
                                                </div>
                                                <div className="mb-2 ">
                                                    <select
                                                        className="w-full bg-ash p-4  font-lato  text-highBlue text-lg
                                                        rounded-lg focus:outline-none">
                                                        <option value="" selected>Select Doctor</option>
                                                        <option value="">Dr.Karrar Khalid</option>
                                                        <option value="">Dr.Zaki Aldin Al Shariff</option>
                                                        <option value="">Dr.Hameed Al Ansari</option>
                                                        <option value="">Dr.Annable Talisayon</option>

                                                    </select>
                                                </div>
                                                <div className="mb-3  ">
                                                    <input
                                                        className=" w-full bg-ash p-4 font-lato text-base text-highBlue 
                                                        rounded-lg focus:outline-none placeholder:text-lightBlue placeholder:text-base placeholder:font-normal textbox-n"
                                                        placeholder="Date" type="text"
                                                        onfocus="(this.type='date')" id="date" />
                                                </div>
                                                <div className=""></div>
                                                <div className="">
                                                    <button
                                                        className="font-lato font-semibold text-white bg-lightRed inline-block px-20 py-5  rounded w-full text-lg"
                                                        type="submit"> Book now</button>
                                                </div>
                                            </div>

                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- =========Hero-card start=============== --> */}
                <section>
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
                </section>
                {/* <!-- =========Hero-card End=============== --> */}
            </div>
        </nav>
        {/* <!-- ==========================Nav-End================== --> */}
    </div>
  )
}

export default Header