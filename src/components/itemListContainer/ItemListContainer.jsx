import { useEffect, useState } from "react";
import "./itemListContainer.css";
import { ItemList } from "../itemList/ItemList";
import { useParams } from "react-router-dom";
import { SearchBar } from "../searchBar/SearchBar";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";

export function ItemListContainer() {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const { id } = useParams();


    useEffect(() => {
        const productsCollection = collection(db, "products");

        getDocs(productsCollection)
            .then((snapshot) => {
                const productsData = snapshot.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                }));
                setProducts(productsData);
                setFilteredProducts(productsData);
            })
    }, []);


    useEffect(() => {
        if (id) {
            if (id === "all") {
                setFilteredProducts(products);
            } else {
                const filtered = products.filter((product) =>
                    product.categoria.toLowerCase() === id.toLowerCase()
                );
                setFilteredProducts(filtered);
            }
        } else {
            setFilteredProducts(products);
        }
    }, [id, products]);

    return (
        <div className="container w-100 containerList d-flex flex-column align-items-center">
            <SearchBar products={filteredProducts} onFilter={setFilteredProducts} />
            <ItemList products={filteredProducts} />
        </div>
    );
}
