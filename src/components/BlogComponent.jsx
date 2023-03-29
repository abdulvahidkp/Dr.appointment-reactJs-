import React, { useState } from "react";
const lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet dolorum assumenda repellendus quos architecto itaque quae veritatis, minus eius sint minima doloribus alias, ea debitis enim fugit. Quo, aut autem!";

function BlogsComponent() {

  return (
    <div className="bg-gradient-to-r from-emerald-50 to-emerald-100">
      <div className="container mx-auto max-w-screen-xl">
        <div className="grid grid-cols-2 gap-3 min-h-screen lg:grid-cols-3 place-items-center py-24">
          {/* start */}
              <div className="w-full p-4 lg:w-72 2xl:w-80 rounded-lg  mt-20 " >
                <div className="wrapper antialiased -mt-16">
                  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRvtxNnYRJ07en5DfcIUBRRD6P12GzWZLSAQ&usqp=CAU' alt="blogImage" className="h-44 w-full object-cover rounded-lg shadow-md " />
                </div>
                <div className="flex justify-between mt-3">
                  <span className="bg-emerald-700  text-white text-xs px-2 inline-block rounded-full uppercase font-semibold tracking-wide">Doctor / Nurse / Physio Visits</span>
                </div>
                <h4 className="mt-1 text-md md:text-xl font-semibold uppercase leading-tight truncate">HOME CARE SERVICES</h4>
                <div className="sm:mt-1">{lorem.length <= 40 ? lorem : `${lorem.slice(0,40)}...`   }</div>
                <div className=" sm:mt-0 flex flex-col sm:flex-row sm:justify-end sm:items-center">
                  
                  <div className="-mt-2 sm:-mt-0 flex flex-row sm:flex-col items-end ">
                    <h2 className="font-semibold sm:font-bold mt-3 text-start sm:text-end bg-emerald-700 text-white shadow-sm p-1 rounded-full px-4 cursor-pointer hover:bg-emerald-800  duration-200">READ MORE</h2>
                  </div>
                </div>
              </div>
          {/* end */}
         {/* start */}
         <div className="w-full p-4 lg:w-72 2xl:w-80 rounded-lg  mt-20 " >
                <div className="wrapper antialiased -mt-16">
                  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRvtxNnYRJ07en5DfcIUBRRD6P12GzWZLSAQ&usqp=CAU' alt="blogImage" className="h-44 w-full object-cover rounded-lg shadow-md " />
                </div>
                <div className="flex justify-between mt-3">
                  <span className="bg-emerald-700  text-white text-xs px-2 inline-block rounded-full uppercase font-semibold tracking-wide">Doctor / Nurse / Physio Visits</span>
                </div>
                <h4 className="mt-1 text-md md:text-xl font-semibold uppercase leading-tight truncate">HOME CARE SERVICES</h4>
                <div className="sm:mt-1">{lorem.length <= 40 ? lorem : `${lorem.slice(0,40)}...`   }</div>
                <div className=" sm:mt-0 flex flex-col sm:flex-row sm:justify-end sm:items-center">
                  
                  <div className="-mt-2 sm:-mt-0 flex flex-row sm:flex-col items-end ">
                    <h2 className="font-semibold sm:font-bold mt-3 text-start sm:text-end bg-emerald-700 text-white shadow-sm p-1 rounded-full px-4 cursor-pointer hover:bg-emerald-800  duration-200">READ MORE</h2>
                  </div>
                </div>
              </div>
          {/* end */}{/* start */}
              <div className="w-full p-4 lg:w-72 2xl:w-80 rounded-lg  mt-20 " >
                <div className="wrapper antialiased -mt-16">
                  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRvtxNnYRJ07en5DfcIUBRRD6P12GzWZLSAQ&usqp=CAU' alt="blogImage" className="h-44 w-full object-cover rounded-lg shadow-md " />
                </div>
                <div className="flex justify-between mt-3">
                  <span className="bg-emerald-700  text-white text-xs px-2 inline-block rounded-full uppercase font-semibold tracking-wide">Doctor / Nurse / Physio Visits</span>
                </div>
                <h4 className="mt-1 text-md md:text-xl font-semibold uppercase leading-tight truncate">HOME CARE SERVICES</h4>
                <div className="sm:mt-1">{lorem.length <= 40 ? lorem : `${lorem.slice(0,40)}...`   }</div>
                <div className=" sm:mt-0 flex flex-col sm:flex-row sm:justify-end sm:items-center">
                  
                  <div className="-mt-2 sm:-mt-0 flex flex-row sm:flex-col items-end ">
                    <h2 className="font-semibold sm:font-bold mt-3 text-start sm:text-end bg-emerald-700 text-white shadow-sm p-1 rounded-full px-4 cursor-pointer hover:bg-emerald-800  duration-200">READ MORE</h2>
                  </div>
                </div>
              </div>
          {/* end */}{/* start */}
              <div className="w-full p-4 lg:w-72 2xl:w-80 rounded-lg  mt-20 " >
                <div className="wrapper antialiased -mt-16">
                  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRvtxNnYRJ07en5DfcIUBRRD6P12GzWZLSAQ&usqp=CAU' alt="blogImage" className="h-44 w-full object-cover rounded-lg shadow-md " />
                </div>
                <div className="flex justify-between mt-3">
                  <span className="bg-emerald-700  text-white text-xs px-2 inline-block rounded-full uppercase font-semibold tracking-wide">Doctor / Nurse / Physio Visits</span>
                </div>
                <h4 className="mt-1 text-md md:text-xl font-semibold uppercase leading-tight truncate">HOME CARE SERVICES</h4>
                <div className="sm:mt-1">{lorem.length <= 40 ? lorem : `${lorem.slice(0,40)}...`   }</div>
                <div className=" sm:mt-0 flex flex-col sm:flex-row sm:justify-end sm:items-center">
                  
                  <div className="-mt-2 sm:-mt-0 flex flex-row sm:flex-col items-end ">
                    <h2 className="font-semibold sm:font-bold mt-3 text-start sm:text-end bg-emerald-700 text-white shadow-sm p-1 rounded-full px-4 cursor-pointer hover:bg-emerald-800  duration-200">READ MORE</h2>
                  </div>
                </div>
              </div>
          {/* end */}{/* start */}
              <div className="w-full p-4 lg:w-72 2xl:w-80 rounded-lg  mt-20 " >
                <div className="wrapper antialiased -mt-16">
                  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRvtxNnYRJ07en5DfcIUBRRD6P12GzWZLSAQ&usqp=CAU' alt="blogImage" className="h-44 w-full object-cover rounded-lg shadow-md " />
                </div>
                <div className="flex justify-between mt-3">
                  <span className="bg-emerald-700  text-white text-xs px-2 inline-block rounded-full uppercase font-semibold tracking-wide">Doctor / Nurse / Physio Visits</span>
                </div>
                <h4 className="mt-1 text-md md:text-xl font-semibold uppercase leading-tight truncate">HOME CARE SERVICES</h4>
                <div className="sm:mt-1">{lorem.length <= 40 ? lorem : `${lorem.slice(0,40)}...`   }</div>
                <div className=" sm:mt-0 flex flex-col sm:flex-row sm:justify-end sm:items-center">
                  
                  <div className="-mt-2 sm:-mt-0 flex flex-row sm:flex-col items-end ">
                    <h2 className="font-semibold sm:font-bold mt-3 text-start sm:text-end bg-emerald-700 text-white shadow-sm p-1 rounded-full px-4 cursor-pointer hover:bg-emerald-800  duration-200">READ MORE</h2>
                  </div>
                </div>
              </div>
          {/* end */}{/* start */}
              <div className="w-full p-4 lg:w-72 2xl:w-80 rounded-lg  mt-20 " >
                <div className="wrapper antialiased -mt-16">
                  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRvtxNnYRJ07en5DfcIUBRRD6P12GzWZLSAQ&usqp=CAU' alt="blogImage" className="h-44 w-full object-cover rounded-lg shadow-md " />
                </div>
                <div className="flex justify-between mt-3">
                  <span className="bg-emerald-700  text-white text-xs px-2 inline-block rounded-full uppercase font-semibold tracking-wide">Doctor / Nurse / Physio Visits</span>
                </div>
                <h4 className="mt-1 text-md md:text-xl font-semibold uppercase leading-tight truncate">HOME CARE SERVICES</h4>
                <div className="sm:mt-1">{lorem.length <= 40 ? lorem : `${lorem.slice(0,40)}...`   }</div>
                <div className=" sm:mt-0 flex flex-col sm:flex-row sm:justify-end sm:items-center">
                  
                  <div className="-mt-2 sm:-mt-0 flex flex-row sm:flex-col items-end ">
                    <h2 className="font-semibold sm:font-bold mt-3 text-start sm:text-end bg-emerald-700 text-white shadow-sm p-1 rounded-full px-4 cursor-pointer hover:bg-emerald-800  duration-200">READ MORE</h2>
                  </div>
                </div>
              </div>
          {/* end */}{/* start */}
              <div className="w-full p-4 lg:w-72 2xl:w-80 rounded-lg  mt-20 " >
                <div className="wrapper antialiased -mt-16">
                  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRvtxNnYRJ07en5DfcIUBRRD6P12GzWZLSAQ&usqp=CAU' alt="blogImage" className="h-44 w-full object-cover rounded-lg shadow-md " />
                </div>
                <div className="flex justify-between mt-3">
                  <span className="bg-emerald-700  text-white text-xs px-2 inline-block rounded-full uppercase font-semibold tracking-wide">Doctor / Nurse / Physio Visits</span>
                </div>
                <h4 className="mt-1 text-md md:text-xl font-semibold uppercase leading-tight truncate">HOME CARE SERVICES</h4>
                <div className="sm:mt-1">{lorem.length <= 40 ? lorem : `${lorem.slice(0,40)}...`   }</div>
                <div className=" sm:mt-0 flex flex-col sm:flex-row sm:justify-end sm:items-center">
                  
                  <div className="-mt-2 sm:-mt-0 flex flex-row sm:flex-col items-end ">
                    <h2 className="font-semibold sm:font-bold mt-3 text-start sm:text-end bg-emerald-700 text-white shadow-sm p-1 rounded-full px-4 cursor-pointer hover:bg-emerald-800  duration-200">READ MORE</h2>
                  </div>
                </div>
              </div>
          {/* end */}
        </div>
      </div>
    </div>
  );
}

export default BlogsComponent;
