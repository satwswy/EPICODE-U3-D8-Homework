import React from 'react'
import { Nav, Navbar, Container } from "react-bootstrap"
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <div><Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                <Link to="/">
                        <div
                            className='nav-link'
                            
                        >
                            Home
                        </div>
                    </Link>
                    <Link to="/tvShows">
                        <div
                            className='nav-link'
                            
                        >
                            TvShows
                        </div>
                    </Link>
                    <Link to="/details/:movieId">
                        <div
                            className='nav-link'
                            
                        >
                            Details
                        </div>
                    </Link>
                </Nav>
            </Container>
        </Navbar></div>
    )
}
