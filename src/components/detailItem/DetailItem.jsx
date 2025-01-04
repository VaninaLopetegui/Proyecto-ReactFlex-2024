import { productos } from "../../data/productos";
import { useParams } from "react-router-dom";

export const DetailItem = () => {
    const {id} = useParams();
    const productSelect = id ? productos.find(item => item.id===parseInt(id)) : <h2>Este producto no existe</h2>;
    return (
        <div>
            <h2>Producto:</h2>
            <h3>{productSelect.nombre}</h3>
            <p>{productSelect.categoria}</p>
            <h4>{productSelect.precio}</h4>
        </div>
    )
}
