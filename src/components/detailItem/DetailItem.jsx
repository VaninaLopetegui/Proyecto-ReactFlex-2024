import { productos } from "../../data/productos";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import "./detailItem.css"

export const DetailItem = () => {
    const {id} = useParams();
    const productSelect = productos.find(item => item.id===parseInt(id));
    if(!productSelect){
        return <h2>Este producto no existe</h2>
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
                        <Dropdown className="mb-3">
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                1 unidad
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item>2 unidades</Dropdown.Item>
                                <Dropdown.Item>3 unidades</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Button>Agregar al carrito</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
