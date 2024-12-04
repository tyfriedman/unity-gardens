import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DownloadButton from './components/DownloadButton';
import './form.css'; // CSS file

function EventData() {
  const [eventName, setEventName] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [org, setOrg] = useState('');
  const [adults, setAdults] = useState('');
  const [kids, setKids] = useState('');
  const [desc, setDesc] = useState('');
  const [message, setMessage] = useState('');
  const [messageColor, setMessageColor] = useState('black');  // Initialize color to 'black'

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!eventName || !date || !location || !org || !adults || !kids || !desc) {
      setMessage('All fields are required!');
      setMessageColor('red');
    } else {
      setMessage('Thanks for filling out the form!');
      setMessageColor('green');
      // Clear form
      setEventName('');
      setDate('');
      setLocation('');
      setOrg('');
      setAdults('');
      setKids('');
      setDesc('');
    }
  };

  const handleDownloadData = () => {
    // This function will be implemented later to handle the actual download
    console.log('Downloading event data...');
  };

  return (
    <>
      <Link to="/" className="back-home-button">
        Back to Home
      </Link>
      <div className="form-container">
        <h1>New Event Form</h1>
        <form id="eventForm" onSubmit={handleSubmit}>
          {/* Event Name */}
          <label htmlFor="event_name">Event Name:</label>
          <input
            type="text"
            id="event_name"
            name="event_name"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
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

          {/* Organized By */}
          <label htmlFor="org">Organized By:</label>
          <input
            type="text"
            id="org"
            name="org"
            value={org}
            onChange={(e) => setOrg(e.target.value)}
            required
          />

          {/* Adults Present */}
          <label htmlFor="adults">Adults Present:</label>
          <input
            type="number"
            id="adults"
            name="adults"
            value={adults}
            onChange={(e) => setAdults(e.target.value)}
            required
          />

          {/* Kids Present */}
          <label htmlFor="kids">Kids Present:</label>
          <input
            type="number"
            id="kids"
            name="kids"
            value={kids}
            onChange={(e) => setKids(e.target.value)}
            required
          />

          {/* Description */}
          <label htmlFor="desc">Description:</label>
          <textarea
            id="desc"
            name="desc"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            rows="4"
            required
          ></textarea>

          {/* Submit Button */}
          <button type="submit">Submit</button>
        </form>
        {message && <p style={{ color: messageColor }}>{message}</p>}
        <DownloadButton onDownload={handleDownloadData} />
      </div>
    </>
  );
}

export default EventData;
