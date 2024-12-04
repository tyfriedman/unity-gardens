import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DownloadButton from './components/DownloadButton';
import './form.css'; // CSS file

function VolunteerData() {
  const [date, setDate] = useState('');
  const [group, setGroup] = useState('');
  const [time, setTime] = useState('');
  const [people, setPeople] = useState('');
  const [hours, setHours] = useState('');
  const [message, setMessage] = useState('');
  const [messageColor, setMessageColor] = useState('black');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!date || !group || !time || !people || !hours) {
      setMessage('All fields are required!');
      setMessageColor('red');
    } else {
      setMessage('Thanks for filling out the form!');
      setMessageColor('green');
      // Clear form
      setDate('');
      setGroup('');
      setTime('');
      setPeople('');
      setHours('');
    }
  };

  const handleDownloadData = () => {
    // This function will be implemented later to handle the actual download
    console.log('Downloading data...');
  };

  return (
    <>
      <Link to="/" className="back-home-button">
        Back to Home
      </Link>
      <div className="form-container">
        <h1>Volunteer Form</h1>
        <form id="volunteerForm" onSubmit={handleSubmit}>
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

          {/* Group */}
          <label htmlFor="group">Group:</label>
          <input
            type="text"
            id="group"
            name="group"
            value={group}
            onChange={(e) => setGroup(e.target.value)}
            required
          />

          {/* Time */}
          <label htmlFor="time">Time:</label>
          <input
            type="text"
            id="time"
            name="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />

          {/* People */}
          <label htmlFor="people">People:</label>
          <input
            type="number"
            id="people"
            name="people"
            value={people}
            onChange={(e) => setPeople(e.target.value)}
            required
          />

          {/* Hours */}
          <label htmlFor="hours">Hours:</label>
          <input
            type="number"
            id="hours"
            name="hours"
            value={hours}
            onChange={(e) => setHours(e.target.value)}
            required
          />

          {/* Submit Button */}
          <button type="submit">Submit</button>
        </form>
        <p style={{ color: messageColor }}>{message}</p>
        <DownloadButton onDownload={handleDownloadData} />
      </div>
    </>
  );
}

export default VolunteerData;
