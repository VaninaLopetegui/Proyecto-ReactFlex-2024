import { useEffect, useState } from "react"; 
import './itemListContainer.css';
import { ItemList } from '../itemList/ItemList';
import { productos } from "../../data/productos";
import { useParams } from "react-router-dom";

export function ItemListContainer() {
    const [products, setProducts] = useState([]);
    const {id} = useParams();

    useEffect (() => {
        const getProducts = new Promise ((resolve) => {
            setTimeout(() => {
                resolve(productos)
            }, 2000)
        })

        getProducts.then((data) => {
            if (id){
                const filteredProducts = data.filter(product => product.categoria.toLowerCase() === id.toLowerCase());
                setProducts(filteredProducts);
            } else {
                setProducts(data);
            }
        })

    }, [id]);
    return (
        <div className="container w-100">
            <ItemList products={products} />
        </div>
    );
}