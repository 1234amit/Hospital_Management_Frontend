import React from 'react'
import logo1 from '../assets/img/patner/logo-1.jpg';
import logo2 from '../assets/img/patner/logo-2.jpg';
import logo3 from '../assets/img/patner/logo-3.jpg';
import logo4 from '../assets/img/patner/logo-4.jpg';
import hospital2 from '../assets/img/hospital-2.jpg'
import { Link } from 'react-router-dom';
import about1 from '../assets/img/aboutImg.jpg';
import about2 from '../assets/img/sergary.jpg';
import vacsine1 from '../assets/img/vacsine.png';
import pcr1 from '../assets/img/pcr.png';
import deep1 from '../assets/img/deep.png';
import clipBoard from '../assets/img/clip-board.png';
import home1  from '../assets/img/home.png';
import servicesUnder from '../assets/img/services-under.png';
// import whiteLogo from '../assets/img/white_logo.png';
import technologyImg from '../assets/img/Technology.png';
import doctorImg from '../assets/img/doctor.png';
import tetiscopImg from '../assets/img/Tetiscop.png';

import vacsineDone from '../assets/img/vaccine_done.png';
import labretory  from '../assets/img/labretory.png';
import hospitalBed from '../assets/img/hospital_bed.png';
import staff  from '../assets/img/staff.png';
import centerHospital from '../assets/img/center_hospital.png';

const Home = () => {
  return (
    <div>
        
        {/* <!-- ===============counter-start============== --> */}
        <section className='mt-40'>
            <div class="back mt-6 lg:mt-20">
                <div class="container mx-auto px-3 py-6 md:py-10 lg:py-16">
                    <div class="lg:grid lg:grid-cols-5 lg:gap-5">
                        <div class="mb-3 lg:mb-0">
                            <div class=" flex justify-center">
                                <div class="">
                                    <div class="flex justify-center">
                                        <div
                                            class=" w-32 h-32 border-4 border-highRed rounded-full flex justify-center items-center">
                                            <img src={vacsineDone} alt="" />
                                        </div>
                                    </div>
                                    <h2 class="font-lato font-bold   text-highBlue text-xl text-center mt-2 "><span
                                            class="counter" data-count="5">0</span> Million
                                    </h2>
                                    <p class="font-lato font-bold   text-highBlue text-xl text-center">vaccinations Done
                                    </p>
                                </div>

                            </div>
                        </div>
                        <div class="mb-3 lg:mb-0">
                            <div class="flex justify-center">
                                <div
                                    class=" w-32 h-32 border-4 border-highRed rounded-full flex justify-center items-center">
                                    <img src={labretory} alt="" />
                                </div>
                            </div>
                            <h2 class="font-lato font-bold   text-highBlue text-xl text-center mt-2"><span class="counter"
                                    data-count="20">0</span> Million
                            </h2>
                            <p class="font-lato font-bold   text-highBlue text-xl text-center">Pcr Tests Administereds
                            </p>
                        </div>
                        <div class="mb-3 lg:mb-0">
                            <div class="flex justify-center">
                                <div
                                    class=" w-32 h-32 border-4 border-highRed rounded-full flex justify-center items-center">
                                    <img src={hospitalBed} alt="" />
                                </div>
                            </div>
                            <h2 class="font-lato font-bold   text-highBlue text-xl text-center mt-2"><span class="counter"
                                    data-count="5000">0</span> +
                            </h2>
                            <p class="font-lato font-bold   text-highBlue text-xl text-center">Medical Beds Deployed
                            </p>
                        </div>
                        <div class="mb-3 lg:mb-0">
                            <div class="flex justify-center">
                                <div
                                    class=" w-32 h-32 border-4 border-highRed rounded-full flex justify-center items-center">
                                    <img src={staff} alt="" />
                                </div>
                            </div>
                            <h2 class="font-lato font-bold   text-highBlue text-xl text-center mt-2"><span class="counter"
                                    data-count="2000">0</span> +
                            </h2>
                            <p class="font-lato font-bold   text-highBlue text-xl text-center">Medical Staffs
                            </p>
                        </div>
                        <div class="mb-3 lg:mb-0">
                            <div class="flex justify-center">
                                <div
                                    class=" w-32 h-32 border-4 border-highRed rounded-full flex justify-center items-center">
                                    <img src={centerHospital} alt="" />
                                </div>
                            </div>
                            <h2 class="font-lato font-bold   text-highBlue text-xl text-center mt-2"><span class="counter"
                                    data-count="84">0</span> Centers
                            </h2>
                            <p class="font-lato font-bold   text-highBlue text-xl text-center">Accross UAE
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    {/* <!-- ===============counter-End============== --> */}
    {/* <!-- ============facilities start==================== --> */}
        <section>
            <div class="back ">
                <div class="swiper mySwiper">
                    <div class="swiper-wrapper">

                        <div class="swiper-slide">
                            <div className="hospital py-6 px-3 lg:py-28" style={{ backgroundImage: 'url(../assets/img/dubai.jpeg)' }}>
                                <div class="container mx-auto">
                                    <div class="lg:grid lg:grid-cols-2 lg:gap-10">
                                        <div class="">
                                            <div class="">
                                                <div class="text_line">
                                                    <p class="text-base font-lato text-highRed font-normal lg:mb-4">Our
                                                        Facilities</p>
                                                </div>
                                                <h2
                                                    class="font-lato font-semibold  text-white text-xl md:text-3xl  lg:text-4xl md:text-center lg:text-left md:mb-3 ">
                                                    Hospital Management System
                                                </h2>

                                                <div class="">
                                                    <div
                                                        class="md:flex md:items-center md:justify-center lg:flex lg:justify-start lg:items-center">
                                                        <div class="flex items-center justify-center md:mr-5 lg:mr-14">
                                                            <div class="text-2xl md:text-3xl text-highRed mt-2 mr-2">
                                                                <iconify-icon icon="ic:sharp-call"></iconify-icon>
                                                            </div>
                                                            <div class="">
                                                                <p class=" text-base md:text-xl text-white font-lato">+8801723454323</p>
                                                            </div>
                                                        </div>

                                                        <div class="">
                                                            <ul class=" flex items-center justify-center">
                                                                <li><Link class=" text-white hover:text-highRed text-2xl lg:text-4xl mr-2"
                                                                        to='#'>
                                                                        <iconify-icon
                                                                            icon="entypo-social:facebook-with-circle"></iconify-icon>
                                                                    </Link></li>
                                                                <li><Link class=" text-white hover:text-highRed text-2xl lg:text-4xl mr-2"
                                                                        to='#'>
                                                                        <iconify-icon
                                                                            icon="ant-design:twitter-circle-filled"></iconify-icon>
                                                                    </Link></li>
                                                                <li><Link class=" text-white hover:text-highRed text-2xl lg:text-4xl mr-2"
                                                                        to='#'>
                                                                        <iconify-icon
                                                                            icon="entypo-social:instagram-with-circle"></iconify-icon>
                                                                    </Link></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    {/* <!-- ==========Checked========= --> */}
                                                    <div class="mt-6">
                                                        <p
                                                            class=" text-white font-lato  text-base lg:text-lg  leading-5 text-justify md:text-center lg:text-justify font-normal lg:font-medium ">
                                                            Headquartered In Abu Habi, Sumerian health - A subsidiary of
                                                            TAMOUH and the renowned IHC group of companies - takes
                                                            pride in being a leading force througout the pandemic by setting
                                                            up 84 Covid-care fild hospital ICUs and clinical
                                                            laboratories</p>
                                                    </div>
                                                    <div class=" mt-5 lg:mt-11 flex justify-center lg:justify-start">
                                                        <Link class=" font-lato text-lg font-semibold text-white  bg-highRed px-4 py-2 md:px-5 md:py-3 rounded-lg"
                                                            to="#">View
                                                            Details</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mt-10 lg:mt-0 h-72 md:h-300 lg:h-500">
                                            <img class=" rounded-md " src={hospital2} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class=" hospital py-6 px-3 lg:py-28"  style={{ backgroundImage: 'url("./img/dubai.jpeg")' }}>
                                <div class="container mx-auto">
                                    <div class="lg:grid lg:grid-cols-2 lg:gap-10">
                                        <div class="">
                                            <div class="">
                                                <div class="text_line">
                                                    <p class="text-base font-lato text-highRed font-normal lg:mb-4">Our
                                                        Facilities</p>
                                                </div>
                                                <h2
                                                    class="font-lato font-semibold  text-white text-xl md:text-3xl  lg:text-4xl md:text-center lg:text-left md:mb-3 ">
                                                    Emirates Field Hospital
                                                </h2>

                                                <div class="">
                                                    <div
                                                        class="md:flex md:items-center md:justify-center lg:flex lg:justify-start lg:items-center">
                                                        <div class="flex items-center justify-center md:mr-5 lg:mr-14">
                                                            <div class="text-2xl md:text-3xl text-highRed mt-2 mr-2">
                                                                <iconify-icon icon="ic:sharp-call"></iconify-icon>
                                                            </div>
                                                            <div class="">
                                                                <p class=" text-base md:text-xl text-white font-lato">+971
                                                                    58 58
                                                                    22 900</p>
                                                            </div>
                                                        </div>

                                                        <div class="">
                                                            <ul class=" flex items-center justify-center">
                                                                <li><Link class=" text-white hover:text-highRed text-2xl lg:text-4xl mr-2"
                                                                        to='#'>
                                                                        <iconify-icon
                                                                            icon="entypo-social:facebook-with-circle"></iconify-icon>
                                                                    </Link></li>
                                                                <li><Link class=" text-white hover:text-highRed text-2xl lg:text-4xl mr-2"
                                                                        to='#'>
                                                                        <iconify-icon
                                                                            icon="ant-design:twitter-circle-filled"></iconify-icon>
                                                                    </Link></li>
                                                                <li><Link class=" text-white hover:text-highRed text-2xl lg:text-4xl mr-2"
                                                                        to='#'>
                                                                        <iconify-icon
                                                                            icon="entypo-social:instagram-with-circle"></iconify-icon>
                                                                    </Link></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    {/* <!-- ==========Checked========= --> */}
                                                    <div class="mt-6">
                                                        <p
                                                            class=" text-white font-lato  text-base lg:text-lg  leading-5 text-justify md:text-center lg:text-justify font-normal lg:font-medium ">
                                                            Headquartered in Abu
                                                            Dhabi,
                                                            Somerian
                                                            Health — a subsidiary of TAMOUH
                                                            and the renowned IHC group of companies — takes pride in being a
                                                            leading
                                                            force throughout the pandemic by setting up 84 Covid-care field
                                                            hospitals,
                                                            ICUs and clinical laboratories.</p>
                                                    </div>
                                                    <div class=" mt-5 lg:mt-11 flex justify-center lg:justify-start">
                                                        <Link class=" font-lato text-lg font-semibold text-white  bg-highRed px-4 py-2 md:px-5 md:py-3 rounded-lg"
                                                            to="#">View
                                                            Details</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mt-10 lg:mt-0 h-72 md:h-300 lg:h-500">
                                            <img class=" rounded-md " src="./img/hospital-03.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class=" hospital py-6 px-3 lg:py-28"  style={{ backgroundImage: 'url("./img/dubai.jpeg")' }}>
                                <div class="container mx-auto">
                                    <div class="lg:grid lg:grid-cols-2 lg:gap-10">
                                        <div class="">
                                            <div class="">
                                                <div class="text_line">
                                                    <p class="text-base font-lato text-highRed font-normal lg:mb-4">Our
                                                        Facilities</p>
                                                </div>
                                                <h2
                                                    class="font-lato font-semibold  text-white text-xl md:text-3xl  lg:text-4xl md:text-center lg:text-left md:mb-3 ">
                                                    American Crescent Health Care Center
                                                </h2>

                                                <div class="">
                                                    <div
                                                        class="md:flex md:items-center md:justify-center lg:flex lg:justify-start lg:items-center">
                                                        <div class="flex items-center justify-center md:mr-5 lg:mr-14">
                                                            <div class="text-2xl md:text-3xl text-highRed mt-2 mr-2">
                                                                <iconify-icon icon="ic:sharp-call"></iconify-icon>
                                                            </div>
                                                            <div class="">
                                                                <p class=" text-base md:text-xl text-white font-lato">+971
                                                                    58 58
                                                                    22 900</p>
                                                            </div>
                                                        </div>

                                                        <div class="">
                                                            <ul class=" flex items-center justify-center">
                                                                <li><Link class=" text-white hover:text-highRed text-2xl lg:text-4xl mr-2"
                                                                        to='#'>
                                                                        <iconify-icon
                                                                            icon="entypo-social:facebook-with-circle"></iconify-icon>
                                                                    </Link></li>
                                                                <li><Link class=" text-white hover:text-highRed text-2xl lg:text-4xl mr-2"
                                                                        to='#'>
                                                                        <iconify-icon
                                                                            icon="ant-design:twitter-circle-filled"></iconify-icon>
                                                                    </Link></li>
                                                                <li><Link class=" text-white hover:text-highRed text-2xl lg:text-4xl mr-2"
                                                                        to='#'>
                                                                        <iconify-icon
                                                                            icon="entypo-social:instagram-with-circle"></iconify-icon>
                                                                    </Link></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    {/* <!-- ==========Checked========= --> */}
                                                    <div class="mt-6">
                                                        <p
                                                            class=" text-white font-lato  text-base lg:text-lg  leading-5 text-justify md:text-center lg:text-justify font-normal lg:font-medium ">
                                                            We Are multi-specialty practice , Providing first class healt
                                                            care services to patients in abu Dhabi since late 1999.
                                                            Our Center is equipped with state of the airt equipment and
                                                            staffed with highly qulified medical professionals who have
                                                            had wide experience dealing with various medical</p>
                                                    </div>
                                                    <div class=" mt-5 lg:mt-11 flex justify-center lg:justify-start">
                                                        <Link class=" font-lato text-lg font-semibold text-white  bg-highRed px-4 py-2 md:px-5 md:py-3 rounded-lg"
                                                            to="#">View
                                                            Details</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mt-10 lg:mt-0 h-72 md:h-300 lg:h-500">
                                            <img class=" rounded-md " src="./img/hospital-1.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>

                </div>
            </div>

        </section>
    {/* <!-- ============facilities End==================== --> */}


    {/* <!-- ===============About-us start================= --> */}
        <section>
            <div class="container mx-auto px-3 py-10 lg:pt-28  lg:pb-200 back">
                <div class="lg:grid  lg:grid-cols-10 lg:gap-6">
                    <div class=" lg:col-span-5 ">
                        <div class="text_line2">
                            <p class=" text-base font-lato text-highRed font-normal lg:mb-4">About Us</p>
                        </div>
                        <h2
                            class=" font-lato font-semibold   text-highBlue text-xl md:text-3xl  lg:text-4xl md:text-center lg:text-left md:mb-3 ">
                            Making Health Facilities in
                            <br />
                            Emergencies
                        </h2>
                        <p
                            class=" text-highBlue font-lato  text-base lg:text-lg  leading-5 text-justify md:text-center lg:text-justify font-normal lg:font-medium">
                            Headquartered
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                            the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                            of
                            type and scrambled it to make a type specimen book. It has</p>


                        <div class=" mt-6">

                            <div class="flex items-center">
                                <div class="">
                                    <p class=" text-highRed font-lato  text-2xl mt-1"><iconify-icon
                                            icon="ic:round-check-circle" />
                                    </p>
                                </div>
                                <div class="">
                                    <p class=" text-highBlue text-base font-lato font-normal leading-6 ml-2 ">Quality
                                        Health
                                        Care</p>
                                </div>

                            </div>
                            {/* <!-- =======checked======== --> */}
                            <div class="flex items-center">
                                <div class="">
                                    <p class=" text-highRed font-lato  text-2xl mt-1"><iconify-icon
                                            icon="ic:round-check-circle" />
                                    </p>
                                </div>
                                <div class="">
                                    <p class=" text-highBlue text-base font-lato font-normal leading-6 ml-2 ">Highly
                                        Qualified Doctors</p>
                                </div>

                            </div>
                            {/* <!-- =======checked======== --> */}
                            <div class="flex items-center">
                                <div class="">
                                    <p class=" text-highRed font-lato  text-2xl mt-1"><iconify-icon
                                            icon="ic:round-check-circle" />
                                    </p>
                                </div>
                                <div class="">
                                    <p class=" text-highBlue text-base font-lato font-normal leading-6 ml-2 ">Medical
                                        Research Professional</p>
                                </div>
                            </div>
                            {/* <!-- =======checked======== --> */}
                        </div>
                        <div class="mt-5 lg:mt-11 flex justify-center lg:justify-start mb-3 ">
                            <Link class="font-lato text-lg font-semibold text-white  bg-highRed px-4 py-2 md:px-5 md:py-3 rounded-lg"
                                to="aboutUs.html">View
                                Details</Link>
                        </div>
                    </div>
                    <div class=" lg:col-span-5">
                        <div class="aboutMain ">
                            <img class="w-full mt-6 md:mt-8 " src={about1} alt="aboutImg.jpg" />
                            <div class=" aboutBottom flex justify-center w-full">
                                <img class=" w-11/12  h-40 md:h-300 lg:w-300 lg:h-300   border-8 border-white rounded-lg "
                                    src={about2} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    {/* <!-- ===============About-us End================= --> */}

    {/* <!-- =================Service- satrt=============== --> */}
        <section className='mt-40'>
            <div class="back_over">
                <div class=" bg-ash mt-28 lg:mt-10 py-10 md:py-16 lg:py-20  ">
                    <div class="container mx-auto  px-3">
                        <div class="text_line3">
                            <p class=" text-base font-lato text-highRed font-normal lg:mb-4">Our Main Services</p>
                        </div>
                        <h2
                            class=" font-lato font-semibold   text-highBlue text-xl md:text-3xl  lg:text-4xl md:text-center lg:text-left md:mb-3">
                            Explore Our Main Service
                        </h2>
                        {/* <!-- ========service-post========== --> */}
                        <div class="mt-6 lg:mt-20">
                            <div class=" lg:grid lg:grid-cols-3 lg:gap-5  md:grid md:grid-cols-2 md:gap-4">
                                <div class="mb-3 md:mb-0">
                                    <div class="services_back rounded-lg"
                                        style={{ backgroundImage: 'url("../assets/img/services-6.jpg")' }}>
                                        <div class="service_inner">
                                            <div
                                                class=" w-20 h-20 rounded-full flex items-center justify-center border-4 border-white service-icon bg-highRed">
                                                <img src={vacsine1} alt="pcr" />
                                                
                                            </div>
                                            {/* <!-- ========Services-icon======== --> */}
                                            <div class=" bg-highRed pb-14 pt-20 px-6  service_front">

                                                <div class=" grid grid-cols-12 ">
                                                    <div class=" col-span-7">
                                                        <p class=" text-white text-base lg:text-xl font-semibold font-lato">
                                                            visa-screening
                                                        </p>
                                                    </div>
                                                    <div class="col-span-5 flex justify-end">
                                                        <Link class=" text-white  text-base font-lato font-normal mt-1 "
                                                            to="servicesDetails.html">
                                                            <span class=" text-lg">Read
                                                                More</span>
                                                            <span class=""></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- ==========Services-text========= --> */}
                                        </div>
                                        {/* <!-- =========Over-card-service=========== --> */}
                                        <div class="bg-highRed p-8 rounded-lg over_card">
                                            <div
                                                class=" w-20 h-20 flex justify-center items-center border-4 border-white rounded-full mb-0 lg:mb-7">
                                                <img src="./img/vacsine.png" alt="" />
                                            </div>
                                            <div class="">
                                                <h2 class=" text-white text-2xl font-semibold font-lato ">visa-screening
                                                </h2>
                                                <p class=" text-white font-lato font-normal text-base ">Headquartered in Abu
                                                    Dhabi, Somerian Health — a subsidiary of TAMOUH and the renowned IHC
                                                    group of companies — takes
                                                    pride in being a leading force throughout the pandemic by setting up 84
                                                    Covid-care field hospitals, ICUs and clinical
                                                    laboratories.</p>
                                                <Link class=" text-white  text-base font-lato font-normal mt-2"
                                                    to="servicesDetails.html">
                                                    <span class=" text-base">Read
                                                        More</span>
                                                    <span class=""></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-3 md:mb-0">
                                    <div class="services_back rounded-lg"
                                        style={{backgroundImage: 'url("./img/services-1.jpg")'}}>
                                        <div class="service_inner">
                                            <div
                                                class=" w-20 h-20 rounded-full flex items-center justify-center border-4 border-white service-icon bg-highRed back">
                                                <img src={pcr1} alt="pcr" />
                                            </div>
                                            <div class=" bg-highRed pb-14 pt-20 px-6  service_front">

                                                <div class=" grid grid-cols-12 ">
                                                    <div class=" col-span-7">
                                                        <p class=" text-white text-base lg:text-xl font-semibold font-lato">
                                                            PCR & Diagnostics
                                                        </p>
                                                    </div>
                                                    <div class="col-span-5 flex justify-end">
                                                        <Link class=" text-white  text-base font-lato font-normal mt-1 "
                                                            to="servicesDetails.html">
                                                            <span class=" text-lg">Read
                                                                More</span>
                                                            <span class="mt-"></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- ==========Services-text========= --> */}
                                        </div>
                                        {/* <!-- =========Over-card-service=========== --> */}
                                        <div class="bg-highRed p-8 rounded-lg over_card">
                                            <div
                                                class=" w-20 h-20 flex justify-center items-center border-4 border-white rounded-full mb-0 lg:mb-7">
                                                <img src={pcr1} alt="" />
                                            </div>
                                            <div class="">
                                                <h2 class=" text-white text-2xl font-semibold font-lato ">PCR &
                                                    Diagnostics
                                                </h2>
                                                <p class=" text-white font-lato font-normal text-base ">We have the ability
                                                    to perform COVID-19 tests on a mass level with accuracy & perfection.
                                                    With a legacy of delivering
                                                    best-in-class Covid-19 treatment backed by new-age technology,
                                                    government bodies has approved testing and diagnosing
                                                    Covid-19</p>
                                                <Link class=" text-white  text-base font-lato font-normal mt-2"
                                                    to="servicesDetails.html">
                                                    <span class=" text-base">Read
                                                        More</span>
                                                    <span class="mt-"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-3 md:mb-0">
                                    <div class="services_back rounded-lg"
                                        style={{backgroundImage:'url("./img/service-2.jpg")'}}>
                                        <div class="service_inner">
                                            <div
                                                class=" w-20 h-20 rounded-full flex items-center justify-center border-4 border-white service-icon bg-highRed">
                                                <img src={deep1} alt="pcr" />
                                            </div>
                                            {/* <!-- ========Services-icon======== --> */}
                                            <div class=" bg-highRed pb-8 pt-20 px-6  service_front">

                                                <div class=" grid grid-cols-12 ">
                                                    <div class=" col-span-7">
                                                        <p class=" text-white text-base lg:text-xl font-semibold font-lato">
                                                            Exponential
                                                            Deep
                                                            Examination
                                                        </p>
                                                    </div>
                                                    <div class="col-span-5 flex justify-end">
                                                        <Link class=" text-white  text-base font-lato font-normal mt-1 "
                                                            to="servicesDetails.html">
                                                            <span class=" text-lg">Read
                                                                More</span>
                                                            <span class="mt-"></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- ==========Services-text========= --> */}
                                        </div>
                                        {/* <!-- =========Over-card-service=========== --> */}
                                        <div class="bg-highRed p-8  rounded-lg over_card">
                                            <div
                                                class=" w-20 h-20 flex justify-center items-center border-4 border-white rounded-full mb-0 lg:mb-7">
                                                <img src={deep1} alt="" />
                                            </div>
                                            <div class="">
                                                <h2 class=" text-white text-2xl font-semibold font-lato ">Exponential
                                                    Deep
                                                    Examination
                                                </h2>
                                                <p class=" text-white font-lato font-normal text-base ">To fulfil our
                                                    commitment towards creating new-age, innovative healthcare solutions, we
                                                    specialise in conducting
                                                    Exponential Deep Examination (EDE) services. EDE is a scanning machine
                                                    that features the technology to detect…
                                                </p>
                                                <Link class=" text-white  text-base font-lato font-normal mt-2"
                                                    to="servicesDetails.html">
                                                    <span class=" text-base">Read
                                                        More</span>
                                                    <span class="mt-"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-3 md:mb-0">
                                    <div class="services_back rounded-lg"
                                        style={{backgroundImage:'url("./img/services-03.jpg")'}}>
                                        <div class="service_inner">
                                            <div
                                                class=" w-20 h-20 rounded-full flex items-center justify-center border-4 border-white service-icon bg-highRed">
                                                <img src={clipBoard} alt="pcr" />
                                            </div>
                                            {/* <!-- ========Services-icon======== --> */}
                                            <div class=" bg-highRed pb-14 pt-20 px-6  service_front">

                                                <div class=" grid grid-cols-12 ">
                                                    <div class=" col-span-7">
                                                        <p class=" text-white text-base lg:text-xl font-semibold font-lato">
                                                            Clinical Trials
                                                        </p>
                                                    </div>
                                                    <div class="col-span-5 flex justify-end">
                                                        <Link class=" text-white  text-base font-lato font-normal mt-1 "
                                                            to="servicesDetails.html">
                                                            <span class=" text-lg">Read
                                                                More</span>
                                                            <span class="mt-"></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- ==========Services-text========= --> */}
                                        </div>
                                        {/* <!-- =========Over-card-service=========== --> */}
                                        <div class="bg-highRed p-8 rounded-lg over_card">
                                            <div
                                                class=" w-20 h-20 flex justify-center items-center border-4 border-white rounded-full mb-0 lg:mb-7">
                                                <img src={clipBoard} alt="" />
                                            </div>
                                            <div class="">
                                                <h2 class=" text-white text-2xl font-semibold font-lato ">Clinical
                                                    Trials
                                                </h2>
                                                <p class=" text-white font-lato font-normal text-base ">We have
                                                    expertise in conducting clinical trials for all new treatments in the
                                                    healthcare industry. We are proud to have
                                                    a team of highly qualified researchers who believe in studying and
                                                    evaluating assessments by going deeper into the
                                                    subjects…</p>
                                                <Link class=" text-white  text-base font-lato font-normal mt-2"
                                                    to="servicesDetails.html">
                                                    <span class=" text-base">Read
                                                        More</span>
                                                    <span class="mt-"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-3 md:mb-0">
                                    <div class="services_back rounded-lg"
                                        style={{backgroundImage:'url("./img/services-04.jpg")'}}>
                                        <div class="service_inner">
                                            <div
                                                class=" w-20 h-20 rounded-full flex items-center justify-center border-4 border-white service-icon bg-highRed">
                                                <img src={home1} alt="pcr" />
                                            </div>
                                            {/* <!-- ========Services-icon======== --> */}
                                            <div class=" bg-highRed pb-8 pt-20 px-6  service_front">

                                                <div class=" grid grid-cols-12 ">
                                                    <div class=" col-span-7">
                                                        <p class=" text-white text-base lg:text-xl font-semibold font-lato">
                                                            Isolation &
                                                            Quarantine
                                                            Centres
                                                        </p>
                                                    </div>
                                                    <div class="col-span-5 flex justify-end">
                                                        <Link class=" text-white  text-base font-lato font-normal mt-1 "
                                                            to="servicesDetails.html">
                                                            <span class=" text-lg">Read
                                                                More</span>
                                                            <span class="mt-"></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- ==========Services-text========= --> */}
                                        </div>
                                        {/* <!-- =========Over-card-service=========== --> */}
                                        <div class="bg-highRed p-8 rounded-lg over_card">
                                            <div
                                                class=" w-20 h-20 flex justify-center items-center border-4 border-white rounded-full mb-0 lg:mb-7">
                                                <img src={home1} alt="" />
                                            </div>
                                            <div class="">
                                                <h2 class=" text-white text-2xl font-semibold font-lato ">Isolation &
                                                    Quarantine
                                                    Centres
                                                </h2>
                                                <p class=" text-white font-lato font-normal text-base ">Ever since the
                                                    pandemic hit the nation, we have left no stone unturned in helping the
                                                    UAE Government set up
                                                    state-of-the-art quarantine centres across the country. Our quarantine
                                                    centres allow each patient to have a private
                                                    space with a bed, AC, Internet connection…</p>
                                                <Link class=" text-white  text-base font-lato font-normal mt-2"
                                                    to="servicesDetails.html">
                                                    <span class=" text-base">Read
                                                        More</span>
                                                    <span class="mt-"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-3 md:mb-0">
                                    <div class="services_back rounded-lg"
                                        style={{backgroundImage:'url("./img/services-05.jpg")'}}>
                                        <div class="service_inner">
                                            <div
                                                class=" w-20 h-20 rounded-full flex items-center justify-center border-4 border-white service-icon bg-highRed">
                                                <img src={home1} alt="pcr" />
                                            </div>
                                            {/* <!-- ========Services-icon======== --> */}
                                            <div class=" bg-highRed pb-14 pt-20 px-6  service_front">

                                                <div class=" grid grid-cols-12 ">
                                                    <div class=" col-span-7">
                                                        <p class=" text-white text-base lg:text-xl font-semibold font-lato">
                                                            Field Hospitals
                                                        </p>
                                                    </div>
                                                    <div class="col-span-5 flex justify-end">
                                                        <Link class=" text-white  text-base font-lato font-normal mt-1 "
                                                            to="servicesDetails.html">
                                                            <span class=" text-lg">Read
                                                                More</span>
                                                            <span class="mt-"></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- ==========Services-text========= --> */}
                                        </div>
                                        {/* <!-- =========Over-card-service=========== --> */}
                                        <div class="bg-highRed p-8 rounded-lg over_card">
                                            <div
                                                class=" w-20 h-20 flex justify-center items-center border-4 border-white rounded-full mb-0 lg:mb-7">
                                                <img src={home1} alt="" />
                                            </div>
                                            <div class="">
                                                <h2 class=" text-white text-2xl font-semibold font-lato ">Field
                                                    Hospitals
                                                </h2>
                                                <p class=" text-white font-lato font-normal text-base ">With the latest
                                                    in-house lab equipped with cutting-edge innovations, we put out our best
                                                    to serve every patient. We
                                                    brought new hopes in lives with our 5 field hospitals, 6 quarantine
                                                    centres, and 10+ quarantine hotels in Abu Dhabi and
                                                    Al Ain; which are tirelessly…</p>
                                                <Link class=" text-white  text-base font-lato font-normal mt-2"
                                                    to="servicesDetails.html">
                                                    <span class=" text-base">Read
                                                        More</span>
                                                    <span class="mt-"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="">
                            <img src="" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    {/* <!-- =================Service-End=============== --> */}
    {/* <!-- ===========service-image-start============ --> */}
        <section>
            <div class=" bg-white py-6 lg:py-20 px-3">
                <div class="container mx-auto">
                    <div class="text_line3">
                        <p class=" text-base font-lato text-highRed font-normal lg:mb-4">Our Main Services</p>
                    </div>
                    <h2
                        class=" font-lato font-semibold   text-highBlue text-xl md:text-3xl  lg:text-4xl md:text-center lg:text-left md:mb-3">
                        Explore Our Main Service
                    </h2>
                    <div class=" flex justify-center items-center mt-10">
                        <img src={servicesUnder} alt="" />
                    </div>
                </div>
            </div>
        </section>
    {/* <!-- ===========service-image-End============ --> */}




    {/* <!-- ================Patners================== --> */}
        <section id="mypatner">
            <div class="back ">
                <div class=" py-6  lg:pt-8 lg:pb-12">
                    <div class="patner_line">
                        <h2 class="text-2xl lg:text-6xl  font-semibold text-highBlue  font-lato text-center mb-6 ">
                            Our Patners</h2>
                    </div>
                    <div class="marquee mt-10 md:mt-16 lg:mt-20">
                        <div class="marquee-content">
                            <div class="marquee-item  border border-highRed">
                                <img src={logo1} alt="" />
                            </div>

                            <div class="marquee-item border border-highRed">
                                <img src={logo2} alt="" />
                            </div>

                            <div class="marquee-item border border-highRed">
                                <img src={logo3} alt="" />
                            </div>

                            <div class="marquee-item border border-highRed">
                                <img src={logo4} alt="" />
                            </div>
                            <div class="marquee-item border border-highRed">
                                <img src={logo1} alt="" />
                            </div>

                            <div class="marquee-item border border-highRed">
                                <img src={logo2}alt="" />
                            </div>

                            <div class="marquee-item border border-highRed">
                                <img src={logo3} alt="" />
                            </div>

                            <div class="marquee-item border border-highRed">
                                <img src={logo4} alt="" />
                            </div>
                            <div class="marquee-item border border-highRed">
                                <img src={logo1} alt="" />
                            </div>

                            <div class="marquee-item border border-highRed">
                                <img src={logo2} alt="" />
                            </div>

                            <div class="marquee-item border border-highRed">
                                <img src={logo4} alt="" />
                            </div>

                            <div class="marquee-item border border-highRed">
                                <img src={logo2} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    {/* <!-- ================Patners================== --> */}
    </div>
  )
}

export default Home