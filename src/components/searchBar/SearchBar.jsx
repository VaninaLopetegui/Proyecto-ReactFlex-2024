import "./searchBar.css"
import { useState } from "react"; 
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const SearchBar = ({ products , onFilter}) => {
    const [searchText, setSearchText] = useState("");
    const searchFilterProducts = (text) =>{
        if(text){
            const filteredProducts = 
                products.filter(product => {
                    const productTitle = product.nombre ?
                    product.nombre.toUpperCase() : "";
                    const productDescription = product.descripcion ?
                    product.descripcion.toUpperCase() : "";
                    const textSearch = text.toUpperCase();
                    return productTitle.includes(textSearch) || productDescription.includes(textSearch);
                })
            onFilter(filteredProducts);
        } else {
            onFilter(products);
        }
    }

    const handleInputChange = (event) => {
        const text = event.target.value;
        setSearchText(text);
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