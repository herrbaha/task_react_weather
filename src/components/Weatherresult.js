import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Weatherresult = ({date, humidity, temp,icon, condition, name}) => {
    return (
       <Container style={{color:"white"}}>
       <Row style={{color:"40%"}}>{name}</Row>
       <Row>
         <Col  style={{color:"40%"}}>{date}</Col>
         <Col style={{color:"rgb(255, 217, 0)", whiteSpace: "nowrap", fontWeight:"bold"}}>{temp} C</Col>
         <Col><img style={{height:"60%"}} src={icon} alt=""/></Col>
         <Col style={{color:"50%"}}>{condition}</Col>
         <Col>{humidity}%</Col>
       </Row>
     </Container>
    )
}

export default Weatherresult;

