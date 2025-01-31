import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";
import { Link } from "react-router-dom";
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import "./detailItem.css"
import { CartContext } from "../../context/CartContext";

export const DetailItem = () => {
    const [products, setProducts] = useState([]);
    const [cantidad, setCantidad] = useState(1);
    const {id} = useParams();
    const { carrito, setCarrito } = useContext(CartContext);

    useEffect(() => {
        const productsCollection = collection(db, "products");

        getDocs(productsCollection)
            .then((snapshot) => {
                const productsData = snapshot.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                }));
                setProducts(productsData);
            })
    }, []);

    const handleProductUnit = (event) =>{
        setCantidad(parseInt(event.target.id));
        console.log(cantidad)
    }

    
    const productSelect = products.find(product => product.id=== id);
    
    if(!productSelect){
        return <h2>Este producto no existe</h2>
    }
    
    const agregarAlCarrito = () =>{
        const productoAgregado = {...productSelect, cantidad}
        console.log(productoAgregado)
    }
    
    return (
        <div className="contenedorProductDetail d-flex justify-content-center align-items-center">
            <Button as={Link} id="returnButton" to="/productos">Volver</Button>
            <div className="productDetail w-75 justify-content-center align-items-center flex-row">
                <div className="productDetailImg">
                    <Image src={productSelect.img} fluid/>
                </div>
                <div className="productDetailInfo d-flex flex-column mx-3">
                    <h6>DREAM TAPESTRY</h6>
                    <h4>Nombre de producto: <span>'{productSelect.nombre}'</span></h4>
                    <h4>Medidas: <span>'{productSelect.medidas}'</span></h4>
                    <h4>Precio por unidad: <span>US$ {productSelect.precio}</span></h4>
                    <h4>Descripción de producto: <span>'{productSelect.descripcion}'</span></h4>
                    <h5>✔ Se aceptan cambios y devoluciones</h5>
                    <div>
                        <h5>Unidades: </h5>
                        <Dropdown className="mb-3">
                            <Dropdown.Toggle className="dropdown-basic">
                                {cantidad}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={handleProductUnit} id="1">1 unidad</Dropdown.Item>
                                <Dropdown.Item onClick={handleProductUnit} id="2">2 unidades</Dropdown.Item>
                                <Dropdown.Item onClick={handleProductUnit} id="3">3 unidades</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Button onClick={agregarAlCarrito}>Agregar al carrito</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
