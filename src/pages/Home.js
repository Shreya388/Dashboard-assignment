// Home.js
import React from "react";
import { Col, Row } from "react-bootstrap";
import Cards from "../components/cards";
import Sidebar from "../components/sidebar";

const Home = () => {
    return (
        
        <Row>
            <Col>
                <h1>Home</h1>
                <Cards />
            </Col>
        </Row>
    );
}

export default Home;
