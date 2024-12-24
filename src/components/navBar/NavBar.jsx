import {Link, Outlet } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';  
import "./navBar.css"
import { CartWidget } from '../cartWidget/CartWidget';

export const NavBar = ({cartWidget}) =>{
    return (
    <>
        <Navbar bg="light">
            <Container>
                <Navbar.Brand href="#">
                    <img className="iconNav" src="../.././public/icon.png"></img>
                </Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link>
                            <Link to={"/"}>Inicio</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to={"productos"}>Productos</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to={"contacto"}>Contacto</Link>
                        </Nav.Link>
                        <NavDropdown title="Categorias" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Anime</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Juegos</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Series</NavDropdown.Item>
                            <NavDropdown.Divider />
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <CartWidget />
            </Container>
        </Navbar>
        <Outlet />
    </>
    )
}

