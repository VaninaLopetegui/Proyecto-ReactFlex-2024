import "./detailCartWidget.css";
import { useContext, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import { Icon } from "@iconify/react";
import Button from 'react-bootstrap/Button';

export const DetailCartWidget = () =>{
    const { carrito, setCarrito, enviarCarrito, totalCarrito, eliminarProducto} = useContext(CartContext);

    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <h1>Tu carrito :</h1>
            {
                carrito.length === 0 ? 
                <div className="seccionPagarCarrito d-flex flex-row justify-content-around align-items-center">
                    <h2>No hay ningún producto en tu carrito aún!</h2>
                </div>
                :
                (
                    carrito.map((producto) => 
                        (
                        <div className="seccionProductosCarrito d-flex flex-column justify-content-center align-items-center">
                            <div key={producto.id} className="seccionProductoCarrito d-flex flex-row align-items-center justify-content-around">
                                <img src={producto.img} alt={producto.nombre} />
                                <h5>Nombre: "{producto.nombre}"</h5>
                                <h5>Cantidad elegida: {producto.cantidad}</h5>
                                <h5>
                                Precio : USD {producto.precio * producto.cantidad} 
                                {producto.cantidad > 1 && <span className="productoPrecioPorUnidad">(precio por unidad: {producto.precio} USD)</span>}
                                </h5>
                                <button onClick={() => eliminarProducto(producto)}>
                                <Icon icon="solar:trash-bin-minimalistic-bold" />
                                </button>
                            </div>
                        </div>
                    ))
                )
            }
        </div>
    )
}