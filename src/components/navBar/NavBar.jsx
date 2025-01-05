import { Link, Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./navBar.css";
import { CartWidget } from "../cartWidget/CartWidget";

export const NavBar = () => {
    return (
        <>
            <Navbar bg="light">
                <Container>
                    <Navbar.Brand>
                        <Link to="/inicio">
                            <img className="iconNav" src="../.././public/icon.png" alt="Logo" />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">
                                Inicio
                            </Nav.Link>
                            <Nav.Link as={Link} to="/productos">
                                Productos
                            </Nav.Link>
                            <Nav.Link as={Link} to="/contacto">
                                Contacto
                            </Nav.Link>
                            <NavDropdown title="Categorías" id="basic-nav-dropdown">
                                <Nav.Link as={Link} to="/category/all">
                                    Todos
                                </Nav.Link>
                                <Nav.Link as={Link} to="/category/anime">
                                    Anime
                                </Nav.Link>
                                <Nav.Link as={Link} to="/category/games">
                                    Juegos
                                </Nav.Link>
                                <Nav.Link as={Link} to="/category/series">
                                    Series
                                </Nav.Link>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                    <CartWidget />
                </Container>
            </Navbar>
            <Outlet />
        </>
    );
};
