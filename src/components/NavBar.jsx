import React from 'react'
import CartWidget from './CartWidget'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./NavBar.css";

function ContainerFluidExample() {
  return (
    <div className='BgPropio'>
    <Container fluid>
      <Row>
        <Col>
        <h5>TODO QUIMICA</h5>
        </Col>

        <Col>
        <div className='cart'>
        <CartWidget/>
        </div>
        </Col>

        <Col>
        <Navbar expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto me- TextNav">
                        <Nav.Link href="#home">
                            Home
                        </Nav.Link>
                        <NavDropdown title="Opciones" id="basic-nav-dropdown ">
                            <NavDropdown.Item href="#action/3.1">
                                Elementos
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Contacto
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </Col>

      </Row>
    </Container>
    </div>
  );
}

export default ContainerFluidExample;
