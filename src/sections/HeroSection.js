import React from 'react';
import { Menu } from '@headlessui/react';
import HeroImage from '../assets/hero-banner.png'
// import Card from '../components/Card';

const TravelSearch = () => {
    return (
        <>
        <div className="relative">
            <div className="relative mt-8 flex justify-end">
                <img
                    src={HeroImage}
                    alt="Travel Banner"
                    className="w-80 h-auto rounded-lg"
                    style={{ width: '40rem', marginRight: '15px' }}
                />
               
                <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center text-start pl-4">
                    <h1 className="text-6xl text-orange-600 rounded-lg pl-2" style={{ fontWeight: 700 }}>
                        You won't travel without our <br /> trip planner again.
                    </h1>
                    <p className=" text-black-700 rounded-lg pl-2">
                        Build, organize, and map your itineraries in a free travel app <br /> designed for vacations & road trips
                    </p>
                </div>
            </div>
            {/* <div className="absolute flex justify-between items-center bg-gray-100 p-4 rounded-full shadow-lg mt-8">
        <div className="flex space-x-4">
          <div className="flex items-center">
            <button className="px-4 py-2 rounded-full border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none">
              One Way
            </button>
            <button className="ml-2 px-4 py-2 rounded-full border border-gray-300 bg-orange-600 text-sm font-medium text-white hover:bg-orange-700 focus:outline-none">
              Round Trip
            </button>
          </div>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Where to"
              className="p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Departure Date"
              className="p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Return Date"
              className="p-2 border border-gray-300 rounded-md"
            />
          </div>
          <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              1 Adult
            </Menu.Button>
          </Menu>
          <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Economy
            </Menu.Button>
          </Menu>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Type of trip"
              className="p-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>
        <button className="bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
          Search
        </button>
        
      </div> */}
            {/* <div className="absolute top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 join p-5 bg-gray-100 rounded-lg border w-2/4">
                <input className="input input-bordered join-item" placeholder="Email" />
                <input className="input input-bordered join-item" placeholder="Email" />
                <input className="input input-bordered join-item" placeholder="Email" />
                <button className="btn join-item rounded-r-full">Search</button>
            </div> */}


        </div>
        {/* <Card/> */}
        {/* <div className="flex justify-center items-center h-screen bg-gray-50">
      <div className="relative">
        <div className="absolute inset-0 bg-green-100 opacity-75 transform -skew-y-3"></div>
        <h1 className="relative text-5xl font-bold text-black">Package</h1>
      </div>
    </div> */}
        </>
    );
};

export default TravelSearch;
