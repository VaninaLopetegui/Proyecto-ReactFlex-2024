import { useEffect, useState } from "react"; 
import './itemListContainer.css';
import { ItemList } from '../itemList/ItemList';
import { productos } from "../../data/productos";
import { useParams } from "react-router-dom";
import { SearchBar } from "../searchBar/SearchBar";

export function ItemListContainer() {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const {id} = useParams();

    useEffect (() => {
        const getProducts = new Promise ((resolve) => {
            setTimeout(() => {
                resolve(productos)
            }, 500)
        })

        getProducts.then((data) => {
            if (id){
                if (id==="all"){
                    setProducts(data);
                } else {
                    const filteredProducts = data.filter(product => product.categoria.toLowerCase() === id.toLowerCase());
                    setProducts(filteredProducts);
                }
            } else {
                setProducts(data);
            }
        })

    }, [id]);

    useEffect(() => {
        setFilteredProducts(products);
    }, [products]);

    return (
        <div className="container w-100 containerList d-flex flex-column align-items-center">
            <SearchBar products={products} onFilter={setFilteredProducts}/>
            <ItemList products={filteredProducts}/>
        </div>
    );
}