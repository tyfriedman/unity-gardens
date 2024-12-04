import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DownloadButton from './components/DownloadButton';
import './form.css';

function ClassData() {
  const [className, setClassName] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [series, setSeries] = useState('');
  const [attendanceInPerson, setAttendanceInPerson] = useState('');
  const [attendanceOnline, setAttendanceOnline] = useState('');
  const [message, setMessage] = useState('');
  const [messageColor, setMessageColor] = useState('black');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!className || !date || !location || !series || !attendanceInPerson || !attendanceOnline) {
      setMessage('All fields are required!');
      setMessageColor('red');
    } else {
      setMessage('Thanks for filling out the form!');
      setMessageColor('green');
      setClassName('');
      setDate('');
      setLocation('');
      setSeries('');
      setAttendanceInPerson('');
      setAttendanceOnline('');
    }
  };

  const handleDownloadData = () => {
    console.log('Downloading class data...');
  };

  return (
    <>
      <Link to="/" className="back-home-button">
        Back to Home
      </Link>
      <div className="form-container">
        <h1>New Class Form</h1>
        <form id="classForm" onSubmit={handleSubmit}>
          {/* Class Name */}
          <label htmlFor="class_name">Class:</label>
          <input
            type="text"
            id="class_name"
            name="class_name"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
            required
          />

          {/* Date */}
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />

          {/* Location */}
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />

          {/* Series */}
          <label htmlFor="series">Series:</label>
          <input
            type="text"
            id="series"
            name="series"
            value={series}
            onChange={(e) => setSeries(e.target.value)}
            required
          />

          {/* Attendance In Person */}
          <label htmlFor="attendance_in_person">Attendance In Person:</label>
          <input
            type="number"
            id="attendance_in_person"
            name="attendance_in_person"
            value={attendanceInPerson}
            onChange={(e) => setAttendanceInPerson(e.target.value)}
            required
          />

          {/* Attendance Online */}
          <label htmlFor="attendance_online">Attendance Online:</label>
          <input
            type="number"
            id="attendance_online"
            name="attendance_online"
            value={attendanceOnline}
            onChange={(e) => setAttendanceOnline(e.target.value)}
            required
          />

          {/* Submit Button */}
          <button type="submit">Submit</button>
        </form>
        {message && <p style={{ color: messageColor }}>{message}</p>}
        <DownloadButton onDownload={handleDownloadData} />
      </div>
    </>
  );
}

export default ClassData;
