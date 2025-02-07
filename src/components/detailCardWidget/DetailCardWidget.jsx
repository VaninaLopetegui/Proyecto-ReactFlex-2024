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
            {carrito.map( (producto) => {
                const precioTotalPorUnidad = producto.precio * producto.cantidad;

                return (    
                    <div className="seccionProductosCarrito d-flex flex-column justify-content-center align-items-center">
                        <div className="seccionProductoCarrito d-flex flex-row align-items-center justify-content-around" key={producto.id}>
                            <img src={producto.img}></img>
                            <h5>Nombre: "{producto.nombre}"</h5>
                            <h5>Cantidad elegida: {producto.cantidad}</h5>
                            <h5>
                                Precio : USD {precioTotalPorUnidad} 
                                {producto.cantidad > 1 && <span className="productoPrecioPorUnidad">(precio por unidad: {producto.precio} usd)</span>}
                            </h5>
                            <button onClick={() =>{eliminarProducto(producto)}}>
                                <Icon icon="solar:trash-bin-minimalistic-bold" />
                            </button>
                        </div>
                    </div>
                )
            })}
            {totalCarrito === 0 ? (
                <div className="seccionPagarCarrito d-flex flex-row justify-content-around align-items-center">
                    <h2>No hay ningún producto en tu carrito aún!</h2>
                </div>
            ) : (
                <div className="seccionPagarCarrito d-flex flex-row justify-content-around align-items-center">
                    <h2>Total a pagar: USD {totalCarrito}</h2> 
                    <Button onClick={enviarCarrito}>Pagar</Button>
                </div>
            )}
            
        </div>
    )
}