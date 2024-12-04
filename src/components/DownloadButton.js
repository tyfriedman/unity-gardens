import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function DownloadButton({ onDownload }) {
  const [showModal, setShowModal] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const correctPassword = "lettuce"; // This should be stored more securely in a real application

  const handleDownload = () => {
    if (password === correctPassword) {
      setShowModal(false);
      setPassword('');
      setError('');
      onDownload();
    } else {
      setError('Incorrect password');
    }
  };

  return (
    <>
      <Button 
        variant="primary" 
        onClick={() => setShowModal(true)}
        style={{ marginTop: '20px' }}
      >
        Download Data
      </Button>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Enter Password to Download</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <Form.Text className="text-danger">{error}</Form.Text>}
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleDownload}>
            Download
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DownloadButton;
