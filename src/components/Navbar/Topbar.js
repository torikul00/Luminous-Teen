import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import './Navbar.css'

function Topbar() {
    return (
        <>
        
            <Navbar  expand="lg">
                <Container fluid>
                    <img className="logo" src="http://luminousteen.com/assets/img/logo.svg" alt="" />

                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="topbarLinks ms-auto my-2 my-lg-0"   >
                            <Nav.Link href="#action1">HOME</Nav.Link>
                            <Nav.Link href="#action2">VISIONS</Nav.Link>
                            <Nav.Link href="#action2">EVENTS</Nav.Link>
                            <Nav.Link href="#action2">ACHIEVEMENTS</Nav.Link>
                            <Nav.Link href="#action2">ABOUT</Nav.Link>
                            <Nav.Link href="#action2">CONTACT</Nav.Link>
                        </Nav>

                        <button className="topbarButton" >THRIVE FELLOWSHIP</button>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
}

export default Topbar;