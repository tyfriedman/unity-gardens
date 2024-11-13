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
