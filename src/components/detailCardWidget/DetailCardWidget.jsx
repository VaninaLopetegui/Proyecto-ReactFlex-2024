import "./detailCartWidget.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const DetailCartWidget = () =>{
    const { carrito, setCarrito } = useContext(CartContext);

    return (
        <>
            {carrito.map( (producto) => {
                return (
                    <div key={producto.id}>
                        <h2>Nombre: {producto.nombre}</h2>
                        <h4>Cantidad elegida: {producto.cantidad}</h4>
                    </div>
                )
            }
            )}
        </>
    )
}