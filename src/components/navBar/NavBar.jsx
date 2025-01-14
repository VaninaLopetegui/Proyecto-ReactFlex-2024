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
            <Navbar className="navBar">
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
                            <NavDropdown title="Categorías" id="basic-nav-dropdown" className="dropDownNav">
                                <Nav.Link as={Link} to="/category/all" className="dropDownItem">
                                    Todos
                                </Nav.Link>
                                <Nav.Link as={Link} to="/category/anime" className="dropDownItem">
                                    Anime
                                </Nav.Link>
                                <Nav.Link as={Link} to="/category/games" className="dropDownItem">
                                    Juegos
                                </Nav.Link>
                                <Nav.Link as={Link} to="/category/series" className="dropDownItem">
                                    Series
                                </Nav.Link>
                                <Nav.Link as={Link} to="/category/general" className="dropDownItem">
                                    Generales
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
