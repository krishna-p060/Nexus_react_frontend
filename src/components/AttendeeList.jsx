// import React from 'react'

// function AttendeeList() {
//   return (
//     <div className='w-full p-20 bg-[#CDEA68] text-black'>
//         <h1 className='text-[3vw] font-["Canela_Text"] leading-[3.7vw] tracking-tight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, earum? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, dolorum!

//         </h1>
//         <div className='w-full border-t-[2px] mt-20 border-[#a1b562]'>

//         </div>
//     </div>
//   )
// }

// export default AttendeeList

import React, { useState } from 'react';
import { attendees } from './data';

function AttendeeList() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredAttendees = attendees.filter(attendee =>
    attendee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='w-full p-20 bg-[#CDEA68] text-black'>
      <h1 className='text-[3vw] font-["Canela_Text"] leading-[3.7vw] tracking-tight'>
      React Nexus will be a two day in-person conference fully packed with amazing talks on topics related to React and React Native. You will get an opportunity to network with enthusiastic react developers at this conference.
      </h1>
      <div className='w-full border-t-[2px] mt-20 border-[#a1b562]'>
        <input
          type="text"
          placeholder="Search attendees..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full mt-4 p-2 border border-gray-400 rounded"
        />
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredAttendees.map((attendee, index) => (
            <div
              key={index}
              className="p-4 border border-gray-300 rounded-lg bg-white"
              style={{ borderColor: '#a1b562' }}
            >
              <h2 className="text-lg font-bold" style={{ color: '#2c3e50' }}>
                {attendee.name}
              </h2>
              <p className="text-sm" style={{ color: '#16a085' }}>
                {attendee.email}
              </p>
              <p className="text-sm" style={{ color: '#2980b9' }}>
                {attendee.city}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AttendeeList;
