import { createContext, useState, useEffect  } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) =>{
    const [carrito, setCarrito] = useState([]);
    const [totalCarrito, setTotalCarrito] = useState(0);

    useEffect(() => {
      const nuevoTotal = carrito.reduce((total, producto) => total + producto.precio * producto.cantidad, 0);
        setTotalCarrito(nuevoTotal);
    }, [carrito]);

    const agregarAlCarrito = (productSelect, cantidad) =>{
        let productoAgregado = { ...productSelect, cantidad };
        let encontroProduct =  carrito.find(item => item.id === productSelect.id);
        encontroProduct ? encontroProduct.cantidad += cantidad : setCarrito([...carrito, productoAgregado]) ;
    }

    const enviarCarrito = () =>{
        setCarrito([]);
    }

    const eliminarProducto = (producto) => {
        const carritoActualizado = carrito.filter(item => item.id != producto.id);
        console.log("se eliminó producto elegido: ", producto);
        setCarrito(carritoActualizado);
    }
    return (
        <CartContext.Provider value={{carrito, agregarAlCarrito, enviarCarrito, setTotalCarrito, totalCarrito, eliminarProducto}}>
            {children}
        </CartContext.Provider>
    )
}