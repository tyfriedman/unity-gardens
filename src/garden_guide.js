import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import DownloadButton from './components/DownloadButton';
import './form.css';

function GardenGuide() {
  const [date, setDate] = useState('');
  const [guideName, setGuideName] = useState('');
  const [firstAdults, setFirstAdults] = useState('');
  const [firstKids, setFirstKids] = useState('');
  const [returnAdults, setReturnAdults] = useState('');
  const [returnKids, setReturnKids] = useState('');
  const [otherVisitors, setOtherVisitors] = useState('');
  const [otherReason, setOtherReason] = useState('');
  const [otherProgram, setOtherProgram] = useState('');
  const [zipcodes, setZipcodes] = useState('');
  const [notes, setNotes] = useState('');
  const [message, setMessage] = useState('');
  const [messageColor, setMessageColor] = useState('black');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!date || !guideName || !firstAdults || !firstKids || !returnAdults || 
        !returnKids || !otherProgram || !zipcodes) {
      setMessage('All fields are required except Other Visitors, Reason, and Notes!');
      setMessageColor('red');
    } else {
      setMessage('Thanks for submitting the garden guide form!');
      setMessageColor('green');
      // Clear form
      setDate('');
      setGuideName('');
      setFirstAdults('');
      setFirstKids('');
      setReturnAdults('');
      setReturnKids('');
      setOtherVisitors('');
      setOtherReason('');
      setOtherProgram('');
      setZipcodes('');
      setNotes('');
    }
  };

  const handleDownloadData = () => {
    // This function will be implemented later to handle the actual download
    console.log('Downloading garden guide data...');
  };

  return (
    <>
      <Link to="/" className="back-home-button">
        Back to Home
      </Link>
      <div className="form-container">
        <h1>Garden Guide Form</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />

          <label htmlFor="guideName">Garden Guide(s):</label>
          <input
            type="text"
            id="guideName"
            value={guideName}
            onChange={(e) => setGuideName(e.target.value)}
            required
          />

          <label htmlFor="firstAdults">Adults - First Visit:</label>
          <input
            type="number"
            id="firstAdults"
            value={firstAdults}
            onChange={(e) => setFirstAdults(e.target.value)}
            required
          />

          <label htmlFor="firstKids">Kids - First Visit:</label>
          <input
            type="number"
            id="firstKids"
            value={firstKids}
            onChange={(e) => setFirstKids(e.target.value)}
            required
          />

          <label htmlFor="returnAdults">Adults - Return Visit:</label>
          <input
            type="number"
            id="returnAdults"
            value={returnAdults}
            onChange={(e) => setReturnAdults(e.target.value)}
            required
          />

          <label htmlFor="returnKids">Kids - Return Visit:</label>
          <input
            type="number"
            id="returnKids"
            value={returnKids}
            onChange={(e) => setReturnKids(e.target.value)}
            required
          />

          <label htmlFor="otherVisitors">Other Visitors:</label>
          <input
            type="number"
            id="otherVisitors"
            value={otherVisitors}
            onChange={(e) => setOtherVisitors(e.target.value)}
          />

          <label htmlFor="otherReason">Reason for Other Visitors:</label>
          <input
            type="text"
            id="otherReason"
            value={otherReason}
            onChange={(e) => setOtherReason(e.target.value)}
          />

          <label htmlFor="otherProgram">Other Program (Yes/No/NA):</label>
          <input
            type="text"
            id="otherProgram"
            value={otherProgram}
            onChange={(e) => setOtherProgram(e.target.value)}
            required
          />

          <label htmlFor="zipcodes">Zipcode(s):</label>
          <input
            type="text"
            id="zipcodes"
            value={zipcodes}
            onChange={(e) => setZipcodes(e.target.value)}
            required
          />

          <label htmlFor="notes">Extra Notes:</label>
          <textarea
            id="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows="4"
          ></textarea>

          <button type="submit">Submit</button>
        </form>
        {message && <p style={{ color: messageColor }}>{message}</p>}
        <DownloadButton onDownload={handleDownloadData} />
      </div>
    </>
  );
}

export default GardenGuide;
