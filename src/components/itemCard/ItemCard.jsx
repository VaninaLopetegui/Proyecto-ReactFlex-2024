import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export const ItemCard = ({nombre, precio, categoria, img}) => {
    return (
        <div className="align-items-center justify-content-center text-center">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{nombre}</Card.Title>
                    <Card.Text>{categoria}</Card.Text>
                    <Card.Text>{precio}</Card.Text>
                    <Button variant="primary">Ver producto</Button>
                </Card.Body>
            </Card>
        </div>
    )
}
