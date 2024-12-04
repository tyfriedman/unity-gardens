
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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

          <label htmlFor="guideName">Name of Garden Guide:</label>
          <input
            type="text"
            id="guideName"
            value={guideName}
            onChange={(e) => setGuideName(e.target.value)}
            required
          />

          <label htmlFor="firstAdults">Number of Adults (First Visit):</label>
          <input
            type="number"
            id="firstAdults"
            value={firstAdults}
            onChange={(e) => setFirstAdults(e.target.value)}
            required
          />

          <label htmlFor="firstKids">Number of Children (First Visit):</label>
          <input
            type="number"
            id="firstKids"
            value={firstKids}
            onChange={(e) => setFirstKids(e.target.value)}
            required
          />

          <label htmlFor="returnAdults">Number of Adults (Return Visit):</label>
          <input
            type="number"
            id="returnAdults"
            value={returnAdults}
            onChange={(e) => setReturnAdults(e.target.value)}
            required
          />

          <label htmlFor="returnKids">Number of Children (Return Visit):</label>
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

          <label htmlFor="otherReason">Reason for Other Visit:</label>
          <input
            type="text"
            id="otherReason"
            value={otherReason}
            onChange={(e) => setOtherReason(e.target.value)}
          />

          <label htmlFor="otherProgram">Other Program (Y/N/NA):</label>
          <select
            id="otherProgram"
            value={otherProgram}
            onChange={(e) => setOtherProgram(e.target.value)}
            required
          >
            <option value="">Select...</option>
            <option value="Y">Yes</option>
            <option value="N">No</option>
            <option value="NA">N/A</option>
          </select>

          <label htmlFor="zipcodes">Zipcodes:</label>
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
      </div>
    </>
=======
import React, {useState} from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function GardenGuide() {
  const [date, setDate] = useState(new Date());
  const handleSaveClick = () => { 
    toast.success("Saved!", { autoClose: 3000 }); 
  }; 
  const handleCancelClick = () => {
    setShowConfirmation(true)
  };

  const [showConfirmation, setShowConfirmation] = useState(false);
  const navigate = useNavigate();
  const handleConfirmationClick = () => {
    navigate('/'); // Redirect to the home page
  };
  const handleCloseConfirmation = () => setShowConfirmation(false);
  
  return (
    <div>
      <div>
        <ToastContainer /> 
      </div>
      <div>
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
      </div>
      <div className='form-div'>
        <Form>
          <Form.Group as={Row} className="mb-3 fw-bold" controlId="formBasicEmail">
            <Form.Label column sm={2}>Date</Form.Label>
            <Col>
              <Form.Control type="date" name="datepic" placeholder="DateRange" value={date} 
                onChange={(e) => setDate(e.target.value)} className="form-input-width-50"
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3 fw-bold">
            <Form.Label column sm={2}>Garden Guide</Form.Label>
            <Col>
              <InputGroup className="side-by-side form-input-width-50">
                  <Form.Control type="text" name="firstname" placeholder="First name" />
                  <Form.Control type="text" name="lastname" placeholder="Last name"  />
              </InputGroup>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3 fw-bold">
            <Form.Label column sm={2}>First Visit</Form.Label>
            <Col>
              <InputGroup className="side-by-side form-input-width-50">
                  <Form.Control type="text" name="first-visit-num-adults" placeholder="Number of adults" />
                  <Form.Control type="text" name="first-visit-num-children" placeholder="Number of children"  />
              </InputGroup>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3 fw-bold">
            <Form.Label column sm={2}>Return Visit</Form.Label>
            <Col>
              <InputGroup className="side-by-side form-input-width-50">
                  <Form.Control type="text" name="return-visit-num-adults" placeholder="Number of adults" />
                  <Form.Control type="text" name="return-visit-num-children" placeholder="Number of children"  />
              </InputGroup>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3 fw-bold">
            <Form.Label column sm={2}>Other Visitors</Form.Label>
            <Col>
              <InputGroup className="form-input-width-50">
                  <Form.Control type="text" name="num-other-visitors" placeholder="Number of other visitors" />
              </InputGroup>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3 fw-bold">
            <Form.Label column sm={2}>Reason</Form.Label>
            <Col>
              <InputGroup className="form-input-width-50">
                  <Form.Control type="text" name="reason-other-visitors" placeholder="Reason for other visitors"  />
              </InputGroup>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3 fw-bold">
            <Form.Label column sm={2}>Other program</Form.Label>
            <Col>
              <InputGroup className="form-input-width-50">
              <Form.Check type='switch' id={`other-prog-checkbox`} />
              </InputGroup>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3 fw-bold">
            <Form.Label column sm={2}>Zipcode</Form.Label>
            <Col>
              <InputGroup className="form-input-width-50">
                  <Form.Control type="text" name="zipcode" placeholder=""  />
              </InputGroup>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3 fw-bold">
            <Form.Label column sm={2}>Extra Notes</Form.Label>
            <Col>
              <InputGroup className="form-input-width-50">
                  <Form.Control type="text" name="extra-notes" placeholder="Reason for visit, feedback, stories, recipes, etc"  />
              </InputGroup>
            </Col>
          </Form.Group>
        </Form>
      <div>
        <Button variant="primary" size="lg" onClick={handleSaveClick} >
          Save
        </Button>{' '}
        <Button variant="secondary" size="lg" onClick={handleCancelClick}>
          Cancel
        </Button>
      </div>
    </div>
  </div>

  );
}

export default GardenGuide;
