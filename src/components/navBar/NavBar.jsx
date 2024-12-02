import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import "./navBar.css"
import { CartWidget } from '../cartWidget/CartWidget';

export const NavBar = ({cartWidget}) =>{
    return (
    <Navbar bg="light">
        <Container>
            <Navbar.Brand href="#">
                <img className="iconNav" src="../.././public/icon.png"></img>
            </Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#Inicio">Inicio</Nav.Link>
                <Nav.Link href="#Categorias">Categorias</Nav.Link>
                <Nav.Link href="#Nosotros">Nosotros</Nav.Link>
            </Nav>
            <CartWidget />
        </Container>
    </Navbar>
    )
}

