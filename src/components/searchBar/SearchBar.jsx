import "./searchBar.css"
import { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const SearchBar = ({ products , onFilter}) => {
    const [trashProducts, setTrashProducts] = useState([]);

    const searchFilterProducts = (text) =>{
        const textSearch = text.toUpperCase();
        const filteredProducts = [];
        trashProducts.forEach(product => {
            const productTitle = product.nombre ?
            product.nombre.toUpperCase() : "";
            const productDescription = product.descripcion ?
            product.descripcion.toUpperCase() : "";
            if (productTitle.includes(textSearch) || productDescription.includes(textSearch)){
                filteredProducts.push(product);
                setTrashProducts((trashProducts) => trashProducts.filter((trashProduct) => trashProduct.id !== product.id));
            }
        });
        products.forEach(product => {
            const productTitle = product.nombre ?
            product.nombre.toUpperCase() : "";
            const productDescription = product.descripcion ?
            product.descripcion.toUpperCase() : "";
            if (productTitle.includes(textSearch) || productDescription.includes(textSearch)){
                filteredProducts.push(product);
            }else{
                setTrashProducts((trashProducts) => [...trashProducts, product]);
            }
        })
        onFilter(filteredProducts);
    }

    const handleInputChange = (event) => {
        const text = event.target.value;
        searchFilterProducts(text);
    }

    return (
        <>
        <Form inline>
            <Row>
                <Col xs="auto">
                    <Form.Control
                        type="text"
                        placeholder="¿Cuál buscabas?✨"
                        className=" mr-sm-2"
                        onChange={handleInputChange}
                    />
                </Col>
            </Row>
        </Form>
        </>
    )
}