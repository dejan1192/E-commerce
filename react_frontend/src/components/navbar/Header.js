import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


const Header = () => {
    return (
        <Navbar style={{background:"#12151c" }} variant='dark' expand="lg" collapseOnSelect>
        <Container>
         <LinkContainer to='/'>
          <Navbar.Brand >NetStore</Navbar.Brand>
         </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <LinkContainer to='/login'>
               <Nav.Link ><i class="fas fa-user"></i> Login</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/cart'>
                <Nav.Link ><i class="fas fa-shopping-cart"></i> Cart</Nav.Link>
              </LinkContainer>
          
            </Nav>
          
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default Header
