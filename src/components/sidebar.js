import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Nav } from 'react-bootstrap';
import { LuHome } from 'react-icons/lu';
import { BsBoxSeam } from 'react-icons/bs';
import { LiaUserSolid } from 'react-icons/lia';
import { BsBag } from 'react-icons/bs';
import { IoSettingsOutline } from 'react-icons/io5';
import { BsList } from 'react-icons/bs';
import "./sidebar.css";

const Sidebar = () => {
    return (
        <div className="sidebar pt-1">
            <Row className="">
                <Col>
                    <h5 className="text-white mt-2 p-3">ShopMe</h5>
                </Col>
                <Col>
                    <button className="toggle-btn m-3">
                        <span className="text-center"><BsList size="25" /></span>
                    </button>
                </Col>
            </Row>

            <div style={{ textAlign: "left" }}>
                <Link to="/" className="route-link">
                    <Nav.Link className="alink" href="#home">
                        <span className="link-icon"><LuHome size="25" /></span> Home
                    </Nav.Link>
                </Link>
                <Link to="products" className="route-link">
                    <Nav.Link className="link" href="#product">
                        <span className="link-icon"><BsBoxSeam size="25" /></span> Products
                    </Nav.Link>
                </Link>
                <Link to="users" className="route-link">
                    <Nav.Link className="link" href="#user">
                        <span className="link-icon"><LiaUserSolid size="25" /></span> Users
                    </Nav.Link>
                </Link>
                <Link to="orders" className="route-link">
                <Nav.Link className="link" href="#orders">
                    <span className="link-icon"><BsBag size="25" /></span> Orders
                </Nav.Link>
                </Link>
                <Nav.Link className="link">
                    <span className="link-icon"><IoSettingsOutline size="25" /></span> Account
                </Nav.Link>
            </div>
        </div>
    );
}

export default Sidebar;
