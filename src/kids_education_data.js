import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DownloadButton from './components/DownloadButton';
import './form.css';

function KidsEducationData() {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [adultsAttending, setAdultsAttending] = useState('');
  const [kidsAttending, setKidsAttending] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');
  const [messageColor, setMessageColor] = useState('black');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name || !date || !location || !adultsAttending || !kidsAttending || !description) {
      setMessage('All fields are required!');
      setMessageColor('red');
    } else {
      setMessage('Thanks for filling out the form!');
      setMessageColor('green');
      // Clear form
      setName('');
      setDate('');
      setLocation('');
      setAdultsAttending('');
      setKidsAttending('');
      setDescription('');
    }
  };

  const handleDownloadData = () => {
    // This function will be implemented later to handle the actual download
    console.log('Downloading education data...');
  };

  return (
    <>
      <Link to="/" className="back-home-button">
        Back to Home
      </Link>
      <div className="form-container">
        <h1>Kids Education Form</h1>
        <form id="kidsEducationForm" onSubmit={handleSubmit}>
          {/* Name */}
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
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

          {/* Adults Attending */}
          <label htmlFor="adults_attending">Adults Attending:</label>
          <input
            type="number"
            id="adults_attending"
            name="adults_attending"
            value={adultsAttending}
            onChange={(e) => setAdultsAttending(e.target.value)}
            required
          />

          {/* Kids Attending */}
          <label htmlFor="kids_attending">Kids Attending:</label>
          <input
            type="number"
            id="kids_attending"
            name="kids_attending"
            value={kidsAttending}
            onChange={(e) => setKidsAttending(e.target.value)}
            required
          />

          {/* Description */}
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
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

export default KidsEducationData;