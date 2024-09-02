import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminMeetingsPage.css';

const AdminMeetingsPage = () => {
  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    const fetchMeetings = async () => {
      try {
        const response = await axios.get('/api/appointments', {
          headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
        });
        console.log('Fetched meetings:', response.data);
        setMeetings(response.data);
      } catch (error) {
        console.error('Error fetching meetings:', error);
      }
    };

    fetchMeetings();
  }, []);

  return (
    <div className="admin-meetings-container">
      <h1>All Meetings</h1>
      <table>
        <thead>
          <tr>
            <th>Patient Email</th>
            <th>Appointment Time</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {meetings.map((meeting) => (
            <tr key={meeting._id}>
              <td>{meeting.patient}</td>
              <td>{new Date(meeting.appointmentTime).toLocaleString()}</td>
              <td><pre>{JSON.stringify(meeting.details, null, 2)}</pre></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminMeetingsPage;
