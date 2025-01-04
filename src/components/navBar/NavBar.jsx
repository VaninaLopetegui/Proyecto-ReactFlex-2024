import {Link, Outlet } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';  
import "./navBar.css"
import { CartWidget } from '../cartWidget/CartWidget';

export const NavBar = () =>{
    return (
    <>
        <Navbar bg="light">
            <Container>
                <Navbar.Brand>
                    <Link to={"inicio"}>
                        <img className="iconNav" src="../.././public/icon.png"></img>
                    </Link>
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
                            <Link to={"anime"}>
                                <NavDropdown.Item >Anime</NavDropdown.Item>
                            </Link>
                            <Link to={"juegos"}>
                                <NavDropdown.Item >Juegos</NavDropdown.Item>
                            </Link>
                            <Link to={"series"}>
                                <NavDropdown.Item >Series</NavDropdown.Item>
                            </Link>
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

