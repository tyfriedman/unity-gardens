import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import { ToastContainer, toast } from 'react-toastify';
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
  const [showConfirmation, setShowConfirmation] = useState(false);
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

  const handleSaveClick = () => { 
    toast.success("Saved!", { autoClose: 3000 }); 
  };

  const handleCancelClick = () => {
    setShowConfirmation(true);
  };

  const handleConfirmationClick = () => {
    navigate('/'); // Redirect to the home page
  };

  const handleCloseConfirmation = () => setShowConfirmation(false);

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
          {/* Add other form fields here */}
          <button type="submit">Submit</button>
        </form>
        {message && <p style={{ color: messageColor }}>{message}</p>}
      </div>
      <ToastContainer />
      <Modal show={showConfirmation} onHide={handleCloseConfirmation}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to Cancel updates?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseConfirmation}>
            No
          </Button>
          <Button variant="primary" onClick={handleConfirmationClick}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
      <div className='form-div'>
        <Form>
          {/* Add form groups here */}
        </Form>
        <div>
          <Button variant="primary" size="lg" onClick={handleSaveClick}>
            Save
          </Button>{' '}
          <Button variant="secondary" size="lg" onClick={handleCancelClick}>
            Cancel
          </Button>
        </div>
      </div>
    </>
  );
}

export default GardenGuide;
