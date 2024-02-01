import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';
import RestOp from './RestOp';
import RestReview from './RestReview';

function ViewRest() {

//get the id of particular restaurant
// const pathParams=useParams()
// console.log(pathParams.id);//object {id:1}
//Returns an object of key/value pairs of the dynamic params from the current URL that were matched by the route path.
 //destructring
const{id}=useParams()
console.log(id);

const base_url="https://restaurant-app-backend-69i4.onrender.com/restaurants"
const [restDetails,setRestDetails]=useState({})
//Api call to fetch the particular restaurant details
const fetchRestDetails=async()=>{
  const result=await axios.get(`${base_url}/${id}`)
  console.log(result.data);
  setRestDetails(result.data)
}
console.log(restDetails);
useEffect(()=>{
  fetchRestDetails()
},[])

return (
    <div>
      <Row>
        <Col>
        <img src={restDetails.photograph} width={"400px"} alt="" /></Col>
        <Col className='m-5 p-5'>
        <ListGroup className='m-5'>
        <h1>{restDetails.name}</h1>
        <ListGroup.Item>Address:{restDetails.address}</ListGroup.Item>
        <ListGroup.Item>cuisine_type:{restDetails.cuisine_type}</ListGroup.Item>
        <ListGroup.Item>neighborhood:{restDetails.neighborhood}</ListGroup.Item>
        <ListGroup.Item><RestOp op={restDetails.operating_hours}/></ListGroup.Item>
        <ListGroup.Item><RestReview review={restDetails.reviews}/></ListGroup.Item>
      </ListGroup>
        </Col>
      </Row>
    </div>
  )
}



export default ViewRest