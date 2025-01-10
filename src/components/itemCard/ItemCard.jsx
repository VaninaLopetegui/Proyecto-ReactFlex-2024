import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import "./itemCard.css"

export const ItemCard = ({id, nombre, precio, categoria, descripcion, img}) => {
    return (
        <Link to={`/productos/${id}`} style={{ textDecoration: 'none' }}>
            <Card className="cardProduct">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title className="tituloCardProducto">{nombre}</Card.Title>
                    <Card.Text>{categoria}</Card.Text>
                    <Card.Text>{descripcion}</Card.Text>
                    <Card.Text className="precioCardProducto">US$ {precio}</Card.Text>
                    <Button>Ver producto</Button>
                </Card.Body>
            </Card>
        </Link>
    )
}
