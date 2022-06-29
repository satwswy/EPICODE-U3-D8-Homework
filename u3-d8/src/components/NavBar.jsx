import React from 'react'
import {Nav, Navbar, Container} from "react-bootstrap"

export default function NavBar() {
    return (
        <div><Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Movies</Nav.Link>
                </Nav>
            </Container>
        </Navbar></div>
    )
}
