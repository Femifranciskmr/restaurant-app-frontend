import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function RestOp({op}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
        <p variant="primary" onClick={handleShow}>
        operating hours
      </p>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>operating hours</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <ListGroup>
      <ListGroup.Item>monday:{op?.Monday}</ListGroup.Item>
      <ListGroup.Item>Tuesday:{op?.Tuesday}</ListGroup.Item>
      <ListGroup.Item>Wednesday:{op?.Wednesday}</ListGroup.Item>
      <ListGroup.Item>Thursday:{op?.Thursday}</ListGroup.Item>
      <ListGroup.Item>Friday:{op?.Friday}</ListGroup.Item>
      <ListGroup.Item>Saturday:{op?.Saturday}</ListGroup.Item>
      <ListGroup.Item>Sunday:{op?.Sunday}</ListGroup.Item>
      </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default RestOp