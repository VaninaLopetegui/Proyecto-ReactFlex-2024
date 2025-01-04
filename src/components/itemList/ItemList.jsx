import { ItemCard } from "../itemCard/ItemCard"

export const ItemList = ({products}) => {
    return (
        <div className="d-flex flex-row flex-wrap justify-content-center">
        {
            products.map((product) =>{
            return (
            <ItemCard key={product.id} 
                    id={product.id}
                    nombre={product.nombre} 
                    precio={product.precio} 
                    categoria={product.categoria} 
                    img={product.img}
            />)
        })
        }
        </div>
    )
}

