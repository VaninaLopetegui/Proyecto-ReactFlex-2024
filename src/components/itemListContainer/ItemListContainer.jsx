import { useEffect, useState } from "react"; 
import './itemListContainer.css';
import { ItemList } from '../itemList/ItemList';
import { productos } from "../../data/productos";

export function ItemListContainer() {
    const [products, setProducts] = useState([]);

    useEffect (() => {
        const getProducts = new Promise ((resolve) => {
            setTimeout(() => {
                resolve(productos)
            }, 2000)
        })

        getProducts.then((data) => {
            setProducts(data);
        })

    }, []);
    return (
        <div className="container w-100">
            <ItemList products={products} />
        </div>
    );
}