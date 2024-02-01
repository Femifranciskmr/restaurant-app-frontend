import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ListGroup from 'react-bootstrap/ListGroup';

function RestReview({review}) {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
        <p variant="primary" onClick={handleShow}>
        reviews
      </p>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>reviews</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
         {
            review?.map(item=>(
                <ListGroup>
      <ListGroup.Item>name:{item.name}</ListGroup.Item>
      <ListGroup.Item>date:{item.date}</ListGroup.Item>
      <ListGroup.Item>rating:{item.rating}</ListGroup.Item>
      <ListGroup.Item>comments:{item.comments}</ListGroup.Item>
      <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
    </ListGroup>
            ))
         }
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}

export default RestReview