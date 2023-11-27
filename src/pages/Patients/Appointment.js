import React from 'react'

const Appointment = () => {
  return (
    <div>
        <div className='mt-60'>
            <div className="mt-5 md:mt-8 lg:mt-11">
                    <div className="lg:w-11/12 lg:mx-auto">
                        <div className="px-3">
                            {/* <h2 className="font-lato font-semibold text-white bg-lightRed inline-block rounded-t-xl py-2 px-4 lg:py-5 lg:px-20 text-base text-center" style={{ width: '50%' }}>
                            Make an Appointment
                            </h2> */}

                            <div className="flex justify-center items-center">
                                <h2 className="font-lato font-semibold text-white bg-lightRed inline-block rounded-t-xl py-2 px-4 lg:py-5 lg:px-20 text-base">
                                    Make an Appointment
                                </h2>
                            </div>

                                <div className=" bg-white py-5 px-4 md:p-8 lg:p-12 rounded-xl rounded-tl-none">
                                    <div className=" ">
                                        <form action="">
                                            <div className="lg:grid lg:grid-cols-3 lg:gap-4 ">
                                                <div className="mb-2">
                                                    <input type="text"
                                                        className=" w-full bg-ash p-4 font-lato text-highBlue text-lg rounded-lg focus:outline-none placeholder:text-lightBlue placeholder:text-base placeholder:font-normal" name="name"  placeholder="Name" />
                                                </div>
                                                <div className="mb-2">
                                                    <input
                                                        className=" w-full bg-ash p-4 font-lato  text-highBlue text-lg rounded-lg focus:outline-none placeholder:text-lightBlue placeholder:text-base placeholder:font-normal"
                                                        type="text" placeholder="Phone" name="phone"
                                                        oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" />
                                                </div>
                                                <div className="mb-2">
                                                    <input
                                                        className=" w-full bg-ash p-4 font-lato text-base text-highBlue rounded-lg focus:outline-none placeholder:text-lightBlue placeholder:text-base placeholder:font-normal"
                                                        type="Emali" placeholder="Emali Address" name="email" />
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
                                                        className="w-full bg-ash p-4  font-lato  text-highBlue text-lg rounded-lg focus:outline-none">
                                                        <option value="" selected>Select Doctor</option>
                                                        <option value="">Dr.Karrar Khalid</option>
                                                        <option value="">Dr.Zaki Aldin Al Shariff</option>
                                                        <option value="">Dr.Hameed Al Ansari</option>
                                                        <option value="">Dr.Annable Talisayon</option>

                                                    </select>
                                                </div>
                                                <div className="mb-3  ">
                                                    <input
                                                        className=" w-full bg-ash p-4 font-lato text-base text-highBlue rounded-lg focus:outline-none placeholder:text-lightBlue placeholder:text-base placeholder:font-normal"
                                                        placeholder="Date" type="text"
                                                        onfocus="(this.type='date')" id="date" />
                                                </div>
                                                <div className=""></div>
                                                <div className="">
                                                <button className="font-semibold text-black bg-lightRed inline-block px-6 py-3 rounded-lg w-full text-lg hover:bg-red-400 focus:outline-none focus:ring focus:border-lightRed transition duration-300" type="submit">
                                                    Book Now
                                                    </button>

                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Appointment