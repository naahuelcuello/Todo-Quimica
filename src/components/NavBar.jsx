import React from 'react'
import CartWidget from './CartWidget'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./NavBar.css";
import { Link, NavLink } from 'react-router-dom';



function ContainerFluidExample() {
  return (
    <div className='BgPropio'>
    <Container fluid>
      <Row>
        <Col>
        <h5>TODO QUIMICA</h5>
        </Col>

        <Col>
        <Navbar expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto me- TextNav">
                        <NavDropdown title="Categorias" id="basic-nav-dropdown ">
                            <NavDropdown.Item as={Link} to='/categoria/Medicion' >
                              Medicion
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to='/categoria/Volumetrico'>
                                Volumetrico
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </Col>

        <Col>
        <div className='cart'>
        <CartWidget/>
        </div>
        </Col>

      </Row>
    </Container>
    </div>
  );
}

export default ContainerFluidExample;
