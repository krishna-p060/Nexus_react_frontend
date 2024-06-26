import React, { useState } from 'react';
import { attendees as initialAttendees } from './data';

function AttendeeList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [attendees, setAttendees] = useState(initialAttendees);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newAttendee, setNewAttendee] = useState({ name: '', email: '', city: '' });

  const filteredAttendees = attendees.filter(attendee =>
    attendee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAttendee(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setAttendees(prevAttendees => [...prevAttendees, newAttendee]);
    setNewAttendee({ name: '', email: '', city: '' });
    setIsModalOpen(false);
  };

  return (
    <div className='w-full p-20 bg-[#CDEA68] text-black'>
      <h1 className='text-[3vw] font-["Canela_Text"] leading-[3.7vw] tracking-tight'>
      React Nexus will be a two day in-person conference fully packed with amazing talks on topics related to React and React Native. You will get an opportunity to network with enthusiastic react developers at this conference.
      </h1>
      <div className='w-full border-t-[2px] mt-20 border-[#a1b562]'>
        <div className="flex justify-between items-center mt-4">
          <input
            type="text"
            placeholder="Search attendees..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 border border-gray-400 rounded mr-4"
          />
          <button
            onClick={() => setIsModalOpen(true)}
            className="p-2 bg-blue-500 text-white rounded"
          >
            Register for Event
          </button>
        </div>
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

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded shadow-lg w-1/3">
            <h2 className="text-2xl mb-4">Register for Event</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={newAttendee.name}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-400 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={newAttendee.email}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-400 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">City</label>
                <input
                  type="text"
                  name="city"
                  value={newAttendee.city}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-400 rounded"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="mr-4 p-2 bg-gray-500 text-white rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default AttendeeList;

