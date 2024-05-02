import React from "react";
import { Card, Col } from "react-bootstrap";
import "./cards.css";
import { Link } from "react-router-dom";

const Cards = (props) => {
    return ( 
        <Col>
        <Link to={props.page} style={{textDecoration:"none"}}>
        <Card className="cards">
            <Card.Body>
            <p>{props.title}</p>
            {props.icons}
            </Card.Body>
        </Card>
        </Link>
        </Col>
     );
}
 
export default Cards;