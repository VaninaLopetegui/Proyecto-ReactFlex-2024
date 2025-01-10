import { productos } from "../../data/productos";
import { useParams } from "react-router-dom";
import Image from 'react-bootstrap/Image';
import "./detailItem.css"

export const DetailItem = () => {
    const {id} = useParams();
    const productSelect = productos.find(item => item.id===parseInt(id));
    if(!productSelect){
        return <h2>Este producto no existe</h2>
    }
    return (
        <div className="productDetail container">
            <div>
                <Image src={productSelect.img} fluid/>
            </div>
            <div className="productDetailInfo d-flex justify-content-start flex-column">
                <h5>Nombre de producto: <span>{productSelect.nombre}</span></h5>
                <h5>Precio por unidad: <span>US$ {productSelect.precio}</span></h5>
                <h5>Descripcion de producto: <span>{productSelect.descripcion}</span></h5>
            </div>
        </div>
    )
}
