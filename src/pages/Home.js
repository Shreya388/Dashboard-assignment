import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import Cards from "../components/cards";
import "./Home.css";
import { LiaUserSolid } from 'react-icons/lia';
import { BsBoxSeam } from 'react-icons/bs';
import { BsBag } from 'react-icons/bs';

const Home = () => {
    return (
        <div>
            <div className="header m-0">
                <Container>
                    <Col md={10} className="mx-auto">
                        <div className="heading">
                            <p>Welcome back, Anish</p>
                            <small><p>time</p></small>
                        </div>

                        <Row>
                            <Cards title="Products" icons={<BsBoxSeam size="35" />} page="/products" />
                            <Cards title="Users" icons={<LiaUserSolid size="35" />} page="/users" />
                            <Cards title="Orders" icons={<BsBag size="35" />} page="/orders" />
                        </Row>
                    </Col>
                </Container>
            </div>

        </div>
    );
}

export default Home;
