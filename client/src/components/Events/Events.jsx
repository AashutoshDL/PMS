import React, { useState } from 'react';
import './events.css';
import { useNavigate } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';

const Events = () => {
  const navigate=useNavigate();
  // const events = [
  //   {
  //     id: 1, 
  //     eventName: "BICC Hackathon",
  //     eventLocation: "Chitwan",
  //     outOfValley: true,
  //     locationOrCollege: "San Francisco Convention Center",
  //     attendees: "Alice, Bob",
  //     projectTaken: "Project A",
  //     duration: "3 days",
  //     description: "Presented our latest project and networked with industry professionals.",
  //     teamLead: "Alice"
  //   },
  //   {
  //     id: 2,
  //     eventName: "College Science Fair",
  //     eventLocation: "Local College",
  //     outOfValley: false,
  //     locationOrCollege: "ABC College",
  //     attendees: "Charlie, Dave",
  //     projectTaken: "Project B",
  //     duration: "2 days",
  //     description: "Showcased our project to students and faculty.",
  //     teamLead: "Charlie"
  //   }
  // ];

  const [selectedEvents, setSelectedEvents] = useState([]);

  const handleCheckboxChange = (eventId) => {
    setSelectedEvents((prevSelectedEvents) => {
      if (prevSelectedEvents.includes(eventId)) {
        return prevSelectedEvents.filter(id => id !== eventId);
      } else {
        return [...prevSelectedEvents, eventId];
      }
    });
  };

  const isEventSelected = (eventId) => {
    return selectedEvents.includes(eventId);
  };

  return (
    <div className="events-container mt-5">
    <button className='btn btn-secondary' onClick={()=>{navigate('/')}}>Home</button>
      <h1 className="mb-4">Events</h1>
      <div className="table-responsive">
        <table className="table table-hover table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th scope="col"></th>
              <th scope="col">Event Name</th>
              <th scope="col">Event Location</th>
              <th scope="col">Out of Valley</th>
              <th scope="col">Location/College</th>
              <th scope="col">Who is Going</th>
              <th scope="col">Project Taken</th>
              <th scope="col">Duration</th>
              <th scope="col">Brief Explanation</th>
              <th scope="col">Team Lead</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          {/* <tbody>
            {events.map((event) => (
              <tr key={event.id}>
                <td>
                  <input
                    type="checkbox"
                    checked={isEventSelected(event.id)}
                    onChange={() => handleCheckboxChange(event.id)}
                  />
                </td>
                <td>{event.eventName}</td>
                <td>{event.eventLocation}</td>
                <td>{event.outOfValley ? 'Yes' : 'No'}</td>
                <td>{event.locationOrCollege}</td>
                <td>{event.attendees}</td>
                <td>{event.projectTaken}</td>
                <td>{event.duration}</td>
                <td>{event.description}</td>
                <td>{event.teamLead}</td>
                <td><button className="btn btn-primary">Update</button></td>
              </tr>
            ))}
          </tbody> */}
        </table>
        <div className="events-button">
        <button className='btn btn-primary'>Add</button>
        <button className='btn btn-danger'>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Events;
